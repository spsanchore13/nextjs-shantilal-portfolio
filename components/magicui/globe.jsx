"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [12.9716, 77.5946], size: 0.08 }, // Bangalore, India
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) {
      console.log("Globe: Container or canvas ref not available");
      return;
    }

    console.log("Globe: Starting initialization");

    const onResize = () => {
      if (containerRef.current) {
        width = containerRef.current.offsetWidth;
        console.log("Globe: Container width:", width);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Wait for container to be properly sized
    const initGlobe = () => {
      if (!canvasRef.current) {
        console.log("Globe: Canvas not ready");
        return;
      }

      // Get container dimensions
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      console.log(
        "Globe: Container dimensions:",
        containerWidth,
        "x",
        containerHeight
      );

      if (containerWidth === 0 || containerHeight === 0) {
        console.log("Globe: Container has zero dimensions, retrying...");
        setTimeout(initGlobe, 100);
        return;
      }

      try {
        // Calculate the actual canvas size based on container
        // Use the smaller dimension to ensure it fits
        const maxSize = Math.min(
          containerWidth,
          containerHeight,
          600 // Fixed size for desktop
        );
        const canvasSize = Math.max(maxSize * 0.8, 300); // Minimum size based on device

        console.log("Globe: Canvas size calculated:", canvasSize);

        const globe = createGlobe(canvasRef.current, {
          ...config,
          width: canvasSize * 2,
          height: canvasSize * 2,
          onRender: (state) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + rs.get();
            state.width = canvasSize * 2;
            state.height = canvasSize * 2;
          },
        });

        // Show canvas immediately
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
          setIsLoaded(true);
          console.log("Globe: Canvas made visible with size:", canvasSize);
        }

        return () => {
          globe.destroy();
        };
      } catch (error) {
        console.error("Globe: Error initializing globe:", error);
        setHasError(true);
        // Fallback: make canvas visible anyway
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
          setIsLoaded(true);
          console.log("Globe: Canvas made visible (fallback)");
        }
        return () => {};
      }
    };

    // Initialize with a longer delay on mobile to ensure proper sizing
    const initDelay = 50; // Reduced delay

    console.log("Globe: Setting initialization delay:", initDelay, "ms");

    const timeoutId = setTimeout(initGlobe, initDelay);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full flex items-center justify-center bg-transparent overflow-hidden",
        className
      )}
      style={{
        zIndex: 1,
        minHeight: "300px",
        maxHeight: "100%",
      }}
    >
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-full">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">🌍</div>
            <div className="text-sm">Interactive Globe</div>
            <div className="text-xs mt-1">Bangalore, India</div>
          </div>
        </div>
      )}
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-700 ease-out",
          isLoaded && "opacity-100"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
        style={{
          contain: "layout paint size",
          zIndex: 2,
        }}
      />
    </div>
  );
}

"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Github, Link } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ProjectCard = ({
  title,
  description,
  images,
  technologies,
  github,
  live,
}) => {
  return (
    <Card className="w-[400px] flex flex-col">
      <CardHeader>
        <CardDescription>
          <HoverCard>
            <HoverCardTrigger>
              <CardTitle className="text-black dark:text-white cursor-pointer">
                {title}
              </CardTitle>
            </HoverCardTrigger>
            <HoverCardContent className="w-[380px]">
              {description}
            </HoverCardContent>
          </HoverCard>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="h-[200px]">
                  <img src={image.url} alt={title} className="h-full w-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        }
      </CardContent>
      <CardFooter className="flex justify-between">
        <button onClick={() => window.open(live)}>
          <Link />
        </button>
        <button onClick={() => window.open(github)}>
          <Github />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

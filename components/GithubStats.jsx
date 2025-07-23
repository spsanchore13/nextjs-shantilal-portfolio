"use client";

import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

const GithubStats = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 14;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <>
      <section id="github" className="w-full h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center"
        >
          Github Portfolio
        </motion.h2>

        <div className="w-full flex justify-center items-center">
          <GitHubCalendar
            //   transformData={selectLastHalfYear}
            data-tooltip-id="calender"
            username="spsanchore13"
          >
            <ReactTooltip
              delayShow={10}
              id="calender"
              place="bottom"
              variant="info"
              content="hello"
            />
          </GitHubCalendar>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-6">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=spsanchore13"
            alt="github streak"
          />

          <img
            src="https://github-readme-stats.vercel.app/api?username=spsanchore13"
            alt="github stats"
          />
        </div>
      </section>
      {/* <div id="github-summery" className="h-screen">
        <iframe
          className="rounded-md"
          height="100%"
          width="100%"
          src="https://profile-summary-for-github.com/user/spsanchore13"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div> */}
    </>
  );
};

export default GithubStats;

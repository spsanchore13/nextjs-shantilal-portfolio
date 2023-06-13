"use client";

import GitHubCalendar from "react-github-calendar";
import { ReactTooltip } from "react-tooltip";
import Image from "next/image";

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
    <div id="github" className="w-full h-[80vh]">
      <h1 className="text-3xl text-center mb-10">
        Github <span className="text-teal-400">Stats</span>
      </h1>

      <div className="w-full flex justify-center items-center">
        <GitHubCalendar
          //   transformData={selectLastHalfYear}
          username="spsanchore13"
        >
          <ReactTooltip delayShow={10} html />
        </GitHubCalendar>
      </div>

      <div className="w-full flex  justify-center items-center gap-3 mt-3">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=spsanchore13"
          alt="github streak"
        />

        <img
          src="https://github-readme-stats.vercel.app/api?username=spsanchore13"
          alt="github stats"
        />
      </div>
    </div>
  );
};

export default GithubStats;

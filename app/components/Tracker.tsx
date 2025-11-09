"use client";

type Props = {
  rDate?: string;
};

import { useEffect, useState } from "react";
import DisplayBox from "./DisplayBox";

function Tracker({ rDate }: Props) {
  // Implement tracking days left until GTA VI release
  // Nov 19, 2026

  const [yearsLeft, setYearsLeft] = useState<number | null>(null);
  const [monthsLeft, setMonthsLeft] = useState<number | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [hoursLeft, setHoursLeft] = useState<number | null>(null);
  const [minutesLeft, setMinutesLeft] = useState<number | null>(null);

  useEffect(() => {
    const releaseDate = new Date(rDate || "2026-11-19T00:00:00");
    setInterval(() => {
      const now = new Date();
      const timeDiff = releaseDate.getTime() - now.getTime();

      const yearsLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 365));
      const monthsLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 30));
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.ceil(timeDiff / (1000 * 60 * 60));
      const minutesLeft = Math.ceil(timeDiff / (1000 * 60));

      setYearsLeft(yearsLeft);
      setMonthsLeft(monthsLeft);
      setDaysLeft(daysLeft);
      setHoursLeft(hoursLeft);
      setMinutesLeft(minutesLeft);
    }, 120);
  });

  return (
    <div>
      <p className="text-green-500 text-lg m-3 p-4 font-ubuntu-mono">
        TIME UNTIL GTA VI:
      </p>
      <div className="border-5 flex justify-center *:m-5 border-sky-700 rounded-xl m-2 p-3 ">
        <DisplayBox title="YEARS LEFT">{yearsLeft}</DisplayBox>
        <DisplayBox title="MONTHS LEFT">{monthsLeft}</DisplayBox>
        <DisplayBox title="DAYS LEFT">{daysLeft}</DisplayBox>
        <DisplayBox title="HOURS LEFT">{hoursLeft}</DisplayBox>
        <DisplayBox title="MINUTES LEFT">{minutesLeft}</DisplayBox>
      </div>
    </div>
  );
}

export default Tracker;

"use client";

import Tracker from "../components/Tracker";

function page() {
  return (
    <div className="text-center m-1 p-2">
      <h1 className="text-4xl font-fredoka font-bold">TrackDates</h1>
      <Tracker rDate="2077-01-28T00:00:00Z" />
    </div>
  );
}

export default page;

"use client";

import Tracker from "./components/Tracker";

function page() {
  return (
    <div className="text-center m-1 p-2">
      <h1 className="text-4xl font-fredoka font-bold">TrackDates</h1>
      <Tracker />
      <footer className="text-red-700 text-2xl font-nunito">
        SUBJECT TO CHANGE
      </footer>
    </div>
  );
}

export default page;

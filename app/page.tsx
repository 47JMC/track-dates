"use client";

import Tracker from "./components/Tracker";
import Link from "next/link";

function page() {
  return (
    <div className="text-center m-1 p-2">
      <h1 className="text-4xl font-fredoka font-bold">TrackDates</h1>
      <Tracker />
      <footer className="text-red-700 text-3xl font-nunito font-extrabold">
        SUBJECT TO <Link href="/lol">CHANGE</Link>
      </footer>
    </div>
  );
}

export default page;

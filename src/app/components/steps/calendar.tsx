"use client";
import { useState } from "react";
import Loader from "../shared/loader";
type Props = {
  currentStep: number;
  setStep: Function;
  calendarAPI: Function;
};

const Calendar = ({ currentStep, setStep, calendarAPI }: Props) => {
  var [calendarConnected, setCalendar] = useState(false);
  var [connecting, setConnection] = useState(false);
  function connectCalendar() {
    // setConnection(true);
    calendarAPI().then((result: any)=>{
      console.log(result)
    })
    setCalendar(true);
  }
  return (
    <div className="flex flex-grow w-4/5 flex-col justify-around  items-center p-3 space-x-2 text-sm font-medium text-center">
      {connecting ? (
        <div className="h-72">
          <Loader sizeLoader={50}></Loader>
          <span>Connecting Calendar ...</span>
        </div>
      ) : calendarConnected ? (
        <div className="text-xs">
          <span>
            Calendar Successfully Connected!<br></br><span  className="text-xl">🎉</span> <br></br>You may proceed to the next step :)
          </span>
        </div>
      ) : (
        <div className="text-xs">
          <span>
            Since DSKTP calendar works with calendar data, you have to connect
            your google calendar by clicking the button below to open a tab on a
            new window in your favorite browser. The process is very straight
            forward.
          </span>
          <br></br>
          <br></br>
          <span>
            Please note: Since you are on beta, make sure to reach out to Leon
            for beta access.
          </span>
          <br></br>
        </div>
      )}

      {calendarConnected ? (
        <button
          type="button"
          onClick={() => setStep(currentStep + 1)}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
        >
          Next
        </button>
      ) : connecting ? (
        <></>
      ) : (
        <button
          type="button"
          onClick={connectCalendar}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-12 py-1.5 text-center me-2 mb-2"
        >
          Connect Calendar
        </button>
      )}
    </div>
  );
};

export default Calendar;

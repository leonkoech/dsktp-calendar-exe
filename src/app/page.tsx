"use client";
import Image from "next/image";
import Step from "./components/steps";
import StepBodies from "./components/stepBodies";
import Welcome from "./components/welcome";
import { useEffect, useState } from "react";
import {
  SubmitFormAPI,
  CalendarCredentialsAPI,
  CheckServerStatusAPI
} from "./api/server";
import Loader from "./components/shared/loader";

export default function Home() {
  const [step, setData] = useState(0);
  const [terms, setTerms] = useState(false);
  const [setup, setSetup] = useState(false);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    isServerRunning();
  }, []);

  const setStep = (activeStep: number) => {
    setData(activeStep);
  };

  const submitForm = (data: any) => {
    SubmitFormAPI(data);
  };

  const isServerRunning = () => {
    CheckServerStatusAPI().then((value: boolean) => {
      setRunning(value);
      console.log(value);
      console.log(isRunning);
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {isRunning ? (
        terms && setup ? (
          <>
            <Step setStep={setStep} activeStep={step} />
            <StepBodies
              setStep={setStep}
              currentStep={step}
              submit={submitForm}
              calendarAPI={CalendarCredentialsAPI}
            />
          </>
        ) : (
          <Welcome termsBool={terms} setTerms={setTerms} setSetup={setSetup} />
        )
      ) : (
        <Loader sizeLoader={55}></Loader>
      )}
    </main>
  );
}

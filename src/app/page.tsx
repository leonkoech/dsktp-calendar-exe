"use client";
import Image from "next/image";
import Step from "./components/steps";
import StepBodies from "./components/stepBodies";
import Welcome from "./components/welcome";
import { useState } from "react";
import {SubmitFormAPI,CalendarCredentialsAPI} from "./api/server";

export default function Home() {
  const [step, setData] = useState(0);
  const [terms, setTerms] = useState(false);
  const [setup, setSetup] = useState(false)

  const setStep = (activeStep: number) => {
    setData(activeStep);
  };

  const submitForm = (data: any) => {
    SubmitFormAPI(data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {terms && setup? (
        <>
          <Step setStep={setStep} activeStep={step} />
          <StepBodies setStep={setStep} currentStep={step} submit={submitForm} calendarAPI={CalendarCredentialsAPI}/>
        </>
      ) : (
        <Welcome termsBool={terms} setTerms={setTerms} setSetup={setSetup} />
      )}
    </main>
  );
}

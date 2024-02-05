
import NextSVG from "./shared/nextIcon";

type Props = {
  setStep: Function, 
  activeStep: number
}

function Step({setStep, activeStep}: Props) {

  var styling = {
    active: {
      li: "flex items-center cursor-pointer  text-blue-600 dark:text-blue-500",
      number: "flex items-center justify-center  me-1 text-sm",
      span: "hidden sm:inline-flex sm:ms-2  border-blue-600 rounded-full shrink-0 dark:border-blue-500"
    },
    inactive: {
      li: "flex items-center cursor-pointer ",
      number: "flex items-center justify-center  me-1 text-sm",
      span: "hidden sm:inline-flex sm:ms-2"
    }
  };

  function changeClassName(idx: number){
    setStep(idx);
  }
  return (
    <ol className="flex items-center p-3 space-x-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className={activeStep==0?styling.active.li:styling.inactive.li}  onClick={()=>changeClassName(0)}>
        <span className={activeStep==0?styling.active.number:styling.inactive.number}>1.</span>
        Calendar{" "} <span className={activeStep==0?styling.active.span:styling.inactive.span}>Setup</span>
       <NextSVG />
      </li>
      <li className={activeStep==1?styling.active.li:styling.inactive.li}  onClick={()=>changeClassName(1)}>
        <span className={activeStep==1?styling.active.number:styling.inactive.number}>2.</span>
        Component{" "} <span className={activeStep==1?styling.active.span:styling.inactive.span}>Setup</span>
        <NextSVG />
      </li>
      <li className={activeStep==2?styling.active.li:styling.inactive.li}  onClick={()=>changeClassName(2)}>
        <span className={activeStep==2?styling.active.number:styling.inactive.number}>3.</span>
        Optional{" "} <span className={activeStep==2?styling.active.span:styling.inactive.span}>Settings</span>
      </li>
    </ol>
  );
};

export default Step;

import Selector from "./selectors";

const Customize = ({type, customizationStep, nextCustomStep, setCustomizeCompletion}:any) =>{

    return (
        <div className="w-full">
               <>
                <span className="text-xl capitalize">{type} Event Customization</span><br></br>
                <span className="text-xs">These are events that have not yet occurred, but will. </span>
                </>
            <Selector type={type}  customizationStep={customizationStep}
            nextCustomStep={nextCustomStep}
            setCustomizeCompletion={setCustomizeCompletion}
            />

        </div>

    )

}

export default Customize;
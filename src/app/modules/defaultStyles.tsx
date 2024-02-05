import { DefaultColorsModel, CustomConfigurations, CustomOptions, DefaultResults } from "../models/defaultConfigs"
 const defaultColors: DefaultColorsModel = {
    upcoming:{
        borderColor: "rgba(47,47,47,255)",
        borderWidth: 0.5,
        textColor: "#2C2C2C",
        textSize: 11,
        backgroundColor: "rgba(47,47,47,0)",
        borderRadius: 10,
        canvasColor: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
    } as CustomConfigurations,
    current:{
        borderColor: "transparent",
        borderWidth: 0,
        textColor: "#CC33FF",
        textSize: 11,
        backgroundColor: "rgba(204,51,255,0.5)",
        borderRadius: 10,
        canvasColor: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,86,103,1) 100%)"
    } as CustomConfigurations,
    inactive:{
        borderColor: "transparent",
        borderWidth: 0,
        textColor: "#FFFFFF",
        textSize: 11,
        backgroundColor: "rgba(44,44,44,100)",
        borderRadius: 10,
        canvasColor: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,172,172,1) 47%, rgba(78,255,205,1) 100%)"
    } as CustomConfigurations,
}

const optionalSettings: CustomOptions = {
    maxComponentCount: 7,
    maxFetchCount: 1,
    fetchTime: "07:30"
}

const defaultResults: DefaultResults = {
    customization: defaultColors,
    options: optionalSettings
}

export {optionalSettings, defaultColors, defaultResults}
import {
  DefaultColorsModel,
  CustomConfigurations,
  CustomOptions,
  DefaultResults,
  InputCustomization,
  InputCustomizationEngineModel,
  TypeOfInput
} from "../models/defaultConfigs";
const defaultColors: DefaultColorsModel = {
  upcoming: {
    borderColor: "rgba(47,47,47,255)",
    borderWidth: 0.5,
    textColor: "#2C2C2C",
    backgroundColor: "rgba(47,47,47,0)",
    borderRadius: 10,
    canvasColor:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
  } as CustomConfigurations,
  current: {
    borderColor: "transparent",
    borderWidth: 0,
    textColor: "#CC33FF",
    backgroundColor: "rgba(204,51,255,0.5)",
    borderRadius: 10,
    canvasColor:
      "linear-gradient(90deg, rgba(249,255,171,1) 0%, rgba(235,212,255,1) 100%)"
  } as CustomConfigurations,
  inactive: {
    borderColor: "transparent",
    borderWidth: 0,
    textColor: "#FFFFFF",
    backgroundColor: "rgba(44,44,44,100)",
    borderRadius: 10,
    canvasColor:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,172,172,1) 47%, rgba(78,255,205,1) 100%)"
  } as CustomConfigurations
};

const optionalSettings: CustomOptions = {
  maxComponentCount: 7,
  maxFetchCount: 1,
  fetchTime: "07:30"
};

const defaultResults: DefaultResults = {
  customization: defaultColors,
  options: optionalSettings
};

const inputCustomizationEngine: InputCustomizationEngineModel = {
  customization: {
    text: {
      list: ["Border Color", "Text Color", "Background Color", "Canvas Color"]
    },
    number: {
      list: ["Border Width", "Border Radius"]
    }
  },
  options: {
    text: {
      list: ["Fetch Time"]
    },
    number: {
      list: ["Max Fetch Count", "Max Component Count"]
    }
  },
  default: {
    text: {
      type: "text",
      pattern: undefined
    },
    number: {
      type: "number",
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
    }
  }
};

const customizationKeys: TypeOfInput[] = ["text", "number"];

const inputValuesGenerator = (
  inputCustomizationDefault: any
): InputCustomization[] => {
  return customizationKeys.flatMap((key: TypeOfInput) =>
    inputCustomizationDefault[key].list.map(
      (item: string) =>
        ({
          title: item,
          id: `${
            item.split(" ")[0].toLowerCase() +
            item.split(" ")[1] +
            (item.split(" ")[2] ?? "")
          }`,
          ...inputCustomizationEngine["default"][key]
        } as InputCustomization)
    )
  );
};

const inputCustomizationValues: InputCustomization[] = inputValuesGenerator(
  inputCustomizationEngine["customization"]
);
const inputOptionsValues: InputCustomization[] = inputValuesGenerator(
  inputCustomizationEngine["options"]
);

const eventDescriptions = {
  "current": "These are events that are occurring at the moment.",
  "upcoming": " These are events that have not yet occurred, but will.",
  "inactive": "These are events that have already occurred and are not active"
}

export {
  optionalSettings,
  defaultColors,
  defaultResults,
  inputCustomizationValues,
  inputOptionsValues,
  eventDescriptions
};

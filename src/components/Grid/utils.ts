import { propertyJustifyContent } from "./config";

export function getWidthGrid(gridWidth: number) {
  if (!gridWidth) return;

  let width = (100 / (12 / gridWidth)) * 1;

  return `flex-basis: ${width}%;`;
}

function spliText(text: string) {
  return String(text)
    .replace(/([A-Z])/g, "-$1")
    .replace(/^/, (str) => str.toLowerCase())
    .toLowerCase();
}

export function getPropertyJustifyContent(type: object) {
  const filter = Object.entries(type).find((value, key) => value[1] === true);

  return `justify-content:  ${
    filter !== undefined ? spliText(filter[0]) : "flex-start"
  }`;
}

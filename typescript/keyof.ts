const colorMapping = {
  red: "#ff0000",
  blue: "#0000ff",
  green: "#00ff00",
  purple: "#123874",
};

export function colorNameToHexCode(
  colorName: keyof typeof colorMapping
): string {
  return colorMapping[colorName];
}

colorNameToHexCode("purple");

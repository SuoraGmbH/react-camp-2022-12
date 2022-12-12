function sayGoodMorning(country: keyof typeof localization) {
  return <i>{localization[country]}</i>;
}
const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
};

function formatName(user: User) {
  return `${user.firstName} ${user.lastName}`;
}

interface User {
  firstName: string;
  lastName: string;
}
const user = {
  firstName: "Miriam",
  lastName: "Janssen",
};

const goodMorning = sayGoodMorning("de") + "Sara";

export const element = (
  <h1>
    {sayGoodMorning("de")}
    {formatName(user)}
  </h1>
);

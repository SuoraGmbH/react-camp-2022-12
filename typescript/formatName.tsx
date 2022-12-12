interface User {
  firstName: string;
  lastName: string;
}
//
// type User = {
//   firstName: string;
//   lastName: string;
// };

// type User = typeof someUser;

function formatName(user: User) {
  return `${user.firstName.toUpperCase()} ${user.lastName}`;
}

const someUser = {
  firstName: "Miriam",
  lastName: "Irgendwas",
};

formatName(someUser);

export const element = <h1>👋, {formatName(someUser)}!</h1>;

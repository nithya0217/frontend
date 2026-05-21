export type MockUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

const users: MockUser[] = [
  {
    id: 1,
    username: "demo",
    email: "demo@pivot.com",
    password: "demo1234",
  },
];

let nextUserId = users.length + 1;

export function findUserByUsername(username: string) {
  return users.find((user) => user.username === username);
}

export function createUser({ username, email, password }: Omit<MockUser, "id">) {
  const existingUser = findUserByUsername(username);
  if (existingUser) {
    throw new Error("Username already exists");
  }

  const user: MockUser = {
    id: nextUserId++,
    username,
    email,
    password,
  };

  users.push(user);
  return user;
}

export function validateUser(username: string, password: string) {
  const user = findUserByUsername(username);
  if (!user) return null;
  return user.password === password ? user : null;
}

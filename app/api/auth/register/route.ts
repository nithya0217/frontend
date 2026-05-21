import { NextResponse } from "next/server";
import { createUser, findUserByUsername } from "@/lib/mockAuth";

export async function POST(request: Request) {
  const payload = await request.json();
  const username = String(payload.username ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const password = String(payload.password ?? "").trim();

  if (!username || !email || !password) {
    return NextResponse.json(
      { error: "Missing username, email, or password." },
      { status: 400 },
    );
  }

  if (findUserByUsername(username)) {
    return NextResponse.json(
      { error: "A user with that username already exists." },
      { status: 409 },
    );
  }

  const user = createUser({ username, email, password });
  return NextResponse.json(
    { message: "Registration successful.", user: { id: user.id, username: user.username, email: user.email } },
    { status: 201 },
  );
}

import { NextResponse } from "next/server";
import { validateUser } from "@/lib/mockAuth";

export async function POST(request: Request) {
  const payload = await request.json();
  const username = String(payload.username ?? "").trim();
  const password = String(payload.password ?? "").trim();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Missing username or password." },
      { status: 400 },
    );
  }

  const user = validateUser(username, password);
  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials." },
      { status: 401 },
    );
  }

  return NextResponse.json(
    { message: "Login successful.", user: { id: user.id, username: user.username, email: user.email } },
    { status: 200 },
  );
}

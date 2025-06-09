import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RegisterData, AuthResponse } from "@/lib/api/types";

export async function POST(request: NextRequest) {
  try {
    const { email, password, username }: RegisterData = await request.json();
    console.log("register info===>", email, password, username);
    // Mock backend logic
    // const response: AuthResponse = { token: 'mock-jwt-token', user: { email, username } };
    // return NextResponse.json(response, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

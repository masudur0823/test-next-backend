import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    result: { id: 1, name: "Kazi Masudur Rahman", age: 12 },
    success: true,
  });
}

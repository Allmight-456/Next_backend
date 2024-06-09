import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Database logic
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return NextResponse.json({
    msg: "You are logged in"
  });
}

export async function GET() {
  return  NextResponse.json({
    name: "Ishan Kumar",
    email: "bhardwajishansingh@gmail.com",
  });
}

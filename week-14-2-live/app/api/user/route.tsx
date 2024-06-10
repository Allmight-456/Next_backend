import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
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
  } catch (error) {
    console.error("Error during user creation/user already exists", error);

    // Assuming that an error indicates a problem with the input, like a wrong password
    return NextResponse.json({
      error: "User already exists , Sign In"
    }, { status: 400 });
  }
}

//now for fetching the data from the database and displaying it
export async function GET(req:NextRequest) {
  const user = await client.user.findFirst()
  return  NextResponse.json({
    name: user?.username,
    email: "bhardwajishansingh@gmail.com",
  });
}

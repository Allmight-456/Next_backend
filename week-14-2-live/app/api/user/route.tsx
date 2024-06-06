import { NextRequest } from "next/server";
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

  return new Response(JSON.stringify({
    msg: "You are logged in"
  }), {
    status: 200
  });
}

export async function GET() {
  return new Response(JSON.stringify({
    name: "Ishan Kumar",
    email: "bhardwajishansingh@gmail.com",
  }), {
    status: 200,
  });
}

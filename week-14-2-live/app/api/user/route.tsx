//for this to run save then , control+c , then rerun "npm run dev"
//name needs to be "route.tsx" for it be consired backend, else for "page.tsx" it 
// page.tsx will be considered as frontend

import { NextRequest } from "next/server"

export async function POST(req:NextRequest){
    //database logic

    const body = await req.json();
    console.log(body);
    return Response.json({
        msg:"You are logged in"
    })
}

export async function GET() {
    return Response.json({
        name:" Ishan Kumar",
        email: " bhardwajishansingh@gmail.com",
        
    });
  }



        
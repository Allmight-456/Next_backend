//for this to run , control+c , then rerun "npm run dev"

export function GET(){
    //database logic
    return Response.json({
        name:"Ishan",
        email: "bhardwajishansingh@gmail.com",
        address:{"city":"Begusarai","pin":"851101"}
    })
}
import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get(
      "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    //lets the loading page be there for 2 seconds
    await new Promise((r)=>setTimeout(r,2000))
    return response.data;
  } catch (error) {
    console.error("Unable to ftech backend", error);
  }
}

export default async function Home() {
  let UserDetails: { name: string; email: string ; address:Array} | null = null;
  try {
    //do not write const
    UserDetails = await getUserDetails();
  } catch (error) {
    console.error("Failed to load User data", error);
    return <div>Failed to Load Data</div>;
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {UserDetails?.name}
          </div>
          {UserDetails?.email} 
          <div>
          {UserDetails?.address.city}
          </div>
        </div>
      </div>
    </div>
  );
}

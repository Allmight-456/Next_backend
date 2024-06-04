import axios from "axios";

async function getUserDetails() {
  try {
    const response = await axios.get(
      "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    return response.data;
  } catch (error) {
    console.error("Unable to ftech backend", error);
  }
}

export default async function Home() {
  let UserDetails: { name: string; email: string } | null = null;
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
        </div>
      </div>
    </div>
  );
}

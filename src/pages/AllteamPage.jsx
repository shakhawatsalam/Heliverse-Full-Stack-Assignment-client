import React from "react";
import NavBar from "../component/NavBar";
import { useGetAllTeamsQuery } from "../redux/team/teamApi";
import UserCard from "../component/UserCard";

function AllteamPage() {
  const { data } = useGetAllTeamsQuery({});
  const teamData = data?.data;
  console.log(teamData);
  return (
    <>
      <div className='container mx-auto'>
        <NavBar />
        <h1 className='mt-10 text-center text-2xl font-bold mb-5'>All Teams</h1>
        {teamData?.map((team, index) => (
          <div className='bg-orange-200 w-full mb-5 p-10'>
            <h1 className='text-3xl font-bold'>Team Name: {team.teamName}</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center mt-10'>
              {team.teams?.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllteamPage;

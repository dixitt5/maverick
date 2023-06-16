import React, { useState, useEffect } from "react";
import { Heading, Input } from "@chakra-ui/react";
import Link from "next/link";
import { Select } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import Team from "@/components/Team";

export default function Tournament() {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentType, setTournamentType] = useState("");
  const [totalRounds, setTotalRounds] = useState("");
  const [participantCount, setParticipantCount] = useState("");
  const [gameName, setGameName] = useState("");
  const [nosOfTeam, setNosOfTeam] = useState("");
  const [id, setId] = useState("");
  const [winnerpay, setWinnerpay] = useState("");
  

  const handleWinnersPayout = (e) => {
    const commaSeparatedString = e.target.value;
    const array = commaSeparatedString.split(",");
    const numArray = array.map(Number);
    setWinnerpay(numArray);
  };

  function generateRandomId() {
    const timestamp = Date.now().toString(36); // Get current timestamp and convert it to base-36 string

    return timestamp;
  }

  // Example usage
  useEffect(() => {
    setId(generateRandomId());
  }, []);

  const handleRendering = () => {
    if (nosOfTeam & 1) {
      return;
    }
    const Items = [];
    for (let i = 0; i < nosOfTeam; i++) {
      Items.push(<Team key={i} />);
    }

    return Items;
  };

  return (
    <Layout headTitle="Tournament Generator">
    <div className="min-h-screen min-w-fit items-center content-center flex flex-col">
      <Heading as="h1" size="xl" className="text-black m-10 dark:text-white">
        Tournament Generator
      </Heading>
      
      <form className="items-center content-center ml-0">
        {/* Tournament name */}
        <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
          <label
            className="w-full text-end text-black text-lg font-medium dark:text-white "
            htmlFor="tournamentName"
          >
            Tournament Name:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-black px-6 text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              variant="filled"
              placeholder="Tournament Name"
              id="tournamentName"
              value={tournamentName}
              onChange={(e) => {
                setTournamentName(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Tournament Type */}
        <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
          <label
            className="text-end w-full text-black text-lg font-medium dark:text-white"
            htmlFor="tournamentType"
          >
            Tournament Type:
          </label>
          <Select
            className="w-full h-[40px] rounded-md text-black text-lg font-normal dark:text-[#b768b6]"
            id="tournamentType"
            value={tournamentType}
            variant="filled"
            onChange={(e) => setTournamentType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="singleElimination">Single Elimination</option>
            <option value="doubleElimination">Double Elimination</option>
          </Select>
        </div>

        {/* Player Ids */}
        {/* <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
          <label
            className="text-end w-full text-[#A9A9A9] text-lg font-medium "
            htmlFor="playerIds"
          >
            Player IDs:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
              type="text"
              id="playerIds"
              value={playerIds}
              onChange={(e) => setPlayerIds(e.target.value)}
            />
          </div>
        </div> */}

        {/* Total Rounds */}
        <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
          <label
            className="text-end w-full text-black text-lg font-medium dark:text-white"
            htmlFor="totalRounds"
          >
            Total Rounds:{" "}
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              type="number"
              id="totalRounds"
              variant="filled"
              placeholder="Total Rounds"
              value={totalRounds}
              onChange={(e) => setTotalRounds(e.target.value)}
            />
          </div>
        </div>

        {/* Round Winners */}
        {/* <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
          <label
            className="text-end w-full text-[#A9A9A9] text-lg font-medium "
            htmlFor="roundWinner"
          >
            Round Winners:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-white font-base font-normal"
              type="text"
              id="roundWinner"
              variant="filled"
              placeholder="Round Winner"
              //   value={roundWinners}
              //   onChange={(e) => {
              //     handleWinnersNumbers(e);
              //   }}
            />
          </div>
        </div> */}

        {/* Payment to Player */}
        <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
          <label
            className="text-end w-full text-black text-lg font-medium dark:text-white "
            htmlFor="payment"
          >
            Payment to Players:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              type="text"
              variant="filled"
              placeholder="Winning Amount"
              id="payment"
              value={winnerpay}
              onChange={(e) => handleWinnersPayout(e)}
            />
          </div>
        </div>

        {/* No of participants */}
        <div className="flex w-[625px] gap-6  justify-between items-center mb-6">
          <label
            className="text-end w-full text-black text-lg font-medium dark:text-white"
            htmlFor="participants"
          >
            Number of Participants:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              type="text"
              id="participants"
              value={participantCount}
              onChange={(e) => setParticipantCount(e.target.value)}
              variant="filled"
              placeholder="Number of Participants"
            />
          </div>
        </div>

        {/* Game Name */}
        <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
          <label
            className="w-full text-end text-black text-lg font-medium dark:text-white"
            htmlFor="gameName"
          >
            Game Name:
          </label>
          <div className="w-full h-[40px] rounded-lg bg-[#303540] overflow-hidden text-ellipsis text-black hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              type="text"
              id="gameName"
              placeholder="Game Name"
              variant="filled"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
          </div>
        </div>

        {/* Nos of teams participating */}
        <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
          <label
            className="w-full text-end text-black text-lg font-medium dark:text-white"
            htmlFor="tournamentName"
          >
            Number Of Teams:
          </label>
          <div className="w-full h-[40px] rounded-lg overflow-hidden text-ellipsis bg-[#303540] hover:border hover:border-amber-600">
            <Input
              className="w-full h-full rounded-lg bg-inherit px-6 overflow-hidden text-ellipsis outline-amber-600 text-gray-500 font-base font-normal"
              type="number"
              id="nosOfTeam"
              value={nosOfTeam}
              variant="filled"
              placeholder="Number of Teams"
              onChange={(e) => {
                setNosOfTeam(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Rendering no of teams */}
        <div className="w-full flex justify-center items-center ml-20 mb-3">
          <div className="flex gap-4 max-w-[450px] overflow-auto">
            {handleRendering()}
          </div>
        </div>

        {/* Link to brackets */}
        <div className="flex w-[625px] gap-6 justify-between items-center mb-6">
          <div className="w-full"></div>
          <div className="w-full flex ">
            <Link
              href={"/brackets"}
              className="w-auto text-white bg-gradient-to-br from-violet-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 "
            >
              <button type="submit">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
    </Layout>
  );
}

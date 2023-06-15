import React from "react";
import Link from "next/link";
// import "./App.css";
import { Bracket } from "react-tournament-bracket";
import Layout from "@/components/layout/layout";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
const game2 = {
  //game  1 upper bracket
  id: "2",
  name: "Game 1",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "12",
        name: "Sam",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "13",
        name: "Jhon",
      },
      score: {
        score: 0,
      },
    },
  },
};

const game5 = {
  //game  1 upper bracket
  id: "2",
  name: "Game 1",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "12",
        name: "Team vibhu",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "13",
        name: "Team thau",
      },
      score: {
        score: 0,
      },
    },
  },
};
const game3 = {
  id: "3",
  name: "Game 2",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Ganesh",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Rohit",
      },
      score: {
        score: 10,
      },
    },
  },
};
const game4 = {
  id: "3",
  name: "Game 2",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gan",
      },
      score: {
        score: 1,
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
    },
  },
};
const game6Test = {
  id: "3",
  name: "game 6 with game 4 and 5",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gopi",
      },
      score: {
        score: 1,
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game4,
        sourcePool: {},
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game5,
        sourcePool: {},
      },
    },
  },
};
const game1 = {
  //players Id
  id: "1",
  name: "Finals",//bracnket name
  scheduled: Number(new Date()),//time for competition
  sides: {
    home: {
      team: {
        id: "10",
        name: "Sam"
      },
      score: {
        score: 2
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game2,
        sourcePool: {}
      }
    },
    visitor: {
      team: {
        id: "11",
        name: "Rohit"
      },
      score: {
        score: 3
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game3,
        sourcePool: {}
      }
    }
  }
};
const final = {
  id: "3",
  name: "game 6 with game 4 and 5",
  scheduled: Number(new Date()),
  sides: {
    home: {
      team: {
        id: "11",
        name: "Team gopi",
      },
      score: {
        score: 1,
      },
      seed: {
        displayName: "A1",
        rank: 1,
        sourceGame: game6Test,
        sourcePool: {},
      },
    },
    visitor: {
      team: {
        id: "12",
        name: "Team ath",
      },
      score: {
        score: 10,
      },
      seed: {
        displayName: "A2",
        rank: 1,
        sourceGame: game5,
        sourcePool: {},
      },
    },
  },
};
// function brac() {
//   let rankOne = 0;
//   let dk = [{ stage: "round 1" }];
//   const findRounds1 = dk.filter((value) => value.stage === "round 1");
//   if (findRounds1.length !== 0) {
//     rankOne = 1;
//   }
// }
const Teams = [
  <Bracket game={game1} />,
];
const Semis = () => {
  return (
    <Layout headTitle="Semis">
    <Heading
        as="h1"
        size="xl"
        className="text-black m-10 dark:text-white text-center"
      >
        Semis
      </Heading>
    <div class="min-h-screen min-w-fit bg-gradient-to-br ">
      {Teams.map((Team, index) => (
        <div key={index}>
          <h2 className="ml-[800px] text-black text-xl font-bold dark:text-white">
            Round {index + 1}
          </h2>
          <div className="flex justify-center items-center">
            <div className="border border-gray-500 rounded-md p-4">
              <button>{Team}</button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center mt-4 ">
          <Button
            
            colorScheme="purple"
            variant="solid"
          >
            <Link
            href={"/final"}
            // className="mt-4 border border-white text-white bg-violet-500 px-4 py-2 rounded-md"
          >
            Final Round
          </Link>
          </Button>
          
        </div> 
    </div>
    </Layout>
  );
};

export default Semis;

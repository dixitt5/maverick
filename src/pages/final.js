import Layout from "@/components/layout/layout";
import { Heading } from "@chakra-ui/react";
import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
const WinnerPage = () => {
  const [width, height] = useWindowSize();
  return (
    <Layout headTitle="Winner Page">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={2000}
        recycle={false}
      />
      <Heading
        as="h1"
        size="2xl"
        className="text-black dark:text-white mt-10 text-center"
      >
        Congratulations Rohit, You're the Winner!
      </Heading>
      <div className="mt-10 content-center flex flex-row justify-center">
        <Image
          src="/giphy.gif"
          width={350}
          height={350}
          alt="congratulating"
          
        />
      </div>
    </Layout>
  );
};

export default WinnerPage;

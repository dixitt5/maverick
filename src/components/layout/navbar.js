import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="w-full mx-auto py-5 px-2 lg:px-0">
        <div className="max-w-auto container flex flex-row justify-between items-center content-center space-x-5 gap-4 mr-auto">
          <div className="">
            <Image src="/maverick.png" width={200} height={200} alt="logo" />
          </div>

          <div className="flex flex-row justify-end items-center content-center gap-4 mr-20">
            <ConnectKitButton />
            {theme === "light" ? (
              <BiMoon
                size="25"
                onClick={switchTheme}
                className="text-[#5b7a8a] hover:cursor-pointer dark:text-[#3d7f91]"
              />
            ) : (
              <BiSun
                size="25"
                onClick={switchTheme}
                className="text-[#5b7a8a] hover:cursor-pointer dark:text-[#3d7f91]"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

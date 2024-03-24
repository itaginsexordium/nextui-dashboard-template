import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../icons/theme/SunIcon";
import { MoonIcon } from "../icons/theme/MoonIcon";

export const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  return (
    <Switch
      color="secondary"
      isSelected={resolvedTheme === "dark" ? true : false}
      onValueChange={(e) => setTheme(e ? "dark" : "light")}
      thumbIcon={({ isSelected, className }) =>
      isSelected ? (
        <SunIcon className={className} />
      ) : (
        <MoonIcon className={className} />
      )
    }
    >{resolvedTheme === "dark" ? "тёмная" : "светлая"} тема</Switch>
  );
};

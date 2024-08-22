import { lng } from "@/i18n/i18next";
import { useEffect, useState } from "react";

interface CommonAPIProps {
  "first-name": string;
  "last-name": string;
  position: string;
  age: string;
  number: string;
  club: string;
  "club-name": string;
  "team-name": string;
  "image-url": string;
  url: string;
  "website-url": string;
  nicknames: string;
  "logo-url": string;
  "players-of": string;
  teams: string;
}

export interface TeamAPIProps {
  tid: number;
  name: string;
  websiteUrl: string;
  nicknames: Array<string>;
  logoUrl: string;
}

export interface PlayerAPIProps {
  pid: string;
  tid: number;
  firstName: string;
  lastName: string;
  age: number;
  club: Record<"name" | "imageUrl", string>;
  position: string;
  number: number;
  url: string;
}

interface APIProps {
  common: CommonAPIProps;
  teams: Array<TeamAPIProps>;
  players: Array<PlayerAPIProps>;
}

export const usePlayersGet = () => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>("");
  const [data, setData] = useState<APIProps>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(
        `https://raw.githubusercontent.com/mazenchami/FIFA-Arab-Cup-2021-Rosters/main/full${
          lng === "ar" ? ".ar" : ""
        }.json`
      );
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return { status, statusText, data, error, loading };
};

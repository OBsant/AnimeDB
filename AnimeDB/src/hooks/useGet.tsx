import { useState, useEffect } from "react";
import { TopProps, AnimeProps } from "../types/animes";

const url: string = "https://api.jikan.moe/v4/";

const useGet = (page: string, id?: string, anime?: string, filter?: string) => {
  const [topData, setData] = useState<TopProps[]>([]);
  const [infoAnime, setInfoAnime] = useState<AnimeProps>();
  const [dataAllAnime, setDataAllAnime] = useState<TopProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTopAnime() {
      setLoading(true);
      const res = await fetch(url + "top/anime");

      const data = await res.json();

      setData(data.data);
      setLoading(false);
    }

    async function fetchInfoAnime() {
      setLoading(true);
      const res = await fetch(url + `anime/${id}`);

      const data = await res.json();

      setInfoAnime(data.data);
      setLoading(false);
    }

    async function fetchAll() {
      setLoading(true);

      const resAnime = await fetch(url + `anime?q=${anime}`);

      const dataAnime = await resAnime.json();

      setDataAllAnime(dataAnime.data);
      setLoading(false);
    }

    if (page === "animes") {
      fetchTopAnime();
    } else if (page === "anime") {
      fetchInfoAnime();
    } else {
      fetchAll();
    }
  }, [page, id, anime, filter]);

  return { topData, infoAnime, dataAllAnime, loading };
};

export default useGet;

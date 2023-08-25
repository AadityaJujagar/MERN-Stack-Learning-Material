import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchData(tag) {
    setLoader(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    console.log(imgSrc);
    setGif(imgSrc);
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loader, fetchData };
};

export default useGif;

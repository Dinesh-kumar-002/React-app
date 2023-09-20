import React, { useEffect, useState } from "react";

const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=mass";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e2d3c396amshabf4d095da08cb2p135f0fjsne8fbf65796be",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

function FetchApi() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setSongs(data.data));
  }, []);

  return (
    <>
        <div className="h3">{data.title}</div>
      
    </>
  );
}

export default FetchApi;

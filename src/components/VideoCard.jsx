import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export default function VideoCard({ video, youtube }) {
  const { id } = video;
  const {
    isLoading,
    error,
    data: videod,
  } = useQuery(["videod", id], async () => youtube.videoDetail(id), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <>
      {console.log(video)}
      {isLoading && <p>Loading...</p>}
      {error && <p>Loading...</p>}
    </>
  );
}

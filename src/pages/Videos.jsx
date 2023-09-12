import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>Loading..</p>}
      {error && <p>error!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} youtube={youtube} />
          ))}
        </ul>
      )}
    </>
  );
}

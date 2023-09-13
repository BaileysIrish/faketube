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
        <ul className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cold-3 lg:grid-cols-4 gap-2 gap-y-4 p-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} youtube={youtube} />
          ))}
        </ul>
      )}
    </>
  );
}

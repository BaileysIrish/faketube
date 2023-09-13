import React from "react";
import { useQuery } from "@tanstack/react-query";
import { formatAgo } from "../util/date";
import { formatNumber } from "../util/formatNumber";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, youtube }) {
  const navigate = useNavigate();
  const { id } = video;
  const {
    isLoading,
    error,
    data: videod,
  } = useQuery(["videod", id], async () => youtube.videoDetail(id), {
    staleTime: 1000 * 60 * 1,
  });
  const { data: videochannel } = useQuery(
    ["videoc", id],
    async () => youtube.videoChannel(videod[0].snippet.channelId),
    {
      enabled: !!videod,
    }
  );
  const handleSubmit = () => {
    navigate(`/videos/watch/${id}`, { state: { videod, videochannel } });
  };

  return (
    <li className="cursor-pointer" onClick={handleSubmit}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Loading...</p>}
      {videod && (
        <section className="gap-2">
          <img
            className="w-full mb-2 rounded-xl hover:rounded-none transition-all duration-300"
            src={videod[0].snippet.thumbnails.medium.url}
            alt={videod[0].snippet.title}
          />
          <div className="flex">
            {videochannel && (
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={videochannel[0].snippet.thumbnails.default.url}
                alt={videochannel[0].snippet.title}
              />
            )}
            <div>
              <h2 className="line-clamp-2">{videod[0].snippet.title}</h2>
              <p className="text-sm text-gray-600">
                {videod[0].snippet.channelTitle}
              </p>
              <p className="text-sm text-gray-600">
                조회수 {formatNumber(videod[0].statistics.viewCount)} •
                <span>{formatAgo(videod[0].snippet.publishedAt, "ko")}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </li>
  );
}

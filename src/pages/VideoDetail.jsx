import React from "react";
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const {
    state: { videod, videochannel },
  } = useLocation();
  const { id } = videod[0];
  const { publishedAt, channelId, title, description } = videod[0].snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="w-7/10 mx-4">
        <iframe
          className="rounded-xl"
          id="player"
          width="1040"
          height="580"
          type="text/html"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
        />
        <h2 className="my-4 font-semibold text-2xl">{title}</h2>
      </article>

      <section className="w-3/10">
        <p>hi</p>
      </section>
    </section>
  );
}

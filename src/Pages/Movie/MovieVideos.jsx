import React, { useEffect } from "react";
import style from "./MovieVideos.module.css";

export const MovieVideos = ({ videos }) => {
  if (videos.results) {
    return (
      <section className={style["movie-videos"]}>
        {videos.results.map((result) => (
          <div key={result.id} className="video-item">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${result.key}`}
              title={result.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>
    );
  } else {
    return;
  }
};

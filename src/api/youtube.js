import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.searchByVideo(keyword) : this.mostPopular();
  }

  async searchByVideo(keyword) {
    return this.httpClient
      .get(`search`, {
        params: {
          part: "snippet",
          maxResults: 10,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async mostPopular() {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet",
          maxResults: 10,
          chart: "mostPopular",
          regionCode: "KR",
        },
      })
      .then((res) => res.data.items);
  }

  goToChannel(channelId) {
    return (window.location.href = `https://www.youtube.com/${channelId}`);
  }

  async videoDetail(id) {
    return this.httpClient
      .get(`videos`, {
        params: {
          part: "snippet,statistics",
          regionCode: "KR",
          id,
        },
      })
      .then((res) => res.data.items);
  }

  async videoChannel(id) {
    return this.httpClient
      .get(`channels`, {
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items);
  }
}

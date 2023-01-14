export type TopProps = {
  mal_id: number;
  title: string;
  score: number;
  type: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export type AnimeProps = {
  mal_id: number;
  title: string;
  score: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
  trailer: {
    embed_url: string;
  };
  synopsis: string;
  duration: string;
  year: number;
  episodes: number;
};

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface ArtworkResponse {
  id: string;
  image_id: string;
  alt_image_ids: string[];
  title: string;
  description: string;
  thumbnail: Thumbnail;
  artist_display: string;
  place_of_origin: string;
  short_description: string;
  category_titles: string[];
}

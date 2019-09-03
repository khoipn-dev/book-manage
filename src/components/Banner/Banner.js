import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Banner({ images }) {
  const arrImage = [];
  images.forEach((item, index) => {
    arrImage.push({
      original: item,
      thumbnail: item
    });
  });
  return (
    <ImageGallery
      items={arrImage}
      onImageLoad={() => {
        console.log("loaded")
      }}
      showPlayButton={false}
      showFullscreenButton={false}
      thumbnailPosition="left"
      slideOnThumbnailHover={true}
      showNav={false}
    />
  );
}

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function PreviewImage({images}) {

  const arrImage = [];

    Object.entries(images).forEach(([key, val]) => {
      var reader = new FileReader();
      reader.readAsDataURL(val);
      reader.onloadend = function (e) {
        arrImage.push({
          original: reader.result,
          thumbnail: reader.result,
        });
      }
    });
  return (
    <ImageGallery items={arrImage} showPlayButton={false} showFullscreenButton={false} />
  );
}
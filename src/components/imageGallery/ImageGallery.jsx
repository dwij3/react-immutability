// libs
import { useState, useCallback } from 'react';

// components
import { Header } from './components/header';
import { Image } from './components/image';

export const ImageGallery = ({ images: baseImages }) => {
  const [images, setImages] = useState(baseImages);

  const handleImageClick = useCallback(
    (id) => {
      const index = images.findIndex((image) => id === image.id);
      images[index].count += 1;
      setImages(images);
    },
    [images]
  );

  const handleSort = useCallback(() => {
    setImages(images.sort((a, b) => b.count - a.count));
  }, [images]);

  const handleReverse = useCallback(() => {
    setImages(images.reverse());
  }, [images]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Header
        title="Image Gallery"
        onReverse={handleReverse}
        onSort={handleSort}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        {images.map((image) => (
          <Image
            key={image.count}
            image={image}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
    </div>
  );
};

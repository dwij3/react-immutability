// libs
import { useCallback } from 'react';

const SIZE = 150;

export const Image = ({ image, onImageClick }) => {
  const { id, url, name } = image;
  const handleClick = useCallback(() => {
    onImageClick(id);
  }, [id, onImageClick]);

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '8px',
        minWidth: '300px',
      }}
    >
      <img
        style={{
          cursor: 'pointer',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        }}
        src={url}
        alt={name}
        onClick={handleClick}
        height={SIZE}
        width={SIZE}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '0 8px',
        }}
      >
        <span>
          <b>Name:</b> {name}
        </span>
        <span>
          <b>Click Count:</b> {image.count ?? 0}
        </span>
      </div>
    </div>
  );
};

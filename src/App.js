// libs
import React from 'react';

// styles
import './styles.css';

// components
import { ImageGallery } from './components/imageGallery';

// data
import { IMAGES } from './data';

export default function App() {
  return (
    <div className="App">
      <ImageGallery initialImages={IMAGES} />
    </div>
  );
}

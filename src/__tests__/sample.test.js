// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// components
import { ImageGallery } from '../components/imageGallery';

// data
import { IMAGES } from '../data';

describe('ImageGallery Component', () => {
  test('increments click count when an image is clicked', async () => {
    const { getByAltText, rerender } = render(<ImageGallery images={IMAGES} />);

    await userEvent.click(getByAltText('Cat'));

    rerender(<ImageGallery images={IMAGES} />);

    expect(getByAltText('Cat').closest('div')).toHaveTextContent('1');
    expect(getByAltText('Bird').closest('div')).toHaveTextContent('0');
  });

  test('reverses the order of images when reverse button is clicked', async () => {
    const { getByTestId, rerender } = render(<ImageGallery images={IMAGES} />);

    await userEvent.click(getByTestId('reverse'));

    rerender(<ImageGallery images={IMAGES} />);

    const images = document.querySelectorAll('img');
    expect(images[0].alt).toBe('Sea');
    expect(images[1].alt).toBe('Tree');
    expect(images[2].alt).toBe('Frog');
    expect(images[3].alt).toBe('Bird');
    expect(images[4].alt).toBe('Cat');
  });
});

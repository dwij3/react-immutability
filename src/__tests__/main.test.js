import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// components
import { ImageGallery } from '../components/imageGallery';

// data
import { IMAGES } from '../data';

describe('ImageGallery Component', () => {
  test('test 1', async () => {
    const { getByAltText, getByTestId, rerender } = render(
      <ImageGallery images={IMAGES} />
    );

    await userEvent.click(getByAltText('Sea'));
    await userEvent.click(getByAltText('Sea'));

    await userEvent.click(getByAltText('Tree'));

    await userEvent.click(getByTestId('sort'));

    rerender(<ImageGallery images={IMAGES} />);

    const images = document.querySelectorAll('img');
    expect(images[0].alt).toBe('Sea');
    expect(images[1].alt).toBe('Tree');
    expect(images[2].alt).toBe('Cat');
    expect(images[3].alt).toBe('Bird');
    expect(images[4].alt).toBe('Frog');
  });

  test('test 2', async () => {
    const { getByAltText, getByTestId, rerender } = render(
      <ImageGallery images={IMAGES} />
    );

    await userEvent.click(getByAltText('Cat'));
    await userEvent.click(getByAltText('Cat'));

    await userEvent.click(getByAltText('Bird'));
    await userEvent.click(getByAltText('Bird'));
    await userEvent.click(getByAltText('Bird'));

    await userEvent.click(getByAltText('Frog'));

    await userEvent.click(getByAltText('Tree'));
    await userEvent.click(getByAltText('Tree'));
    await userEvent.click(getByAltText('Tree'));
    await userEvent.click(getByAltText('Tree'));

    await userEvent.click(getByAltText('Sea'));
    await userEvent.click(getByAltText('Sea'));
    await userEvent.click(getByAltText('Sea'));
    await userEvent.click(getByAltText('Sea'));
    await userEvent.click(getByAltText('Sea'));

    await userEvent.click(getByTestId('sort'));

    await userEvent.click(getByTestId('reverse'));

    rerender(<ImageGallery images={IMAGES} />);

    const images = document.querySelectorAll('img');
    expect(images[0].alt).toBe('Frog');
    expect(images[1].alt).toBe('Cat');
    expect(images[2].alt).toBe('Bird');
    expect(images[3].alt).toBe('Tree');
    expect(images[4].alt).toBe('Sea');
  });

  test('test 3', async () => {
    const { getByAltText, rerender } = render(<ImageGallery images={IMAGES} />);

    await userEvent.click(getByAltText('Tree'));

    rerender(<ImageGallery images={IMAGES} />);
    const images = document.querySelectorAll('img');

    expect(images.length).toBe(5);
  });
});

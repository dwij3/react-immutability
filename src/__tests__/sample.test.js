import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// components
import { ImageGallery } from '../components/imageGallery';

// data
import { IMAGES } from '../data';

describe('ImageGallery Component', () => {
  test('reverse sorting', async () => {
    const { getByAltText, getByTestId, rerender } = render(
      <ImageGallery initialImages={IMAGES} />
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

    rerender(<ImageGallery initialImages={IMAGES} />);

    const images = document.querySelectorAll('img');
    expect(images[0].alt).toBe('Frog');
    expect(images[1].alt).toBe('Cat');
    expect(images[2].alt).toBe('Bird');
    expect(images[3].alt).toBe('Tree');
    expect(images[4].alt).toBe('Sea');
  });
});

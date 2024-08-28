> ## Question Statement:

You are given an **Image Gallery** that showcases a series of cards, each displaying an image. Each image can be clicked and is paired with its title and click count. When an image is clicked, its click count will increment by one. Furthermore, the Image Gallery provides two additional features: users can reverse the list and arrange it in descending order.

The current functionality is not operational due to issues within the code. It is necessary to address the following three functionalities:

1. **Increment Click Count:** The image click count should increment by one upon each click.
2. **Reverse List:** Clicking the Reverse CTA should result in the list being reversed.
3. **Sort by Click Count:** Selecting the sort option should arrange the image list in descending order, prioritizing images with a higher count to be displayed first.

### Example:

#### 1. Increment Click Count

```javascript
const initialImages = [
  { id: '1', url: 'image_url_1', count: 0, name: 'Image_1' },
  { id: '2', url: 'image_url_2', count: 0, name: 'Image_2' },
  { id: '3', url: 'image_url_3', count: 0, name: 'Image_3' }
];

// On Image_1 click, the count of Image_1 should increase by 1

const updatedImages = [
  { id: '1', url: 'image_url_1', count: 1, name: 'Image_1' },
  { id: '2', url: 'image_url_2', count: 0, name: 'Image_2' },
  { id: '3', url: 'image_url_3', count: 0, name: 'Image_3' }
];

```

#### 2. Reverse List 

```javascript
const initialImages = [
  { id: '1', url: 'image_url_1', count: 0, name: 'Image_1' },
  { id: '2', url: 'image_url_2', count: 0, name: 'Image_2' },
  { id: '3', url: 'image_url_3', count: 0, name: 'Image_3' }
];

// On reverse

const updatedImages = [
  { id: '3', url: 'image_url_3', count: 0, name: 'Image_3' },
  { id: '2', url: 'image_url_2', count: 0, name: 'Image_2' },
  { id: '1', url: 'image_url_1', count: 0, name: 'Image_1' }
];
```

#### 3. Sort List

```javascript
const initialImages = [
  { id: '1', url: 'image_url_1', count: 3, name: 'Image_1' },
  { id: '2', url: 'image_url_2', count: 6, name: 'Image_2' },
  { id: '3', url: 'image_url_3', count: 2, name: 'Image_3' }
];

// On sort

const sortedImages = [
  { id: '2', url: 'image_url_2', count: 6, name: 'Image_2' },
  { id: '1', url: 'image_url_1', count: 3, name: 'Image_1' },
  { id: '3', url: 'image_url_3', count: 2, name: 'Image_3' }
];


```

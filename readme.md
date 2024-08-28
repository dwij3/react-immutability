## Question Statement:

You are given an Image Gallery that showcases a series of cards, each displaying an image. Each image can be clicked and is paired with its title and click count. When an image is clicked, its click count will increment by one. Furthermore, the Image Gallery provides two additional features: users can reverse the list and arrange it in descending order.

The current functionality is not operational due to issues within the code. It is necessary to address the following three functionalities: First, the image click count should increment by one upon each click. Second, clicking the Reverse CTA should result in the list being reversed. Lastly, selecting the sort option should arrange the image list in descending order, prioritizing images with a higher count to be displayed first.

Example: 

1. 

const initialImages = [
  { id: ‘1’ , url: ‘image_url_1’ , count: 0, name: ‘Image_1’’ },
  {id: ‘2’ , url: ‘image_url_2’ , count: 0, name: ‘Image_2’’ },
  {id: ‘3’ , url: ‘image_url_3’ , count: 0, name: ‘Image_3’’ }
]


on  Image_1 click count of Image_1 will should increase by 1

updatedImages = [
  { id: ‘1’ , url: ‘image_url_1’ , count: 1, name: ‘Image_1’’ },
  {id: ‘2’ , url: ‘image_url_2’ , count: 0, name: ‘Image_2’’ },
  {id: ‘3’ , url: ‘image_url_3’ , count: 0, name: ‘Image_3’’ }
]

2.

const initialImages = [
  { id: ‘1’ , url: ‘image_url_1’ , count: 0, name: ‘Image_1’’ },
  {id: ‘2’ , url: ‘image_url_2’ , count: 0, name: ‘Image_2’’ },
  {id: ‘3’ , url: ‘image_url_3’ , count: 0, name: ‘Image_3’’ }
]

on reverse

updatedImages = [
  {id: ‘3’ , url: ‘image_url_3’ , count: 0, name: ‘Image_3’’ },
  {id: ‘2’ , url: ‘image_url_2’ , count: 0, name: ‘Image_2’’ },
  { id: ‘1’ , url: ‘image_url_1’ , count: 0, name: ‘Image_1’’ },
]

3.

const initialImages = [
  { id: ‘1’ , url: ‘image_url_1’ , count: 3, name: ‘Image_1’’ },
  {id: ‘2’ , url: ‘image_url_2’ , count: 6, name: ‘Image_2’’ },
  {id: ‘3’ , url: ‘image_url_3’ , count: 2, name: ‘Image_3’’ }
]

on sort 

const initialImages = [
  {id: ‘2’ , url: ‘image_url_2’ , count: 6, name: ‘Image_2’’ },
  { id: ‘1’ , url: ‘image_url_1’ , count: 3, name: ‘Image_1’’ },
  {id: ‘3’ , url: ‘image_url_3’ , count: 2, name: ‘Image_3’’ }
]




## Submission Instructions
1. Clicking "Run code" will compile and run your code against sample tests, but it will not generate scores. Click on "Execution Log" to better understand the test execution.
2. Clicking "Submit code" will run your code against multiple test cases, assessing different scenarios holistically. The score will be assigned accordingly.

To access the instructions, click on the "Question" button which can be found in the bottom left corner of the screen.

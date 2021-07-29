# Nasa-photo-gallery
This photo gallery displays images from a NASA API. It pulls and loads 10 iamges with descriptions at a time. I used the fetch method to retrieve the images along with the descriptions from the NASA API. 

Created the image card using JS instead of HTML. Created a function to load elements. Did this to be more secure and keep others from passing in executable JS. Used an array and looped through each element creating a const and adding CSS as needed. Appeneded all elements into the images container.

Added a favorites page, you are able to save any image to that page. When you click add to favorites a message appears in the bottom right. All images are saved to local storage. Json will then parse the data from local storage back into the favorites page.

while on favorites page you are also able to remove images from your favorites using the remove function.

Features:
-parse data from local storage into favorites page
-used external API using fetch method
-clickable events to save, remove and load more pics
-used array to store images and display
-used multiple functions to create HTMl elements, fetch API, save and remove images

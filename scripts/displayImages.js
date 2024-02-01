function galleryPhotos() {
    var photos = []; //Declare an empty array to store image element
    var fileNames = []; //Declare an empty element to store image file names
    var imageList = []; //Declare an empty array to store html list that contain an image
    var image; //Declare an empty variable to store the assembled image list codes
    var openList = "<li id='photo'>"; //Declare a variable to contain open list tag
    var closeList = "</li>"; //Declare a variable to contain close list tag

    var openCaptionTag = "<p class='caption'>"; //Declare a variable to contain open caption p tag
    var closeCaptionTag = "</p>"; //Declare a variable to contain close caption p tag

    var openDescTag = "<p class='description'>"; //Declare a variable to contain open p tag
    var closeDescTag = "</p>"; //Declare a variable to contain close p tag

    var captionTexts = ["Puppies", "A Happy Dog", "An owner showing off her pet", 
                        "Portraits of a Dog", "A Tabby Cat", "A Group of Kitties",
                        "An Adoption Poster", "Dogs Playing Fetch", "A Family Looking to Adopt",
                        "A Man and His Bestfriend"];
    var descTexts = ["A group of puppies together", "A dog smiling at the camera", "A dog surrounded by its owner and their friends", 
                        "A dog posing in front of the camera", "A portrait of a tabby cat", "A group of kitties on the grass",
                        "An adoption poster with a cat and dog", "Three dogs running and playing fetch", "A mother and child looking at a dog in a cage",
                        "A man and a dog sitting together on the grass in a park"];

    //Create a loop to create 10 images starting with index of 0
    for (var i=0; i<10; i++) {
        fileNames.push("pets"+(i+1)); //Create image file name and store in the array
        photos.push("<img src='images/galleryPhotos/" +fileNames[i]+".jpeg'>"); //Assemble file name into image element and store in an array
        caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
        description = openDescTag + descTexts[i] + closeDescTag;
        image = openList + photos[i] + caption + description + closeList; //Assemble image element from array with list elements and store in a variable
        
        imageList.push(image); //Store(push) the assembled list codes into an array
        // imageList.push(caption);
        // imageList.push(description);
    }

    //Display all six image codes store in the array
    document.getElementById("album").innerHTML = imageList.join("");

}

galleryPhotos();
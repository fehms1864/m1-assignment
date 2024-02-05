function galleryPhotos() {
    var photos = []; //Declare an empty array to store image element
    var fileNames = []; //Declare an empty element to store image file names
    var imageList = []; //Declare an empty array to store html list that contain an image
    var image; //Declare an empty variable to store the assembled image list codes
    var openList = "<li id='photo'>"; //Declare a variable to contain open list tag
    var closeList = "</li>"; //Declare a variable to contain close list tag

    var openCaptionTag = "<p class='caption'>"; //Declare a variable to contain open caption p tag
    var closeCaptionTag = "</p>"; //Declare a variable to contain close caption p tag

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
        var openDescTag = "<p class='description' onclick='infoboxShow(" + i + ")'>"; //Declare a variable to contain open p tag
        fileNames.push("pets"+(i+1)); //Create image file name and store in the array
        photos.push("<img src='images/galleryPhotos/" +fileNames[i]+".jpeg'>"); //Assemble file name into image element and store in an array
        caption = openCaptionTag + captionTexts[i] + closeCaptionTag;
        description = openDescTag + descTexts[i] + closeDescTag;
        image = openList + photos[i] + caption + description + closeList; //Assemble image element from array with list elements and store in a variable
        
        imageList.push(image); //Store(push) the assembled list codes into an array
    }

    //Display all six image codes store in the array
    document.getElementById("album").innerHTML = imageList.join("");

}

function infoBox() {
    var infoboxList = []; //Declare an empty array to store html list that contain an image
    var infobox; //Declare an empty variable to store the assembled image list codes
    
    var openDivTag = "<div id='infobox'>"; //Declare a variable to contain open div tag
    var closeDivTag = "</div>"; //Declare a variable to contain close div tag

    var openHeadingTag = "<h1 class='infoboxheading'>"; //Declare a variable to contain open h1 tag
    var closeHeadingTag = "</h1>"; //Declare a variable to contain close h1 tag

    var openTextTag = "<p class='infoboxtext'>"; //Declare a variable to contain open caption p tag
    var closeTextTag = "</p>"; //Declare a variable to contain close caption p tag

    var headingTexts = ["Puppies", "A Happy Dog", "An owner showing off her pet", 
                        "Portraits of a Dog", "A Tabby Cat", "A Group of Kitties",
                        "An Adoption Poster", "Dogs Playing Fetch", "A Family Looking to Adopt",
                        "A Man and His Bestfriend"];
    var infoTexts = ["A group of puppies together in a container. They are eager to play with humans and get a new home! They were born in California.", 
                        "A dog smiling at the camera! The employees usually take out the dogs to the park for a whole day once a week to make sure they are healthy and active. They always enjoy the time in the park.", 
                        "A dog surrounded by its owner and their friends. We have a fundraiser event a couple of weeks ago where Bingo was very popular among the crowd getting loads of attention and having a fun time!", 
                        "A dog posing in front of the camera. We had a group of Interns over the summer who were more than happy to keep the animals company while conducting their photography project as well. Brandy clearly loved getting her pictures taken.", 
                        "A portrait of a tabby cat. The newest addition to the PetSmart family! Pearly is looking for a new home a place where she can be comfortable and keep company.", 
                        "A group of kitties on the grass. Our Interns got creative and a little bold! They took the kittens outside and let them roam about and play in the sunlight for a bit.",
                        "An adoption poster with a cat and dog. Come to PetSmart today and spend the day with different personality animals. Who knows you might have just found a new member of your family!", 
                        "Three dogs running and playing fetch. We at PetSmart take great pride in making sure our animals are treated right with the right nutrition and ample amount of play time so that they are always happy and excited for the next day", 
                        "A mother and child looking at a dog in a cage. We have had much success over the past couple of weeks with many families bring their children to play with the animals and going home with a pet or two!",
                        "A man and a dog sitting together on the grass in a park. You know what they say A Dog is a Man's Best Friend"];

    //Create a loop to create 10 info boxes starting with index of 0
    for (var i=0; i<10; i++) {
        var linkToCloseInfoBoxTag = "<a class='infoboxtextlink' onclick='infoBoxHide(" + i + ")'>Click This To Close</a>";
        heading = openHeadingTag + headingTexts[i] + closeHeadingTag;
        textinfo = openTextTag + infoTexts[i] + closeTextTag;
        infobox = openDivTag + heading + textinfo + linkToCloseInfoBoxTag + closeDivTag;
        
        infoboxList.push(infobox); //Store(push) the assembled info box code into an array
    }

    //store all ten info box codes in the array
    document.getElementById("infoboxes").innerHTML = infoboxList.join("");
}

//Show the info box for the image the user clicked on
function infoboxShow(index) {
    var infobox = document.getElementById("infoboxes").childNodes.item(index);
    infobox.style.visibility = "visible";
}

//Hide the info box for the image the user had clicked on
function infoBoxHide(index) {
    var infobox = document.getElementById("infoboxes").childNodes.item(index);
    infobox.style.visibility = "hidden";
}

galleryPhotos();
infoBox();
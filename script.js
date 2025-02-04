function upDate(previewPic) {
    // Log to check if the function is triggered
    console.log("upDate function triggered");

    // Log the alt and src attributes of the previewPic
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change the text of the element with id of image
    document.getElementById("image").innerText = previewPic.alt;

    // Change the background image of the element with id of image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the background image to the original value
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset the text of the div with id of image
    document.getElementById("image").innerText = "Hover over an image below to display here.";
}
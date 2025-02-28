/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
     
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
  
    let x = document.querySelector("#image");
    x.style.backgroundImage = "url('" + previewPic.getAttribute("src") + "')";
    x.innerHTML = previewPic.getAttribute("alt");
  }
  
  function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
  
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */
  
    let x = document.querySelector("#image");
    x.style.backgroundImage = "url('')";
    x.innerHTML = "Hover over an image below to display here."
  }
  
  function handleFocus(previewPic) {
    console.log("Focus event is triggerd.");
    upDate(previewPic);
  }
  
  function handleBlur() {
    console.log("Blur event is triggerd.");
    unDo();
  }
  
  window.addEventListener("load", function() {
    console.log("Page has loaded.");
    /* Adding tabindex attribute using for loop*/
    let x = document.querySelectorAll(".preview")
    for (let i = 0; i < x.length; i++) {
      console.log("Image " + i);
      x[i].setAttribute("tabindex", "0");
    }
  })
  
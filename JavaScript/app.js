// Start Gallery
// Function to open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
// Function to close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);
// Function to scroll through images - Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// Function that contains if condition and a for-loop wich it will decide which slide to show and which dot is active.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
// End Gallery

// Start Courses Modal
const courses = [
  {
    name: "BALLET Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgone.jpg",
  },
  {
    name: "SALSA Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgtwo.jpg",
  },
  {
    name: "HIP HOP Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgthree.jpg",
  },
  {
    name: "STREET Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgfour.jpg",
  },
  {
    name: "SAMBA  Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgfive.jpg",
  },
];

// Function that close courses modal when the user click on the close icon (X)
const closeCoursesModal = () => {
  document.getElementById("courses-modal-wrapper").style.display = "none";
};

/* 
Function that contains a for-loop which iterates through the courses array and targets each courses card.
This function will open the courses modal when the user click on any (More Info) btn of the courses cards,
where each click on (More Info) any btn will take the user to a special course model linked with each card.
*/
const openCoursesModal = () => {
  const cards = document.getElementsByClassName("courses-card-button");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("courses-modal-wrapper").style.display = "flex";
      for (let j = 0; j < courses.length; j++) {
        if (i === j) {
          document.getElementById(
            "courses-modal-content"
          ).innerHTML = `<h2>${courses[j].name}</h2> <p>${courses[j].content}</p> <img src="./img/${courses[j].picture}">`;
        }
      }
    });
  }
};
window.addEventListener("load", openCoursesModal);
// End Courses Modal

// Start Courses Confirmation
/*
This function is to handle the data to be submitted, when the user click on submit btn,
the function will test all input data and also it will test for any errors that may occur. 
Then after that it will show the courses confirmation message will which contains a loader. 
This loader will be visible only for 2 seconds before it's replaced by a text and a close button.
*/
function sendFormInfo() {
  try {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const courses = document.getElementById("coursess").value;
    console.log(`Email: ${email},Name: ${name},Courses: ${courses}`);
    document.getElementById("courses-confirmation").style.display = "flex";
    setTimeout(() => {
      document.getElementById("courses-confirmation").innerHTML =
        '<h2>Thanks For Subscribing!<br>Check your inbox, we have sent you an email.</h2><button onclick="closeCoursesConfirmation()">Close</button>';
    }, 2000);
  } catch (error) {
    document.getElementById("courses-confirmation").innerHTML =
      '<h2>An error occured</h2><button onclick="closeCoursesConfirmation()">Close</button>';
  }
}

/* 
After getting the final result from courses confirmation modal by clicking on the Subscribe btn. 
This function will close courses confirmation and courses modal when the user click on the close btn 
that appears after 2 seconds in the courses confirmation message. Then it will clear all input fields 
that the user fills in (email, name, courses). 
*/
const closeCoursesConfirmation = () => {
  document.getElementById("courses-confirmation").style.display = "none";
  document.getElementById("courses-modal-wrapper").style.display = "none";
  document.getElementById("courses-confirmation").innerHTML =
    '<span class="loader"></span>';
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("coursess").value = "";
};
// End Courses Confirmation

// Start Contact Modal
const contact = [
  {
    name: "Teacher Name",
    course: "HIP HOP & STREET Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgthree.jpg",
  },
  {
    name: "Teacher Name",
    course: "SALSA Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgtwo.jpg",
  },
  {
    name: "Teacher Name",
    course: "SAMBA  Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgfive.jpg",
  },
  {
    name: "Teacher Name",
    course: "BALLET Dancing Courses",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam facere error sit tempore ipsam, labore illum nisi minima quia facilis provident officiis ab architecto dolorem cumque.",
    picture: "imgone.jpg",
  },
];

// Function that close contact modal when you click on the close icon (X)
const closeContactModal = () => {
  document.getElementById("contact-modal-wrapper").style.display = "none";
};

/*
Function that contains a for-loop which iterates through the contact array and targets each contact card.
This function will open the contact modal when the user click on any (Read More) btn of the contact cards,
where each click on any (Read More) btn will take the user to a special contact model linked with each card.
*/
const openContactModal = () => {
  const cards = document.getElementsByClassName("read-more-button");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("contact-modal-wrapper").style.display = "flex";
      for (let j = 0; j < contact.length; j++) {
        if (i === j) {
          document.getElementById(
            "contact-modal-content"
          ).innerHTML = `<h2>${contact[j].name}</h2> <h3>${contact[j].course}</h3> <p>${contact[j].content}</p> <img src="./img/${contact[j].picture}">`;
        }
      }
    });
  }
};
window.addEventListener("load", openContactModal);
// End Contact Modal

// Start Slider
const images = [
  {
    name: "imagesliderone.jpg",
  },
  {
    name: "imageslidertwo.jpg",
  },
  {
    name: "imagesliderthree.jpg",
  },
  {
    name: "imagesliderfour.jpg",
  },
  {
    name: "imagesliderfive.jpg",
  },
  {
    name: "imageslidersix.jpg",
  },
  {
    name: "imagesliderseven.jpg",
  },
  {
    name: "imageslidereighth.jpg",
  },
  {
    name: "imageslidernine.jpg",
  },
  {
    name: "imagesliderten.jpg",
  },
  {
    name: "imageslidereleven.jpg",
  },
  {
    name: "imageslidertwelve.jpg",
  },
  {
    name: "imagesliderthirteen.jpg",
  },
  {
    name: "imagesliderfourteen.jpg",
  },
  {
    name: "imagesliderfifteen.jpg",
  },
  {
    name: "imageslidersixteen.jpg",
  },
  {
    name: "imagesliderseventeen.jpg",
  },
  {
    name: "imageslidereighteen.jpg",
  },
  {
    name: "imageslidernineteen.jpg",
  },
  {
    name: "imageslidertwenty.jpg",
  },
  {
    name: "imageslidertwentyone.jpg",
  },
  {
    name: "imageslidertwentytwo.jpg",
  },
  {
    name: "imageslidertwentytree.jpg",
  },
  {
    name: "imageslidertwentyfour.jpg",
  },
  {
    name: "imageslidertwentyfive.jpg",
  },
  {
    name: "imageslidertwentysix.jpg",
  },
  {
    name: "imageslidertwentyseven.jpg",
  },
  {
    name: "imageslidertwentyeight.jpg",
  },
];

const setMainImage = (src) => {
  document.getElementById("main-image").setAttribute("src", src);
  setActiveThumbNail();
};

/* 
Function that show the active thumbnail, by comparing the thumbnails src 
attribute to the main image's src attribute and if it's the same sets a pink
border on the thumbnail.
*/
const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
      thumbs[i].style.border = "3px solid #fa1693";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

/*
Function that contains a for-loop which iterates through the images array and targets each image.
This function will change the main image to the previous image in the thumbs. 
if the thumbnail and the main image are the same and the index is not equal to 0, 
the previous image in the thumbnail will be set as a main image. 
Else if the thumbnail and the main image are the same and  the index is equal to 0, 
the slider will jump to the last image in the slider. In this function the slider 
will scroll to the left side.
*/
const prevImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbNail();
    } else if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i === 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += thumbs.length - 1)].src);
      setActiveThumbNail();
    }
  }
};

/*
Function that contains a for-loop which iterates through the images array and targets each image.
This function will change the main image to the next image in the thumbs. 
if the thumbnail and the main image are the same and the index is not equal to
(thumbs.length - 1), the next image in the thumbnail will be set as a main image. 
Else if the thumbnail and the main image are the same and the index is equal to 
(thumbs.length - 1), the slider will jump to the next image in the slider. 
In this function the slider will scroll to the right side.
*/
const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbNail();
    } else if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i === thumbs.length - 1
    ) {
      document.getElementById("main-image").setAttribute("src", thumbs[0].src);
      setActiveThumbNail();
    }
  }
};

/*
Function that show the image on the screen.This function will target the main image and then will 
set the value of (src) attribute to a path plus file name from images array. Then will fill thumbnails 
wrapper with images array using the map method that iterates over the images array and then for each 
iteration create up a new array with elements passed over each iteration. Then convert the new array 
to a string by using of join method.
*/
window.addEventListener("load", () => {
  document
    .getElementById("main-image")
    .setAttribute("src", `./img/${images[0].name}`);
  document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./img/${img.name}" class ="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");
  setActiveThumbNail();
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);
});
// End Slider

// Start Lightbox Slider
/* 
Function that open the image lightbox modal when the user click on any image of the main images
in the main slider, where each click on any main image in the main slider will take the user to 
the same main image and open it in the image lightbox modal.
*/
const openLightBox = (src) => {
  document.getElementById("lb-thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./img/${img.name}" class ="lb-thumbnail" onclick="setMainLbImage(this.src)">`
    )
    .join("");
  document.getElementById("image-lightbox").style.display = "flex";
  setMainLbImage(src);
};

// Function that close image lightbox slider when the user click on the close icon (X)
const closeLightBox = () => {
  document.getElementById("image-lightbox").style.display = "none";
};

const setMainLbImage = (src) => {
  console.log(src);
  document.getElementById("lb-main-image").setAttribute("src", src);
  setActiveLbThumbNail();
};

/* 
Function that show the active thumbnail, by comparing the thumbnails src 
attribute to the main image's src attribute and if it's the same sets a pink
border on the thumbnail.
*/
const setActiveLbThumbNail = () => {
  const lbThumbs = document.getElementsByClassName("lb-thumbnail");
  for (let i = 0; i < lbThumbs.length; i++) {
    if (lbThumbs[i].src === document.getElementById("lb-main-image").src) {
      lbThumbs[i].style.border = "3px solid #fa1693";
    } else {
      lbThumbs[i].style.border = "0px";
    }
  }
};

/*
Function that will change the Lightbox main image to the previous image in the Lightbox thumbnail list. 
if the Lightbox thumbnail and the Lightbox main image are the same and the index is not equal to 0, 
the previous image in the Lightbox thumbnail will be set as a Lightbox main image. 
Else if the Lightbox thumbnail and the Lightbox main image are the same and  the index is equal to 0, 
the slider will jump to the last image in the Lightbox slider. In this function the Lightbox slider 
will scroll to the left side.
*/
const prevLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== 0
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i -= 1)].src);
      setActiveLbThumbNail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === 0
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += thumbsList.length - 1)].src);
      setActiveLbThumbNail();
    }
  }
};

/*
Function that will change the Lightbox main image to the next image in the Lightbox thumbnail list. 
if the Lightbox thumbnail and the Lightbox main image are the same and the index is not equal to
(thumbsList.length - 1), the next image in the Lightbox thumbnail will be set as a Lightbox main image. 
Else if the Lightbox thumbnail and the Lightbox main image are the same and the index is equal to
(thumbsList.length - 1), the slider will jump to the next image in the Lightbox slider. 
In this function the Lightbox slider will scroll to the right side.
*/
const nextLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += 1)].src);
      setActiveLbThumbNail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[0].src);
      setActiveLbThumbNail();
    }
  }
};
// End Lightbox Slider

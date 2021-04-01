// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector('.cover-image')
var randomCoverSource = covers[getRandomIndex(covers)]
randomCover.src = randomCoverSource

var randomTitle = document.querySelector('.cover-title')
var randomTitleSource = titles[getRandomIndex(titles)]
randomTitle.innerText = randomTitleSource

var randomDescriptor1 = document.querySelector(".tagline-1")
var randomDescriptor2 = document.querySelector(".tagline-2")
randomDescriptor1.innerText = descriptors[getRandomIndex(descriptors)]
randomDescriptor2.innerText = descriptors[getRandomIndex(descriptors)]

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Create variables targetting the relevant DOM elements here 👇
var randomCover = document.querySelector('.cover-image')
var randomTitle = document.querySelector('.cover-title')
var randomDescriptor1 = document.querySelector(".tagline-1")
var randomDescriptor2 = document.querySelector(".tagline-2")
var displayedCover = document.querySelector('.random-cover-button')

var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

console.log(currentCover)

// Add your event listeners here 👇
displayedCover.addEventListener('click', randomize)

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomize() {
  randomCover.src = currentCover.cover
  randomTitle.innerText = currentCover.title
  randomDescriptor1.innerText = currentCover.tagline1
  randomDescriptor2.innerText = currentCover.tagline2
}

randomize()

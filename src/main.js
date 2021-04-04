// Create variables targetting the relevant DOM elements here 👇
var cover = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button')
var currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

var newCoverButton = document.querySelector('.make-new-button')
var formView = document.querySelector('.view.form-view')
var homeView = document.querySelector('.view.home-view')
var saveNewButton = document.querySelector('.save-cover-button')
var homeButton =document.querySelector('.home-button')

var savedButton = document.querySelector('.view-saved-button')
var savedCoversView = document.querySelector('.view.saved-view')
var savedCoversSection = document.querySelector('.saved-covers-section')

var formCover = document.querySelector('#cover')
var formTitle = document.querySelector('#title')
var formDescriptor1 = document.querySelector('#descriptor1')
var formDescriptor2 = document.querySelector('#descriptor2')
var myBookButton = document.querySelector('.create-new-book-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomize)

newCoverButton.addEventListener('click', viewForm)

savedButton.addEventListener('click', viewSavedCovers)

homeButton.addEventListener('click', viewHome)

myBookButton.addEventListener('click', saveMyBook)

saveNewButton.addEventListener('click', saveCover)

savedCoversSection.addEventListener('dblclick', deleteSavedCover)


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);f
}

function randomize() {
  cover.src = covers[getRandomIndex(covers)]
  title.innerText = titles[getRandomIndex(titles)]
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)]
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
}
randomize()

function viewForm() {
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  savedCoversView.classList.add('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveNewButton.classList.add('hidden')
}

function viewSavedCovers() {
  homeView.classList.add('hidden')
  formView.classList.add('hidden')
  savedCoversView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveNewButton.classList.add('hidden')
}

function viewHome() {
  homeView.classList.remove('hidden')
  formView.classList.add('hidden')
  savedCoversView.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveNewButton.classList.remove('hidden')
}

function saveMyBook(event) {
  event.preventDefault();
  cover.src = formCover.value
  title.innerText = formTitle.value
  descriptor1.innerText = formDescriptor1.value
  descriptor2.innerText = formDescriptor2.value
  covers.push(formCover.value)
  titles.push(formTitle.value)
  descriptors.push(formDescriptor1.value, formDescriptor2.value)
  currentCover = new Cover (formCover.value, formTitle.value, formDescriptor1.value, formDescriptor2.value);
  viewHome()
}

function saveCover(){
  if (savedCovers.includes(currentCover) === false) {
    savedCovers.push(currentCover)
  }
  displayMiniCovers()
}

function displayMiniCovers() {
  savedCoversSection.innerHTML += `
    <section class="mini-cover" id="${currentCover.id}">
      <img class="cover-image" src="${currentCover.cover}">
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`
}

function deleteSavedCover() {
  var clickedCover = event.target.closest(".mini-cover")
  for (var i = 0; i < savedCovers.length; i++) {
    if(savedCovers[i].id === Number(clickedCover.id)) {
      savedCovers.splice(i, 1)
    }
  }
  displayMiniCovers()
}

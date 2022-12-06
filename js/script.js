const images = [
    {
       image: 'img/01.webp',
       title: 'Marvel\'s Spiderman Miles Morale',
       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
       image: 'img/02.webp',
       title: 'Ratchet & Clank: Rift Apart',
       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
       image: 'img/03.webp',
       title: 'Fortnite',
       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
       image: 'img/04.webp',
       title: 'Stray',
       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
       image: 'img/05.webp',
       title: "Marvel's Avengers",
       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
 ];

 const indexImages = [];

const newCarousel = document.querySelector('div.carousel-image.position-relative');
const prevButtonElement = document.querySelector('div.button.previous');
const nextButtonElement = document.querySelector('div.button.next');


//!!  const carousel = images.map((img, index) =>{
//     indexImages.push(index);

//     return img.image;
    
// });


// console.log(carousel);
// console.log(indexImages)



for ( let i=0; i<images.length; i++){
    const imageElement = images[i].image;
    console.log(imageElement)
    const carousel = document.createElement('div');
    carousel.innerHTML = `
                 <div class="my_carousel-item">
                    <img src="${imageElement}" alt="First image">
                 </div>
    `;

    newCarousel.prepend(carousel);
    indexImages.push(i);

}
console.log(indexImages)

let clicker = 0;
prevButtonElement.addEventListener ('click', function() {
clicker += clicker--;
});

nextButtonElement.addEventListener ('click', function() {
clicker += clicker++;
});

console.log(clicker)

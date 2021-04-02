// get an existing element from the page 

// define variable message
let myMessage = document.querySelector(".title");

console.log(myMessage.innertext);

// changeing element properties 
myMessage.style.color = "#6c0";
// adds a class of "big" to message
// myMessage.classList.add("big"); 


// creating new elements and adding them to the page

let newMessage = document.createElement("h1");
newMessage.classList.add("new-message");
newMessage.innerText = "Mini Collection of Animals";

// add the new h1 message to our page
document.querySelector(".container").append(newMessage);




// KANGAROO
let bodyText = document.createElement("h2");
bodyText.classList.add("body-text");
bodyText.innerText = "Kangaroo";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText);
bodyText.style.padding = "2rem";


// KOALA
let bodyText2 = document.createElement("h2");
bodyText2.classList.add("body-text");
bodyText2.innerText = "Koala";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText2);
bodyText2.style.padding = "2rem";
bodyText2.style.left = "2rem";
bodyText2.style.top = "4rem";


// add koala pic
let koalaPic = document.createElement("img");
koalaPic.classList.add("koala-pic");
koalaPic.src = "./assets/Koala.jpg";

let container = document.querySelector(".container");
container.append(koalaPic);

koalaPic.style.height = "300px";
koalaPic.style.padding = "1rem";


// PANDA
let bodyText3 = document.createElement("h2");
bodyText3.classList.add("body-text");
bodyText3.innerText = "Panda";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText3);
bodyText3.style.padding = "2rem";
bodyText3.style.left = "27rem";
bodyText3.style.top = "-25.5rem";


// add panda pic
let pandaPic = document.createElement("img");
pandaPic.classList.add("panda-pic");
pandaPic.src = "./assets/panda.jpg";

let container2 = document.querySelector(".container");
container.append(pandaPic);

pandaPic.style.height = "300px";
pandaPic.style.padding = "1rem";
pandaPic.style.left = "20rem";
pandaPic.style.top = "-29rem";
pandaPic.style.position = "relative";


// SLOTH
let bodyText4 = document.createElement("h2");
bodyText4.classList.add("body-text");
bodyText4.innerText = "Sloth";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText4);
bodyText4.style.padding = "2rem";
bodyText4.style.left = "60rem";
bodyText4.style.top = "-55rem";


// add Sloth pic
let slothPic = document.createElement("img");
slothPic.classList.add("sloth-pic");
slothPic.src = "./assets/sloth.jpg";

let container3 = document.querySelector(".container");
container.append(slothPic);

slothPic.style.height = "300px";
slothPic.style.padding = "1rem";
slothPic.style.left = "55rem";
slothPic.style.top = "-58rem";
slothPic.style.position = "relative";


// JELLYFISH
let bodyText5 = document.createElement("h2");
bodyText5.classList.add("body-text");
bodyText5.innerText = "Jellyfish";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText5);
bodyText5.style.padding = "2rem";
bodyText5.style.left = "2rem";
bodyText5.style.top = "-55rem";


// add jellyfish pic
let jellyfishPic = document.createElement("img");
jellyfishPic.classList.add("jellyfish-pic");
jellyfishPic.src = "./assets/jellyfish.jpg";

let container4 = document.querySelector(".container");
container.append(jellyfishPic);

jellyfishPic.style.height = "300px";
jellyfishPic.style.padding = "1rem";
jellyfishPic.style.left = "0rem";
jellyfishPic.style.top = "-58rem";
jellyfishPic.style.position = "relative";


// OCTOPUS
let bodyText6 = document.createElement("h2");
bodyText6.classList.add("body-text");
bodyText6.innerText = "Octopus";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText6);
bodyText6.style.padding = "2rem";
bodyText6.style.left = "37rem";
bodyText6.style.top = "-85rem";


// add octopus pic
let octopusPic = document.createElement("img");
octopusPic.classList.add("octopus-pic"); 
octopusPic.src = "./assets/octopus.jpg";

let container5 = document.querySelector(".container");
container.append(octopusPic);

octopusPic.style.height = "300px";
octopusPic.style.padding = "1rem";
octopusPic.style.left = "37rem";
octopusPic.style.top = "-87rem";
octopusPic.style.position = "relative";


// OSTRICH
let bodyText7 = document.createElement("h2");
bodyText7.classList.add("body-text");
bodyText7.innerText = "Ostrich";

// add the new h1 message to our page
document.querySelector(".container").append(bodyText7);
bodyText7.style.padding = "2rem";
bodyText7.style.left = "70rem";
bodyText7.style.top = "-114rem";


// add ostrich pic
let ostrichPic = document.createElement("img");
ostrichPic.classList.add("ostrich-pic"); 
ostrichPic.src = "./assets/ostrich.jpg";

let container6 = document.querySelector(".container");
container.append(ostrichPic);

ostrichPic.style.height = "300px";
ostrichPic.style.padding = "1rem";
ostrichPic.style.left = "74rem";
ostrichPic.style.top = "-116rem";
ostrichPic.style.position = "relative";




// defined button
let button = document.querySelector(".click-me");

button.addEventListener("click" , function(){
    // creating new image element

    let newImage = document.createElement("img");
    newImage.classList.add("new-image");
    newImage.src = "./assets/kangaroo.jpg";

    // add image to the page
    let container = document.querySelector(".container");
    container.append(newImage);
    

})

newImage.style.top = "1rem";

button.style.top = "10rem";
button.style.left = "1rem";


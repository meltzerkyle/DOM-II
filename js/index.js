const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//QUERY SELECTORS

//nav



let newNavItem1 = document.createElement("a");
let newNavItem2 = document.createElement("a");
let t1 = document.createTextNode("Propoganda");
let t2 = document.createTextNode("Kittens");


let nav = document.querySelector("nav");
newNavItem1.appendChild(t1);
newNavItem2.appendChild(t2);




nav.appendChild(newNavItem1);
nav.prepend(newNavItem2);

let navItems = document.querySelectorAll("nav a");








//cta
let ctaHeader = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaLogo = document.querySelector("#cta-img");

//main content

let mainContentHeaders = document.querySelectorAll(".text-content h4");
let mainContentText = document.querySelectorAll(".text-content p");
let mainContentImg = document.querySelector("#middle-img");

//contact

let contactHeader = document.querySelector(".contact h4");
let contactText = document.querySelectorAll(".contact p");

//footer

let footer = document.querySelector("footer p");


//HTML MANIPULATION

//nav



// newNavItem1.style.color = "green";
// newNavItem2.style.color = "green";

newNavItem1.setAttribute("href", "#");
newNavItem2.setAttribute("href", "#");

navItems[1].innerHTML = siteContent["nav"]["nav-item-1"];
navItems[2].innerHTML = siteContent["nav"]["nav-item-2"];
navItems[3].innerHTML = siteContent["nav"]["nav-item-3"];
navItems[4].innerHTML = siteContent["nav"]["nav-item-4"];
navItems[5].innerHTML = siteContent["nav"]["nav-item-5"];
navItems[6].innerHTML = siteContent["nav"]["nav-item-6"];


navItems.forEach((element) => element.style.color = "green");

navItems.forEach((element) => element.addEventListener ("click", (event) => {
  TweenMax.to(element, 1, {y:20});
}));


//cta
ctaHeader.innerHTML = "DOM<br> Is<br> Awesome";
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

//main content

mainContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

mainContentText[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentText[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentText[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentText[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentText[4].innerHTML = siteContent["main-content"]["vision-content"];

mainContentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact

contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

//footer

footer.innerHTML = siteContent["footer"]["copyright"];

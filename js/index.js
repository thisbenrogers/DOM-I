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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// TODO insert linebreaks
let linebreak = document.createElement("br");

// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent["cta"]["img-src"];

let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

// Nav
let navArr = document.querySelectorAll("a");
navArr.forEach(
  (anchorElement, index) => (anchorElement.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

//  Button
let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// Content Headers
let title = document.querySelector(".cta-text h1");
// TODO Line Break 3 and 6 space from beginning
title.textContent = siteContent["cta"]["h1"];

let contentArr = ["features", "about", "services", "product", "vision"];
let contentTitle = document.querySelectorAll(".text-content > h4");
contentTitle.forEach(
  (h4Element, index) => (h4Element.textContent = siteContent["main-content"][`${contentArr[index]}-h4`])
);

//  Copy
let contentCopy = document.querySelectorAll(".text-content > p");
contentCopy.forEach(
  (pElement, index) => (pElement.textContent = siteContent["main-content"][`${contentArr[index]}-content`])
);

// Contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactArr = ["address", "phone", "email"];
let contactInfo = document.querySelectorAll(".contact p");
contactInfo.forEach(
  (pElement, index) => (
    pElement.textContent = siteContent["contact"][`${contactArr[index]}`]
  )
);
// TODO Line Break 18 spaces from beginning on address

// Footer
let footer = document.querySelector("footer > p");
footer.textContent = siteContent["footer"]["copyright"];
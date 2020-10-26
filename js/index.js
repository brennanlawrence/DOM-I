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

const link = document.querySelectorAll("nav a");
link[0].innerText = "Services"; 
link[0].style.color = "green";
link[1].innerText = "Product";
link[1].style.color = "green";
link[2].innerText = "Vision";
link[2].style.color = "green";
link[3].innerText = "Features";
link[3].style.color = "green";
link[4].innerText = "About";
link[4].style.color = "green";
link[5].innerText = "Contact";
link[5].style.color = "green";

const fAQ = document.createElement("A");
fAQ.innerText = "FAQs";
fAQ.style.color = "green";
document.querySelector("nav").appendChild(fAQ);

const blog = document.createElement("A");
blog.innerText = "Blog";
blog.style.color = "green";
document.querySelector("nav").prepend(blog);

//const styleLink = document.querySelectorAll("nav a");
//styleLink.style.color = "green";

let h1Text = document.querySelector("h1");
h1Text.innerText = `DOM\nIS\nAWESOME`;

let bigButton = document.querySelector("button");
bigButton.innerText = "Get Started";

let headerImg = document.querySelector(".cta img");
headerImg.setAttribute("src", "../img/header-img.png")

const h4sTop = document.querySelectorAll(".top-content h4")
h4sTop[0].innerText = "Features";
h4sTop[1].innerText = "About";

const psTop = document.querySelectorAll(".top-content p")
psTop[0].innerText = `Features content elementum magna eros, ac posuere elvit 
tempus et. Suspendisse vel tempus odio,in interdutm nisi.
Suspendisse eu ornare nisl. Nullam convallis augue justo, at
imperdiet metus scelerisque quis.`;
psTop[1].innerText = `About content elementum magna eros, ac posuere elvit 
tempus et. Suspendisse vel tempus odio,in interdutm nisi.
Suspendisse eu ornare nisl. Nullam convallis augue justo, at
imperdiet metus scelerisque quis.`;

let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", "../img/mid-page-accent.jpg");

const h4sBottom = document.querySelectorAll(".bottom-content h4")
h4sBottom[0].innerText = "Services";
h4sBottom[1].innerText = "Product";
h4sBottom[2].innerText = "Vision";

const psBottom = document.querySelectorAll(".bottom-content p")
psBottom[0].innerText = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
psBottom[1].innerText = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
psBottom[2].innerText = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;


const contactTitle = document.querySelector(".contact h4");
contactTitle.innerText = "Contact";
const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerText = `123 Way 456 Street
Somewhere, USA`;
contactInfo[1].innerText = "1 (888) 888-8888";
contactInfo[2].innerText = "sales@greatidea.io";

const footerP = document.querySelector("footer p");
footerP.innerText = "Copyright Great Idea! 2018";
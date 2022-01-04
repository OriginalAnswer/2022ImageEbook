const formPage = document.querySelector("#page-number__form");
const inputPage = document.querySelector("#page-number");
const pages = document.querySelector(".pages");

const PAGE_KEY = "page";
const savedPage = localStorage.getItem(PAGE_KEY);


function savePage() {
    const pageNum = inputPage.value;
    localStorage.setItem(PAGE_KEY, pageNum);
}
function loadPage() {
    localStorage.getItem(PAGE_KEY, pageNum);
}

// console.log(savedPage);

if(savedPage === null){
    formPage.addEventListener("submit", savePage);
} else {
    // loadPage();
}


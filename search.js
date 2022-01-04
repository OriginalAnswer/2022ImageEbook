const pageForm = document.querySelector("#pageForm");
const pageForm__input = document.querySelector("#pageForm__input");

const PAGE_KEY = "page";
const savedPage = localStorage.getItem(PAGE_KEY);


// ----------------------------------------------------

function setPageTag() {
    const page = document.createElement("div");
    document.body.appendChild(page);
    page.classList.add('page');

}

function savePage() {
    localStorage.clear()
    const pageNum = pageForm__input.value;
    localStorage.setItem(PAGE_KEY, pageNum);
    setPageTag();
}
// --------------------------------------------------
pageForm.addEventListener("submit", savePage);
// ----------------------------------------------------

// if (savedPage === null) {
//     pageForm.addEventListener("submit", savePage);
// } else {
// }
console.log(savedPage);
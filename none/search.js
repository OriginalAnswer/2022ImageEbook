const pageForm = document.querySelector("#pageForm");
const pageForm__input = document.querySelector("#pageForm__input");

const PAGE_KEY = "page";
const savedPage = localStorage.getItem(PAGE_KEY);


// ----------------------------------------------------



// 로컬스토리지 page value=1 저장
function firstPage() {
    localStorage.setItem(PAGE_KEY, 1);
}

//서치 인풋 이벤트
function savePage() {
    const pageNum = pageForm__input.value;
//서치 인풋 값
    localStorage.clear()
//로컬스토리지 value 지우기
    localStorage.setItem(PAGE_KEY, pageNum);
//로컬 스토리지에 서치 인풋 값 입력
}


pageForm.addEventListener("submit", savePage);


if (savedPage === null) {
    firstPage();
} else {
    makeDiv();
}



console.log(savedPage);
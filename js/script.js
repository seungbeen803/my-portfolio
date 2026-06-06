// 모든 메뉴 가져오기
const navMenus = document.querySelectorAll(".nav-btn");

// 모든 페이지 가져오기
const pages = document.querySelectorAll(".page");

// 메뉴 클릭 이벤트 등록
navMenus.forEach(btn => {
    btn.addEventListener("click", function(event) {
        // a 태그 기본 동작 방지
        event.preventDefault();

        // 클릭한 메뉴의 data-page 값 가져오기
        const targetPage = this.dataset.page;

        // 모든 페이지 숨기기
        pages.forEach(page => {
            page.classList.remove("active");
        });

        // 선택한 페이지만 표시
        document.getElementById(targetPage).classList.add("active");

        // 메뉴 활성화 표시
        navMenus.forEach(menu => {
            menu.classList.remove("active-nav");
        });

        this.classList.add("active-nav");
    });
});
window.addEventListener("scroll", function () {
    // alert("hiii");

    const nav = document.getElementById("nav");

    if (window.scrollY > 30) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
})

function showTab(tabName) {
    // console.log(tabName);

    const currentTab = document.getElementById(tabName);
    // console.log(currentTab);
    const currentBtn = document.getElementById(tabName + "Btn");
    // console.log(currentBtn);
    const prevTab = document.querySelector(".active")
    const prevBtn = document.querySelector(".activeBtn")
    prevBtn.classList.remove("activeBtn");
    prevTab.classList.remove("active");
    prevTab.classList.remove("block");
    prevTab.classList.add("hidden");

    currentBtn.classList.add("activeBtn")
    currentTab.classList.remove("hidden");
    currentTab.classList.add("block");
    currentTab.classList.add("active");

    // const prevTab = document.getElementByClassName("active");


}









document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
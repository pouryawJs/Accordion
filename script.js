const $ = document;
const wrapperElems = $.querySelectorAll(".wrapper");

window.addEventListener("load", () => {
    let content, icon, button;
    wrapperElems.forEach((wrapper) => {
        wrapper.addEventListener("click", () => {
            content = wrapper.querySelector(".content");
            icon = wrapper.querySelector("i");
            button = wrapper.querySelector("button");

            resetAccordions();

            content.style.height = content.scrollHeight + "px";
            icon.classList.replace("fa-plus", "fa-minus");
            button.style.color = "rgb(0,132,233)";
        });
    });
});
const resetAccordions = () => {
    let content, icon, button;

    wrapperElems.forEach((wrapper) => {
        content = wrapper.querySelector(".content");
        icon = wrapper.querySelector("i");
        button = wrapper.querySelector("button");

        content.style.height = "0px";
        icon.classList.contains("fa-minus") && icon.classList.replace("fa-minus", "fa-plus");
        button.removeAttribute("style");
    });
};

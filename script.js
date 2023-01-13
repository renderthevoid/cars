document.addEventListener("DOMContentLoaded", () => {
    let layer = document.querySelector(".image");
document.addEventListener("mousemove", event => {
    layer.style.transform = "translate3d(" + ((event.clientX * 0.2) / 5) + "px, " +
    ((event.clientY * 0.2) / 5) + "px,0px)";
});

    const elem = document.querySelector(".main");
document.addEventListener("scroll", () => {
    elem.style.backgroundPositionX = "0" + (0.8 * window.pageYOffset) + "px"; 
})
});

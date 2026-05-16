const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion) {
  document.querySelector(".button").addEventListener("click", function () {
    const plusOne = document.createElement("span");

    plusOne.classList.add("plus-one-effect");
    plusOne.innerText = "+ 1";

    const randomX = (Math.random() * 50 - 25).toFixed(2);
    const randomRotate = (Math.random() * 20 - 10).toFixed(2);

    plusOne.style.setProperty("--_random-rotate", `${randomRotate}deg`);
    plusOne.style.setProperty("--_random-x", `${randomX}px`);

    this.appendChild(plusOne);

    plusOne.addEventListener("animationend", () => {
      plusOne.remove();
    });
  });
}
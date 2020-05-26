function main () {
  const panelsElements = document.querySelector('.wrapper');
  Panel("red");
  Panel("blue");
  Panel("green");
}

const Panel = (className) => {
  const panel = document.querySelector("." + className);
  panel.addEventListener("click", () => {
    const counter = document.querySelector("." + className + "-counter");
    counter.textContent = parseInt(counter.textContent) + 1;
  })
}
  window.onload = main;
  
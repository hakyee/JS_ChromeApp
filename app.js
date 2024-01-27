const title = document.querySelector("div.hello h1:first-child");

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);

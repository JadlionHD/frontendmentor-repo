/**
 * @type {HTMLDivElement | undefined}
 */
let activeClass = undefined;

/**
 * @param {HTMLDivElement} e
 */
function handleRating(e) {
  const main = document.querySelectorAll(".rate");

  main.forEach((el) => {
    el.classList.remove("rate-active");
  });

  e.classList.toggle("rate-active");
  activeClass = e;
}

function scoreSubmit() {
  if (activeClass === undefined) alert("Please select rating score");
  else {
    const box = document.querySelector(".box");
    const thankyou = document.querySelector(".thank-you");
    /**
     * @type {HTMLSpanElement}
     */
    const score = document.querySelector(".selected-score");

    score.innerText = activeClass.getAttribute("data-rating");
    box.style.display = "none";
    thankyou.style.display = "block";
  }
}

/**
 * @type {HTMLCollection}
 */
const accList = document.getElementsByClassName("accordion-header");

for (let i = 0; i < accList.length; i++) {
  const acc = accList[i];

  acc.addEventListener("click", (_ev) => {
    acc.classList.toggle("active");
    acc.nextElementSibling.style.display === "block"
      ? (acc.nextElementSibling.style.display = "none")
      : (acc.nextElementSibling.style.display = "block");
  });
}

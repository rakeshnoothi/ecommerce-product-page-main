const menuIcon = document.querySelector("[data-menuIcon]");
const navMenu = document.querySelector("[data-navMenu]");
const closeMenu = document.querySelector("[data-closeMenu]");
const bgMasking = document.querySelector("[data-bgMasking]");
const preBtn = document.querySelector("[data-previousBtn]");
const nxtBtn = document.querySelector("[data-nextBtn]");
const productImg = document.querySelector("[data-productImage]");
const thumbnailImgs = document.querySelectorAll("[data-thumbnailImg]");
const minusBtn = document.querySelector("[data-minusBtn]");
const plusBtn = document.querySelector("[data-plusBtn]");
const quantity = document.querySelector("[data-quantity]");
const desktopMask = document.querySelector("[data-desktopMask]");
const closeBtn = document.querySelector("[data-close]");
const desktopMaskImg = document.querySelector("[data-desktopMaskImg]");
const desktopPrevBtn = document.querySelector("[data-desktopPreviousBtn]");
const desktopNxtBtn = document.querySelector("[data-desktopNextbtn]");
const cartIcon = document.querySelector("[data-cartIcon]");
const cartCard = document.querySelector("[data-cartCard]");
const cartSection = document.querySelector("[data-cartSection]");
const addToCartBtn = document.querySelector("[data-addToCartBtn]");
const productName = document.querySelector("[data-productName]").innerText;

// displaying menu bar on the left side.
menuIcon.addEventListener("click", () => {
  navMenu.classList.remove("translate-x-[-800px]");
  navMenu.classList.add("translate-x-[0px]");
  bgMasking.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.add("translate-x-[-800px]");
  navMenu.classList.remove("translate-x-[0px]");
  bgMasking.classList.toggle("hidden");
});

//changing the images for the mobile view.
let imageNumber = 0;
nxtBtn.addEventListener("click", () => {
  imageNumber++;
  if (imageNumber > 3) {
    imageNumber = 0;
  }
  productImg.setAttribute("src", `../images/image-product-${imageNumber}.jpg`);
});

preBtn.addEventListener("click", () => {
  imageNumber--;
  if (imageNumber < 0) {
    imageNumber = 3;
  }
  productImg.setAttribute("src", `../images/image-product-${imageNumber}.jpg`);
});

//changing image for the landscape view.
desktopNxtBtn.addEventListener("click", () => {
  imageNumber++;
  if (imageNumber > 3) {
    imageNumber = 0;
  }
  desktopMaskImg.setAttribute(
    "src",
    `../images/image-product-${imageNumber}.jpg`
  );
});

desktopPrevBtn.addEventListener("click", () => {
  imageNumber--;
  if (imageNumber < 0) {
    imageNumber = 3;
  }
  desktopMaskImg.setAttribute(
    "src",
    `../images/image-product-${imageNumber}.jpg`
  );
});

Array.from(thumbnailImgs, (thumbnailImg, index) => {
  thumbnailImg.addEventListener("click", () => {
    desktopMask.classList.toggle("md:flex");
  });
});

closeBtn.addEventListener("click", () => {
  desktopMask.classList.toggle("md:flex");
});

//quantity of the product.
let quantityValue = 0;
minusBtn.addEventListener("click", () => {
  if (quantityValue > 0) {
    quantityValue--;
    quantity.innerText = quantityValue;
  }
});
plusBtn.addEventListener("click", () => {
  if (quantityValue < 10) {
    quantityValue++;
    quantity.innerText = quantityValue;
  }
});

// cartCard display.
cartIcon.addEventListener("click", () => {
  cartCard.classList.toggle("hidden");
});

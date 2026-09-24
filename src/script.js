function setupIntersectionObserver(element, isLTR, speed, initialTranslate = 0) {
  const initialTop = element.getBoundingClientRect().top + window.scrollY;

  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight + window.scrollY - initialTop) * speed;

    const totalTranslate = isLTR
      ? translateX + initialTranslate
      : -(translateX + initialTranslate);

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const initialTranslateLTR = -48 * 4;
const initialTranslateLTRLine3 = -20 * 4;

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

setupIntersectionObserver(line1, true, 0.15, initialTranslateLTR);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15, initialTranslateLTRLine3);
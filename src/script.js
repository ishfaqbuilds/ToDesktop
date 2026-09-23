function setupIntersectionObserver(element, isLTR, speed) {
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
    const translateX = (window.innerHeight + window.scrollY - initialTop) * speed;

    const totalTranslate = isLTR ? translateX : -translateX;

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);

if (window.innerWidth < 1024) {
  setupIntersectionObserver(line3, true, 0.15);
}

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});

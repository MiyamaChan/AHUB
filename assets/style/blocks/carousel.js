document.addEventListener("DOMContentLoaded", function () {
  const carouselHashtags = document.querySelector(".carousel-hashtags");
  const carouselTrackHashtags = document.querySelector(".track-hashtags");
  const carouselSlidesHashtags = document.querySelectorAll(".carousel-hashtags__slide");
  const prevButtonHashtags = document.querySelector(".prev-hashtags");
  const nextButtonHashtags = document.querySelector(".next-hashtags");

  let currentSlideHashtags = 0;
  const slideWidthHashtags = carouselSlidesHashtags[0].offsetWidth + 10;

  function updateCarouselHashtags() {
    const maxTranslateHashtags = -(carouselSlidesHashtags.length - 1) * slideWidthHashtags;
    const translateXHashtags = -currentSlideHashtags * slideWidthHashtags;

    if (translateXHashtags <= maxTranslateHashtags) {
      carouselTrackHashtags.style.transform = `translateX(${maxTranslateHashtags}px)`;
    } else {
      carouselTrackHashtags.style.transform = `translateX(${translateXHashtags}px)`;
    }
  }

  prevButtonHashtags.addEventListener("click", function () {
    if (currentSlideHashtags == 1) {
      prevButtonHashtags.style.display = "none";
    }
    if (currentSlideHashtags > 0) {
      currentSlideHashtags--;
      updateCarouselHashtags();
    }
  });

  nextButtonHashtags.addEventListener("click", function () {
    prevButtonHashtags.style.display = "block";
    if (currentSlideHashtags < carouselSlidesHashtags.length - 1) {
      currentSlideHashtags++;
      updateCarouselHashtags();
    }
  });

  const carouselDelicious = document.querySelector(".carousel-delicious");
  const carouselTrackDelicious = document.querySelector(".track-delicious");
  const carouselSlidesDelicious = document.querySelectorAll(".carousel-delicious__slide");
  const prevButtonDelicious = document.querySelector(".prev-delicious");
  const nextButtonDelicious = document.querySelector(".next-delicious");

  let currentSlideDelicious = 0;
  const slideWidthDelicious = carouselSlidesDelicious[0].offsetWidth + 10;

  function updateCarouselDelicious() {
    const maxTranslateDelicious = -(carouselSlidesDelicious.length - 1) * slideWidthDelicious;
    const translateXDelicious = -currentSlideDelicious * slideWidthDelicious;

    if (translateXDelicious <= maxTranslateDelicious) {
      carouselTrackDelicious.style.transform = `translateX(${maxTranslateDelicious}px)`;
    } else {
      carouselTrackDelicious.style.transform = `translateX(${translateXDelicious}px)`;
    }
  }

  prevButtonDelicious.addEventListener("click", function () {
    if (currentSlideDelicious == 1) {
      prevButtonDelicious.style.display = "none";
    }
    if (currentSlideDelicious > 0) {
      currentSlideDelicious--;
      updateCarouselDelicious();
    }
  });

  nextButtonDelicious.addEventListener("click", function () {
    prevButtonDelicious.style.display = "block";
    if (currentSlideDelicious < carouselSlidesDelicious.length - 1) {
      currentSlideDelicious++;
      updateCarouselDelicious();
    }
  });

  const carouselMarket = document.querySelector(".carousel-market");
  const carouselTrackMarket = document.querySelector(".track-market");
  const carouselSlidesMarket = document.querySelectorAll(".carousel-market__slide");
  const prevButtonMarket = document.querySelector(".prev-market");
  const nextButtonMarket = document.querySelector(".next-market");

  let currentSlideMarket = 0;
  const slideWidthMarket = carouselSlidesMarket[0].offsetWidth + 10;

  function updateCarouselMarket() {
    const maxTranslateMarket = -(carouselSlidesMarket.length - 1) * slideWidthMarket;
    const translateXMarket = -currentSlideMarket * slideWidthMarket;

    if (translateXMarket <= maxTranslateMarket) {
      carouselTrackMarket.style.transform = `translateX(${maxTranslateMarket}px)`;
    } else {
      carouselTrackMarket.style.transform = `translateX(${translateXMarket}px)`;
    }
  }

  prevButtonMarket.addEventListener("click", function () {
    if (currentSlideMarket == 1) {
      prevButtonMarket.style.display = "none";
    }
    if (currentSlideMarket > 0) {
      currentSlideMarket--;
      updateCarouselMarket();
    }
  });

  nextButtonMarket.addEventListener("click", function () {
    prevButtonMarket.style.display = "block";
    if (currentSlideMarket < carouselSlidesMarket.length - 1) {
      currentSlideMarket++;
      updateCarouselMarket();
    }
  });
});

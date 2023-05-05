$(document).ready(function() {
  // Clone initial elements
  const initialProducts = $("[element='product']").clone(true);

  function filterProductsByActiveTypes() {
    $("[element='product']").detach();

    const activeTypes = $("[filter-type].filter-is-active").map(function() {
      return $(this).attr("filter-type");
    }).get();

    initialProducts.each(function() {
      const productType = $(this).attr("filter-type");

      if (activeTypes.includes(productType)) {
        $("[element='products']").append($(this).clone(true));
      }
    });
  }

  // Type filter button click event
  $("[element='types']").on("click", ".filter-button", function() {
    // Toggle filter-is-active class
    $(this).toggleClass("filter-is-active");

    // Filter products
    if ($("[filter-type].filter-is-active").length > 0) {
      filterProductsByActiveTypes();
    } else {
      $("[element='product']").detach();
      $("[element='products']").append(initialProducts.clone(true));
    }
  });
});




$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: true,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%",
        centeredSlides: true,
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
        centeredSlides: true,
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
        centeredSlides: true,
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});

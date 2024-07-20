function slider(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

function locomotive(){
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};

function slideAnimation() {
    gsap.from("#pc-1",{
        scale: 0.3,
        ease: "easeInOut",
        duration: 2,
        delay: 1,
        x: -480,
        y: -140,
        scrollTrigger:{
            trigger: ".elem2",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            end: "top 100%",
            scrub: 5,

        }
    })
    gsap.from("#pc-2",{
        scale: 0.3,
        ease: "power1.out",
        duration: 2,
        delay: 1,
        x: -475,
        y: -200,
        scrollTrigger:{
            trigger: ".elem2",
            scroller: "#main",
            // markers: true,
            start: "top 95%",
            scrub: 5,
            end: "top 100%",
    }
    })
}

function loader(){
  gsap.to("#slogan",{
    opacity: 1,
    duration: 1,
    delay: 0.5,

  })

  gsap.to("#slogan",{
    color: "#000",
    x: -250,
    delay: 3,
    ease: "easeInOut",
  })

  gsap.to("#left-load ,#right-load",{
    backgroundColor: "#fff",
    delay: 3,
  })

  gsap.to("#uni",{
    opacity: 1,
    delay: 3
  })
  gsap.to("#rev",{
    opacity: 1,
    delay: 3
  })

  gsap.to("#uni",{
    y: -270,
    delay: 4,
    ease: "easeInOut",
  })
  gsap.to("#rev",{
    y: 295,
    delay: 4,
    ease: "easeInOut",
  })
  gsap.to("#uni",{
    scale: 0.4,
    x:-760,
    y:-285,
    delay: 5,
    duration:0.3,
    ease: "easeInOut",
  })
  gsap.to("#rev",{
    scale: 0.4,
    x:530,
    y:305,
    duration:0.3,
    delay: 5,
    ease: "easeInOut",
  })
  // gsap.to("#left-load",{
  //   x:-1000,
  //   // delay: 5.3,
  //   duration: 1, 
  //   ease: "linear",
  //   opacity: 0,
  //   display: none,
  //   delay: 5.2,
  // })
  // gsap.to("#right-load",{
  //   x: 2000,
  //   duration: 1, 
  //   ease: "linear",
  //   opacity: 0,
  //   display: none,
  //   delay: 5.2,
  // })

  gsap.to(".loader, #left-load, #right-load,#slogan,#uni,#rev",{
    display: "none",
    opacity: 0,
    duration: 0.2,
    delay: 5.5,
    zIndex: -99999,
  })


  gsap.from("#winter , #txt-2",{
    y: 200,
    duration: 1,
    delay: 5.6,
  })
}


loader()
locomotive()
slider()













slideAnimation();



// // gsap.registerPlugin(ScrollTrigger);

// let horizontalSection = document.querySelector('.content_12th_inside');

// console.log(horizontalSection.scrollWidth);

// gsap.to('.content_12th_inside', {
//   x: () => horizontalSection.scrollWidth * -1,
//   xPercent: 58,
//   scrollTrigger: {
//     trigger: '.page12th',
//     start: 'center center',
//     end: '+=2000vw',
//     pin: '.page12th',
//     scrub: true,
//     // scroller: "body",

//     invalidateOnRefresh: true
//   }
// });






gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.content_12th_inside');

console.log(horizontalSection.scrollWidth);

gsap.to('.content_12th_inside', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 58,
  scrollTrigger: {
    trigger: '.page12th',
    start: 'center center',
    end: '+=2000vw',
    pin: '.page12th',
    scrub: true,
    // markers: true,
    scroller: "#main",
    invalidateOnRefresh: true
  }
});



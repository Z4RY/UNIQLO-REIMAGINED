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
  start: '170% center',
  end: '+=2000vw',
  pin: '.page12th',
  scrub: true,
  // markers: true,
  scroller: "#main",
  invalidateOnRefresh: true
}
});








function show(){
var tl = gsap.timeline({scrollTrigger:{
  trigger:"#page7",
  // markers:true,
  scroller: "#main",
  start:"top top",
  end:"150% 30%",
  scrub:2,
  duration: 3000,
  pin:true
}});
tl
.to("#center",{
  height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
},'a')
.to("#bottom",{
    bottom: "-50%",
},'a')
.to("#top-h1",{
    top: "60%"
},'a')
.to("#bottom-h1",{
    bottom: "-30%"
},'a')
.to("#center-h1",{
  top: "-30%"
},'a')
.to(".content",{
  delay: -0.2,
  marginTop: "0%"
})
}











// function show(){

//   document.getElementById('show1').addEventListener('mouseover', function() {
//     document.getElementById('show1').src = './Images/show4.jpg';
//   });

//   document.getElementById('show1').addEventListener('mouseout', function() {
//     document.getElementById('show1').src = './Images/item_38_kv.jpg';
//   });
// }

show()




function layout() {
  var pic0 = document.getElementById('show0');

  document.getElementById('show0-0').addEventListener('mouseover', function() {
    pic0.src = './Images/show4.jpg';
    pic0.style.transition = "ease";
    pic0.style.transitionDuration = "0.4";

  });

  document.getElementById('show0-0').addEventListener('mouseout', function() {
    pic0.src = './Images/item_38_kv.jpg';
    pic0.style.transition = "0.3 ease";
    pic0.style.transitionDuration = "0.4";
  });

  var pic1 = document.getElementById('show1');

  document.getElementById('show1-1').addEventListener('mouseover', function() {
    pic1.src = './Images/show11.jpg';
    pic1.style.transition = "ease";
    pic1.style.transitionDuration = "0.4";

  });

  document.getElementById('show1-1').addEventListener('mouseout', function() {
    pic1.src = './Images/res462602e7d3c8dca6329854efe7f66eb1fr.jpg';
    pic1.style.transition = "0.3 ease";
    pic1.style.transitionDuration = "0.4";
  });

  var pic2 = document.getElementById('show2');

  document.getElementById('show2-2').addEventListener('mouseover', function() {
    pic2.src = './Images/show7.jpg';
    pic2.style.transition = "ease";
    pic2.style.transitionDuration = "0.4";

  });

  document.getElementById('show2-2').addEventListener('mouseout', function() {
    pic2.src = './Images/item_18_kv.jpg';
    pic2.style.transition = "0.3 ease";
    pic2.style.transitionDuration = "0.4";
  });

  var pic3 = document.getElementById('show3');

  document.getElementById('show3-3').addEventListener('mouseover', function() {
    pic3.src = './Images/show4.jpg';
    pic3.style.transition = "ease";
    pic3.style.transitionDuration = "0.4";

  });

  document.getElementById('show3-3').addEventListener('mouseout', function() {
    pic3.src = './Images/category-1-1-2.jpg';
    pic3.style.transition = "0.3 ease";
    pic3.style.transitionDuration = "0.4";
  });

  var pic4 = document.getElementById('show4');

  document.getElementById('show4-4').addEventListener('mouseover', function() {
    pic4.src = './Images/show6.jpg';
    pic4.style.transition = "ease";
    pic4.style.transitionDuration = "0.4";

  });

  document.getElementById('show4-4').addEventListener('mouseout', function() {
    pic4.src = './Images/category-5-2-2 (1).jpg';
    pic4.style.transition = "0.3 ease";
    pic4.style.transitionDuration = "0.4";
  });

  var pic5 = document.getElementById('show5');

  document.getElementById('show5-5').addEventListener('mouseover', function() {
    pic5.src = './Images/show1.jpg';
    pic5.style.transition = "ease";
    pic5.style.transitionDuration = "0.4";

  });

  document.getElementById('show5-5').addEventListener('mouseout', function() {
    pic5.src = './Images/e92446137e815281902b527019c42309.jpg';
    pic5.style.transition = "0.3 ease";
    pic5.style.transitionDuration = "0.4";
  });

  var pic6 = document.getElementById('show6');

  document.getElementById('show6-6').addEventListener('mouseover', function() {
    pic6.src = './Images/show10.jpg';
    pic6.style.transition = "ease";
    pic6.style.transitionDuration = "0.4";

  });

  document.getElementById('show6-6').addEventListener('mouseout', function() {
    pic6.src = './Images/l2.jpeg';
    pic6.style.transition = "0.3 ease";
    pic6.style.transitionDuration = "0.4";
  });

  var pic7 = document.getElementById('show7');

  document.getElementById('show7-7').addEventListener('mouseover', function() {
    pic7.src = './Images/show5.jpg';
    pic7.style.transition = "ease";
    pic7.style.transitionDuration = "0.4";

  });

  document.getElementById('show7-7').addEventListener('mouseout', function() {
    pic7.src = './Images/item_51_03_01.jpg';
    pic7.style.transition = "0.3 ease";
    pic7.style.transitionDuration = "0.4";
  });

  var pic8 = document.getElementById('show8');

  document.getElementById('show8-8').addEventListener('mouseover', function() {
    pic8.src = './Images/show3.jpg';
    pic8.style.transition = "ease";
    pic8.style.transitionDuration = "0.4";

  });

  document.getElementById('show8-8').addEventListener('mouseout', function() {
    pic8.src = './Images/resd4333be8c0527f147194085f0c4bda83fr.jpg';
    pic8.style.transition = "0.3 ease";
    pic8.style.transitionDuration = "0.4";
  });

  var pic9 = document.getElementById('show9');

  document.getElementById('show9-9').addEventListener('mouseover', function() {
    pic9.src = './Images/show2.jpg';
    pic9.style.transition = "ease";
    pic9.style.transitionDuration = "0.4";

  });

  document.getElementById('show9-9').addEventListener('mouseout', function() {
    pic9.src = './Images/item_41_kv.jpg';
    pic9.style.transition = "0.3 ease";
    pic9.style.transitionDuration = "0.4";
  });

  var pic10 = document.getElementById('show10');

  document.getElementById('show10-10').addEventListener('mouseover', function() {
    pic10.src = './Images/show12.jpg';
    pic10.style.transition = "ease";
    pic10.style.transitionDuration = "0.4";

  });

  document.getElementById('show10-10').addEventListener('mouseout', function() {
    pic10.src = './Images/item_23_kv.jpg';
    pic10.style.transition = "0.3 ease";
    pic10.style.transitionDuration = "0.4";
  });
}




layout();
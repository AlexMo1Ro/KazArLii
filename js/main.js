const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./images/icons/nav-close.svg";
    } else {
        navBtnImg.src = './images/icons/nav-open.svg';
    }
}

// AOS.init();
// // ================= anchor-links ==================
// const anchors = document.querySelectorAll('a[href*="#"]');

// for (anchor of anchors) {
//   if (anchor) {
//     anchor.addEventListener('click', function(e){
//       e.preventDefault();
//       anchorId = this.getAttribute('href');
//       document.querySelector(anchorId).scrollIntoView({
//         behavior: 'smooth', block: 'start'
//       });
//     });
//   }
// }

// // ================= scroll-position ==================
// const upArrow = document.querySelector('.up-arrow');

// window.addEventListener('scroll', function () {
//   const scrollPosition = window.scrollY;
  
//   if (scrollPosition > 600)
//     upArrow.classList.add('_active');
//   else
//     upArrow.classList.remove('_active');

// });
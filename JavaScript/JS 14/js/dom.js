let child = document.querySelector('.child');

// console.log(child.offsetParent);
// console.log(child.offsetLeft);
// console.log(child.offsetTop);
// console.log(child.offsetWidth);
// console.log(child.offsetHeight);
// console.log(child.clientLeft);
// console.log(child.clientTop);
// console.log(child.clientWidth);
// console.log(child.clientHeight);
// console.log(child.scrollWidth);
// console.log(child.scrollHeight);
// console.log(child.scrollLeft);
// console.log(child.scrollTop);

// console.log(window.pageXOffset);
// console.log(window.pageYOffset);
// console.log(window.scrollX);
// console.log(window.scrollY);

// window.scroll(0, 1000);
// window.scroll({ left: 0, top: 1000, behavior: 'smooth' });
// window.scrollTo(0, 1000);
// window.scrollTo({ left: 0, top: 1000, behavior: 'smooth' });
// window.scrollBy(0, 1000);
// window.scrollBy({ left: 0, top: 1000, behavior: 'smooth' });

// document.getElementById('test').scrollIntoView(true);
// document.getElementById('test').scrollIntoView(false);

// let testH1 = document.getElementById('test');

// console.log(testH1.offsetTop);

// window.scrollTo(0, testH1.offsetTop);

window.addEventListener('scroll', () => {
  let where = window.scrollY;
  let sections = document.getElementsByTagName('section');
  let links = document.querySelectorAll('nav > a');
  console.log(`Where: ${where}`);
  let sectionId = 'home';
  for (let i = sections.length - 1; i >= 0; i--) {
    if (where > sections[i].offsetTop - 54) {
      sectionId = sections[i].dataset.sectionId;
      break;
    }
  }
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
    if (links[i].dataset.sectionId == sectionId) {
      links[i].classList.add('active');
    }
  }
});

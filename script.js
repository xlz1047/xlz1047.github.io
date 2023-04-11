const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline1 = document.querySelector('.headline1');
const headline2 = document.querySelector('.headline2');
const arrow = document.querySelector('.arrow')

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
  .fromTo(hero, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
  .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
  .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(menu, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
  .fromTo(headline2, 0.7, {opacity: 0, z: -50}, {opacity: 1, z: 3}, "-=1.3")
  .fromTo(arrow, 1.5, {opacity: 0, z: -30}, {opacity: 1, z: 3});




// 3D Scroll

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame');
let frames = Array.from($frames);
let zVals = [];

window.addEventListener('scroll', () => {
  let top = document.documentElement.scrollTop;
  let delta = lastPos - top;
  lastPos = top;
  
  frames.forEach((n, i) => {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -5.5;
    
    let frame = frames[i];
    let transform = `translateZ(${zVals[i]}px)`;
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity};`);
  });
});


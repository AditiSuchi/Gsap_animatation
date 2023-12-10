let tl = gsap.timeline();

tl.from(".logo , .med-nav, .contact", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".pc-screen>img", {
  x: 200,
  duration: 1,
  opacity: 0,
  scale: 0,
  rotate: 180,
});
tl.from(".span1", {
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".span2", {
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".world>span", {
  duration: 2,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".scroll", {
  opacity: 0,
  y: 6,
  duration1: 0.5,
  repeat: -1,
  yoyo: true,
});

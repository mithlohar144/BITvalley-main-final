
  const cursor = document.querySelector('.custom-cursor');

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5, // Smooth transition
      ease: 'power2.out',
    });
  });

  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 1, backgroundColor: '#070066', duration: 0.3 });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1.5 ,zIndex:1,  backgroundColor: '#070066', duration: 0.1 });
    });
  });



  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

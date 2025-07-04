document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const sidebarNav = document.getElementById('sidebarNav');
  const closeSidebar = document.getElementById('closeSidebar');

  if (!hamburger || !sidebarNav || !closeSidebar) return; // exit if elements are missing

  hamburger.addEventListener('click', () => {
    sidebarNav.classList.add('open');
    hamburger.style.display = 'none';
    document.body.style.overflow = 'hidden';
  });

  closeSidebar.addEventListener('click', () => {
    sidebarNav.classList.remove('open');
    hamburger.style.display = '';
    document.body.style.overflow = '';
  });

  document.addEventListener('click', (event) => {
    if (!sidebarNav.contains(event.target) && !hamburger.contains(event.target)) {
      sidebarNav.classList.remove('open');
      hamburger.style.display = '';
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, {
      threshold: 0.3
    });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });


const faders = document.querySelectorAll('.fade-in');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });


const video1 = document.getElementById('heroVideo1');
const video2 = document.getElementById('heroVideo2');

// Play the first video automatically
video1.play();

// When the first video ends, fade to the second video
video1.addEventListener('ended', () => {
  video2.currentTime = 0;
  video2.style.opacity = 1;
  video2.play();
  setTimeout(() => {
    video1.style.opacity = 0;
  }, 1000); // matches the CSS transition
});

// (Optional) Loop back to the first video after the second finishes
video2.addEventListener('ended', () => {
  video1.currentTime = 0;
  video1.style.opacity = 1;
  video1.play();
  setTimeout(() => {
    video2.style.opacity = 0;
  }, 1000);
});








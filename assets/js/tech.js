/* ============================================================
   TECH THEME — sangeetsatpathy.github.io
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     PARTICLE NETWORK
     ---------------------------------------------------------- */
  var canvas = document.getElementById('particle-canvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var isHome = document.body.classList.contains('home');
    var W, H;
    var mouse = { x: null, y: null };
    var particles = [];
    var COUNT = isHome ? 75 : 40;
    var MAX_DIST = isHome ? 130 : 100;
    var COLOR = '100, 255, 218';

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.7
      };
    }

    function init() {
      resize();
      particles = [];
      for (var i = 0; i < COUNT; i++) particles.push(mkParticle());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + COLOR + ', 0.65)';
        ctx.fill();

        // connections to other particles
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x;
          var dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            var alpha = (1 - dist / MAX_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(' + COLOR + ', ' + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // connection to mouse (home page only)
        if (isHome && mouse.x !== null) {
          var mdx = p.x - mouse.x;
          var mdy = p.y - mouse.y;
          var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            var malpha = (1 - mdist / 160) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(' + COLOR + ', ' + malpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', function () {
      init();
    });

    if (isHome) {
      document.addEventListener('mousemove', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
      document.addEventListener('mouseleave', function () {
        mouse.x = null;
        mouse.y = null;
      });
    }
  }

  /* ----------------------------------------------------------
     NAVBAR — scroll + mobile toggle
     ---------------------------------------------------------- */
  var nav = document.getElementById('site-nav');
  var toggle = document.getElementById('nav-toggle');
  var navList = document.getElementById('nav-list');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var open = navList.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    // close menu when a link is clicked
    navList.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navList.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  /* ----------------------------------------------------------
     SCROLL REVEAL
     ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // fallback: show everything
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();

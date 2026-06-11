/* ============================================================
   EMBER & STONE THEME — sangeetsatpathy.github.io
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     EMBER PARTICLE SYSTEM
     ---------------------------------------------------------- */
  var canvas = document.getElementById('particle-canvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var isHome = document.body.classList.contains('home');
    var W, H;
    var embers = [];
    var COUNT = isHome ? 65 : 28;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function mkEmber() {
      var bright = Math.random() * 0.65 + 0.35;
      return {
        x:          Math.random() * W,
        y:          H + Math.random() * 60,
        vy:         -(Math.random() * 0.7 + 0.25),   // upward
        vx:         (Math.random() - 0.5) * 0.18,    // slight horizontal
        r:          Math.random() * 1.4 + 0.5,
        life:       0,
        maxLife:    Math.floor(Math.random() * 220 + 120),
        sway:       Math.random() * Math.PI * 2,
        swaySpeed:  Math.random() * 0.018 + 0.005,
        swayAmp:    Math.random() * 0.5 + 0.15,
        bright:     bright,
        // Hotter embers → more yellow-orange; cooler → deep red-orange
        r255:       Math.floor(200 + 55 * bright),
        g255:       Math.floor(60  + 80 * bright),
        b255:       Math.floor(10  + 10 * bright)
      };
    }

    function init() {
      resize();
      embers = [];
      for (var i = 0; i < COUNT; i++) {
        var e = mkEmber();
        // stagger initial positions so they don't all start at bottom
        e.y = Math.random() * H;
        e.life = Math.floor(Math.random() * e.maxLife);
        embers.push(e);
      }
    }

    function resetEmber(e) {
      var bright = Math.random() * 0.65 + 0.35;
      e.x        = Math.random() * W;
      e.y        = H + Math.random() * 30;
      e.vy       = -(Math.random() * 0.7 + 0.25);
      e.vx       = (Math.random() - 0.5) * 0.18;
      e.r        = Math.random() * 1.4 + 0.5;
      e.life     = 0;
      e.maxLife  = Math.floor(Math.random() * 220 + 120);
      e.sway     = Math.random() * Math.PI * 2;
      e.swaySpeed= Math.random() * 0.018 + 0.005;
      e.swayAmp  = Math.random() * 0.5 + 0.15;
      e.bright   = bright;
      e.r255     = Math.floor(200 + 55 * bright);
      e.g255     = Math.floor(60  + 80 * bright);
      e.b255     = Math.floor(10  + 10 * bright);
    }

    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < embers.length; i++) {
        var e = embers[i];

        // Advance
        e.life++;
        e.sway += e.swaySpeed;
        e.x    += e.vx + Math.sin(e.sway) * e.swayAmp;
        e.y    += e.vy;

        // Recycle
        if (e.life >= e.maxLife || e.y < -20) {
          resetEmber(e);
          continue;
        }

        // Fade envelope: in 0–15%, full 15–80%, out 80–100%
        var t = e.life / e.maxLife;
        var alpha;
        if (t < 0.15) {
          alpha = t / 0.15;
        } else if (t > 0.80) {
          alpha = (1 - t) / 0.20;
        } else {
          alpha = 1;
        }
        alpha *= e.bright;

        var r = e.r255, g = e.g255, b = e.b255;

        // Core dot
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
        ctx.fill();

        // Soft outer glow (only for brighter embers)
        if (e.bright > 0.55) {
          var glowAlpha = alpha * 0.12;
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + glowAlpha + ')';
          ctx.fill();
        }
      }
    }

    init();
    draw();

    window.addEventListener('resize', function () { init(); }, { passive: true });
  }

  /* ----------------------------------------------------------
     NAVBAR — scroll + mobile toggle
     ---------------------------------------------------------- */
  var nav    = document.getElementById('site-nav');
  var toggle = document.getElementById('nav-toggle');
  var list   = document.getElementById('nav-list');

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    list.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        list.classList.remove('open');
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
    }, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

})();

d = document;
n = b.addEventListener;
l = d.createElement;
h = b.appendChild;
f = 'monospace';


b.style.textAlign = 'center';
c.style.border = 'thin solid black';

s = l.call(d, 'h1');
s.style.fontFamily = f;
s.innerHTML = 'DIGI-SKETCH';
b.insertBefore(s, c);

s = l.call(d, 'div');
s.style.fontFamily = f;
s.innerHTML = 'Z=left X=right &gt;=up ?=down';
h.call(b, s);

m();

function m(w, kx, ky, v, px, py, s, bg, fg) {
  w = 600;
  c.width = c.height = w;
  c.focus();
  a.fillStyle = bg = '#969696';
  a.fillRect(0,0,w,w);
  v = 1;
  kx = 0;
  ky = 0;
  px = py = 300;

  s = l.call(d, 'button');
  s.innerHTML = 'Clear';
  s.onclick = function () { c.width = w; a.fillStyle = bg; a.fillRect(0,0,w,w); a.fillStyle = fg; };
  h.call(b, s);
  
  s = s.cloneNode();
  s.innerHTML = 'Save';
  s.onclick = function () { window.location = c.toDataURL(); };
  h.call(b, s);

  n.call(b, 'keydown', function (e, k) {
    k = e.keyCode;
    kx = k==90 || k==88 ? k : kx;
    ky = k==190 || k==191 ? k : ky;
  });
  n.call(b, 'keyup', function (e) {
    k = e.keyCode;
    kx = k==90 || k==88 ? -1 : kx;
    ky = k==190 || k==191 ? -1 : ky;
  });

  a.fillStyle = fg = '#1E1E1E';
  function update() {
    if (kx==90) px -= v;
    if (kx==88) px += v;
    if (ky==190) py -= v;
    if (ky==191) py += v;
    a.fillRect(px, py, 1, 1);
    requestAnimationFrame(update);
  }
  update();
}
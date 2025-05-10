var text = document.getElementById("element").innerText;
var typed = new Typed('#element', {
    strings: [`${text}`],
    typeSpeed: 50,
    stringsElement: '#test',
    backDelay: 700,
    shuffle: true,
    loop: true,
    // loopCount: Infinity,
    showCursor: false,
    // cursorChar: '|',
    // autoInsertCss: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,
  });
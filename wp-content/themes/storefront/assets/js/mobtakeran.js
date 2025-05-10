// console.log("a");

window.addEventListener("load", function () {
    var current_page_item = document.querySelector(".current_page_item");
    var link_in_curent = current_page_item.querySelector("a");
    var text_of_link = link_in_curent.innerText;
    var txt_node = document.createTextNode(text_of_link);
    var span = document.createElement("span");
    span.classList.add("rianbow");
    link_in_curent.innerHTML = "";
    span.append(txt_node);
    link_in_curent.append(span);
    var accounting = document.getElementById("accounting");
    var webDesigin = document.getElementById("webDesigin");
    var fluter = document.getElementById("fluter");
    var graphic = document.getElementById("graphic");
    var phani = document.getElementById("phani");

    if (accounting) {
        accountingText = accounting.innerText;
        webDesiginText = webDesigin.innerText;
        fluterText = fluter.innerText;
        graphicText = graphic.innerText;
        phaniText = phani.innerText;

        var typed = new Typed('#accounting', {
            strings: [`${accountingText}`],
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
        var typed = new Typed('#webDesigin', {
            strings: [`${webDesiginText}`],
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
        var typed = new Typed('#fluter', {
            strings: [`${fluterText}`],
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
        var typed = new Typed('#graphic', {
            strings: [`${graphicText}`],
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
        var typed = new Typed('#phani', {
            strings: [`${phaniText}`],
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
    }

    //mouse Effect
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].addEventListener('mouseenter', onMouseHover);
        $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
        TweenMax.to($bigBall, .4, {
            x: e.pageX - 15,
            y: e.pageY - 15
        });

        TweenMax.to($smallBall, .1, {
            x: e.pageX - 5,
            y: e.pageY - 7
        });

    }

    // Hover an element
    function onMouseHover() {
        TweenMax.to($bigBall, .3, {
            scale: 4
        });

    }
    function onMouseHoverOut() {
        TweenMax.to($bigBall, .3, {
            scale: 1
        });

    }
    /* HUMBURGER MENU */
    var menu = document.querySelector(".menu");
    var header = document.querySelector("header.main-header");
    if(header){
        menu.addEventListener("click",function(e){
            this.classList.toggle("active");
            header.classList.toggle("active")
        });
    }
    // $('.menu').click (function(){
    //     $(this).toggleClass('open');
    //   });
});
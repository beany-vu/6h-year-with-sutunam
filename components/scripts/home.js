
document.addEventListener("DOMContentLoaded", function() {


});
window.onload = function() {
    var lion = document.getElementsByClassName('lion');
    if (typeof lion != 'undefined') {
        var lion_qty_piece = lion.length,
            type = 8,
            type_instance = 1,
            i = 0;
        if (lion_qty_piece > 0) {
            for (i; i < lion_qty_piece; i++) {
                var pieces_class = 'recombine' + type_instance;
                lion[i].classList.add(pieces_class);
                type_instance == type ? type_instance = 1 : type_instance++;
            }
        }
        delete type;
        delete lion_qty_piece;
        delete type_instance;
    }
    delete lion;
    TweenLite.to(document.getElementById('container-lion'), 2, {opacity: 1, ease:  Sine.easeInOut});

    TweenLite.from(document.getElementsByClassName('recombine1'), 2.5, {x: '-1500', y: '-1500', scale: 2, ease:  Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine2'), 2.5, {x: '-400', y: '-1000', scale: 2, ease: Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine3'), 2.5, {x: '-1000', y: '200', scale: 2, ease:  Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine4'), 2.5, {x: '-1000', y: '-500', scale: 2, ease:  Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine5'), 2.5, {x: '800', y: '800', scale: 2, ease:  Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine6'), 2.5, {x: '-2000', y: '-400', scale: 2, ease:  Power3.easeOut})
    TweenLite.from(document.getElementsByClassName('recombine7'), 2.5, {x: '-200', y: '400', scale: 2, ease: Power3.easeOut});
    TweenLite.from(document.getElementsByClassName('recombine8'), 2.5, {x: '-400', y: '-400', scale: 2, ease: Power3.easeOut});

    // add animation for the triangle, make them fade in up with a little rotation
    TweenLite.to(document.getElementById('container-triangle'), 2.5, {opacity: 1}).delay(1.5);
    TweenLite.from(document.getElementById('triangle1'), 2.5, {y: '100%', rotation: 45, ease: Power4.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle2'), 2.5, {y: '100%', rotation: 45, ease: Power4.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle3'), 2.5, {y: '100%', rotation: -45, ease: Power4.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle4'), 2.5, {y: '200%', ease: Power4.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle5'), 2.5, {y: '200%', ease: Power4.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle6'), 2.5, {y: '200%', rotation: -45, ease: Power4.easeOut}).delay(1.5);

    // the overlay above of lion
    TweenLite.to(document.getElementById('overlay-lion'), 1, {opacity: 1, ease: Power4.easeOut}).delay(2.5);
}
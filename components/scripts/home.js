

window.onload = function() {
    document.getElementById('container-lion').style.opacity = 1;
    // var lion = document.getElementById('lion');
    // if(typeof lion != 'undefined') {
    //     var pieces = lion.children;
    //     var lion_qty_piece = pieces.length;
    //     var type = 8;
    //     var type_instance = 1;
    //     if(lion_qty_piece > 0) {
    //         for( var i = 0; i < lion_qty_piece; i++) {
    //             var pieces_class = 'recombine' + type_instance;
    //             pieces[i].classList.add('recombine', pieces_class);
    //             type_instance == type ? type_instance = 1 : type_instance++;
    //         }
    //     }
    // }
    var lion = document.getElementsByClassName('lion');
    if(typeof lion != 'undefined') {
        var lion_qty_piece = lion.length;
        var type = 8;
        var type_instance = 1;
        if (lion_qty_piece > 0) {
            for (var i = 0; i < lion_qty_piece; i++) {
                var pieces_class = 'recombine' + type_instance;
                lion[i].classList.add('recombine', pieces_class);
                type_instance == type ? type_instance = 1 : type_instance++;
            }
        }
    }
    // TweenLite.from($('.recombine1'), 1.5, {x: '-1500', y: '-1500', rotation: -45, scale: 2, ease:  Expo.easeInOut}).delay(0.5);
    // TweenLite.from($('.recombine2'), 1.5, {x: '-400', y: '-1000', rotation: 15, scale: 2, ease: Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine3'), 1.5, {x: '-1000', y: '200', rotation: 10, scale: 2, ease:  Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine4'), 1.5, {x: '-1000', y: '-500', rotation: 10, scale: 0.6, ease:  Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine5'), 1.5, {x: '200', y: '200', rotation: 10, scale: 2, ease:  Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine6'), 1.5, {x: '-2000', y: '-400', scale: 2, ease:  Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine7'), 1.5, {x: '-200', y: '400', rotation: 40, scale: 2, ease: Sine.easeOut}).delay(0.5);
    // TweenLite.from($('.recombine8'), 1.5, {x: '-400', y: '-400', rotation: 20, scale: 2, ease: Sine.easeOut}).delay(0.5);
    // TweenLite.from(document.getElementById('triangle1'), 2.5, {y: '100%', opacity: 0, rotation: 45, ease: Power3.easeOut}).delay(1.5);
    // TweenLite.from(document.getElementById('triangle2'), 2.5, {y: '100%', opacity: 0, rotation: 45, ease: Power3.easeOut}).delay(1.5);
    // TweenLite.from(document.getElementById('triangle3'), 2.5, {y: '100%', opacity: 0, rotation: -45, ease: Power3.easeOut}).delay(1.5);
    // TweenLite.from(document.getElementById('triangle4'), 2.5, {y: '200%', opacity: 0, ease: Power3.easeOut}).delay(1.5);
    // TweenLite.from(document.getElementById('triangle5'), 2.5, {y: '200%', opacity: 0, ease: Power3.easeOut}).delay(1.5);
    // TweenLite.from(document.getElementById('triangle6'), 2.5, {y: '200%', opacity: 0, rotation: -45, ease: Power3.easeOut}).delay(1.5);
}
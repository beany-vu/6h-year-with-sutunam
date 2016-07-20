

//------------------------------------------


//------------------------------------------


window.onload = function() {;
    TweenLite.from(document.getElementById('container-lion'), 1, {opacity: 0, ease:  Sine.easeInOut}).delay(0.5);

    var lion = document.getElementsByClassName('lion');
    if(typeof lion != 'undefined') {
        var lion_qty_piece = lion.length;
        var type = 8;
        var type_instance = 1;
        if (lion_qty_piece > 0) {
            for (var i = 0; i < lion_qty_piece; i++) {
                var pieces_class = 'recombine' + type_instance;
                lion[i].classList.add('recombine', pieces_class);

                // Recombine effect for the lion.
                // There are 8 groups of effect type that are applied form 97 pieces.
                // Each effect starts from different location and then move into the center to form the shape of lion
                switch (type_instance) {
                    case 1:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-200', y: '-200', rotation: -45, scale: 2, ease:  Sine.easeInOut}).delay(0.5);
                        break;
                    case 2:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-400', y: '-1000', rotation: 15, scale: 2, ease: Sine.easeOut}).delay(0.5);
                        break;
                    case 3:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-1000', y: '200', rotation: 10, scale: 2, ease:  Sine.easeOut}).delay(0.5);
                        break;
                    case 4:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-1000', y: '-500', rotation: 10, scale: 0.6, ease:  Sine.easeOut}).delay(0.5);
                        break;
                    case 5:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '200', y: '200', rotation: 10, scale: 2, ease:  Sine.easeOut}).delay(0.5);
                        break;
                    case 6:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-2000', y: '-400', scale: 2, ease:  Sine.easeOut}).delay(0.5);
                        break;
                    case 7:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-200', y: '400', rotation: 40, scale: 2, ease: Sine.easeOut}).delay(0.5);
                        break;
                    case 8:
                        console.log(i);
                        TweenLite.from(lion[i], 1.5, {x: '-400', y: '-400', rotation: 20, scale: 2, ease: Sine.easeOut}).delay(0.5);
                        break;
                }
                type_instance == type ? type_instance = 1 : type_instance++;
            }
        }
    }

    // add animtion for the triangle, make them fade in up with a little rotation
    TweenLite.from(document.getElementById('triangle1'), 2.5, {y: '100%', opacity: 0, rotation: 45, ease: Power3.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle2'), 2.5, {y: '100%', opacity: 0, rotation: 45, ease: Power3.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle3'), 2.5, {y: '100%', opacity: 0, rotation: -45, ease: Power3.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle4'), 2.5, {y: '200%', opacity: 0, ease: Power3.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle5'), 2.5, {y: '200%', opacity: 0, ease: Power3.easeOut}).delay(1.5);
    TweenLite.from(document.getElementById('triangle6'), 2.5, {y: '200%', opacity: 0, rotation: -45, ease: Power3.easeOut}).delay(1.5);
}
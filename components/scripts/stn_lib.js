StnNavigation = {
    /**
     * - Detect the direction that we next to control on a timeline of animation (go forwardly or backwardly)
     * - This function can detect the swipe/mousewheel direction and arrow keys
     * to control a timeline move to corespoing point
     * - Logic explaination (Assume we are on the current point)
     *      + If (swipe up || mouse scroll up || arrow up key) move timeline to a previous point
     *      + If (swipe down || mouse scroll down || arrow down key) move timeline to a next point 
     *      + Exceptional case (didn't match anything) return -1
     * 
     * @param {object} timeline - an object of Tween Timeline
     */
    detectNextPrev : function(timeline, start) {
        console.log(start);
        // mouse event
        $(window).bind('mousewheel DOMMouseScroll', function(event){
            // scroll up
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // if(StnNavigation.canReverse(timeline.currentLabel()) == false) return false;
                // console.log(timeline.currentLabel());
                timeline.reverse();
                return;
            }
            // scroll down
            else {
                // console.log(timeline.currentLabel());
                timeline.play();
                return;
            }
        });

        // key down event
        $(window).keydown(function(e) {
            switch(e.which) {
                // arrow up key
                case 38:
                    // console.log(StnNavigation.canReverse(timeline.currentLabel()))
                    // if(StnNavigation.canReverse(timeline.currentLabel()) == false) return false;
                    timeline.reverse();
                    return;
                // arrow down key
                case 40:
                    timeline.play();
                    return;
                // other keys
                default:
                    return -1;
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        });
    },
    canReverse: function(label) {
        // return label != 'fade-up-cresus';
        return true;
    }
}
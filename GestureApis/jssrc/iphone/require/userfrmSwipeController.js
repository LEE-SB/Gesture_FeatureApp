define({
    //Type your controller code here 
    myswipe: function(commonWidget, gestureInfo) {
        var direction = "";
        var swipeDirection = "" + gestureInfo.swipeDirection; //Read swipe direction
        if (swipeDirection == "1") {
            direction = "LEFT";
            this.view.imgGes.src = "arrowsleft.png";
        } else if (swipeDirection == "2") {
            direction = "RIGHT";
            this.view.imgGes.src = "arrowsright.png";
        } else if (swipeDirection == "3") {
            direction = "TOP";
            this.view.imgGes.src = "arrowstop.png";
        } else {
            direction = "BOTTOM";
            this.view.imgGes.src = "arrowsbottom.png";
        }
        this.view.lblGesture.text = "A swipe gesture was performed in the " + direction + " direction.";
    },
    addSwipeGesture: function() {
        var swipeConfig = {
            fingers: 1,
            swipedistance: 50,
            swipevelocity: 75
        };
        this.view.FlexContainer0be3f8d59c9514a.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, swipeConfig, this.myswipe);
    }
});
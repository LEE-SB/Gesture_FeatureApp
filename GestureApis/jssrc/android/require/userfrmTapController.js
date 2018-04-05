define({
    //Type your controller code here 
    onTapClosure: function(widgetRef, gestureInfo) {
        var tapParams = gestureInfo.gesturesetUpParams.taps;
        if (tapParams == 1) {
            this.view.lblTap.text = "Single tap gesture was performed";
        } else if (tapParams == 2) {
            this.view.lblDbl.text = "Double tap gesture was performed";
        }
    },
    addSingleTapGesture: function() {
        var tapConfig = {
            fingers: 1,
            taps: 1
        };
        this.view.flxSingle.addGestureRecognizer(constants.GESTURE_TYPE_TAP, tapConfig, this.onTapClosure);
    },
    addDoubleTapGesture: function() {
        var tapConfig = {
            fingers: 1,
            taps: 2
        };
        this.view.flxDouble.addGestureRecognizer(constants.GESTURE_TYPE_TAP, tapConfig, this.onTapClosure);
    }
});
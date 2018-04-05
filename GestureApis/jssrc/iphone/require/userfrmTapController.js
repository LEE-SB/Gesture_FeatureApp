define({
    //Type your controller code here 
    mytap: function(commonWidget, gestureInfo) {
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
        this.view.FlexContainer0i09e4d1db62841.addGestureRecognizer(constants.GESTURE_TYPE_TAP, tapConfig, this.mytap);
    },
    addDoubleTapGesture: function() {
        var tapConfig = {
            fingers: 1,
            taps: 2
        };
        this.view.FlexContainer0ec2f3999f8064b.addGestureRecognizer(constants.GESTURE_TYPE_TAP, tapConfig, this.mytap);
    }
});
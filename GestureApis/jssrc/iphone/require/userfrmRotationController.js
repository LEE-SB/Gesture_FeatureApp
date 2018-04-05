define({
    //Type your controller code here 
    myrotate: function(commonWidget, gestureInfo) {
        // imgleft=gestureInfo.widgetWidth+gestureInfo.translationX ;
        // alert("pan");
        //this.view.imgpan.left=imgleft+"px";
        var gState = gestureInfo.gestureState;
        if (kony.os.toNumber(gState) == 2) {
            this.rotatebyAngle(360 - gestureInfo.rotation);
        }
    },
    addRotateGesture: function() {
        var rotateConfig = {
            fingers: 2,
            continuousEvents: true
        };
        this.view.FlexContainer0hc4bbcf19b064f.addGestureRecognizer(constants.GESTURE_TYPE_ROTATION, rotateConfig, this.myrotate);
    },
    rotatebyAngle: function(angle) {
        var trasnfobj = kony.ui.makeAffineTransform();
        trasnfobj.rotate(angle);
        var animobj = kony.ui.createAnimation({
            "100": {
                "transform": trasnfobj
            }
        });
        this.view.imgrotate.animate(animobj, {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0
        }, {
            "animationEnd": function() {}
        })
    }
});
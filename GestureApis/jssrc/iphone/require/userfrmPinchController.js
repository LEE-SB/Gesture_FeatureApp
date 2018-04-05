define({
    //Type your controller code here 
    mypinch: function(commonWidget, gestureInfo) {
        var y = kony.type(gestureInfo); //expected value of y = table
        var z = kony.type(gestureInfo.gesturesetUpParams); //expected values of z = table
        //var b = gestureInfo.gesturesetUpParams;
        var c = gestureInfo.gestureState;
        var d = gestureInfo.scale;
        // var e = gestureInfo.swipeDirection ;
        //kony.print("*******************************************");
        //kony.print("a------"+a+"c----"+c+"--------"+d+"--------");
        if (kony.os.toNumber(c) == 1) {
            g_scaleStart = kony.os.toNumber(d);
        }
        if (kony.os.toNumber(c) == 2) {
            g_scaleEnd = kony.os.toNumber(d);
            kony.print(g_scaleEnd + "====" + g_scaleStart + (g_scaleEnd > g_scaleStart));
            if (g_scaleEnd > g_scaleStart) {
                g_zoomIn = g_zoomIn + 5;
                this.view.Image0b8a22e54f53b46.width = g_zoomIn + "%";
                this.view.Image0b8a22e54f53b46.height = g_zoomIn + "%";
                //this.view.forceLayout();
                //this.view.FlexScrollContainer0d126bcb63b554d.forceLayout();
                this.view.Image0b8a22e54f53b46.animate(kony.ui.createAnimation({
                    "100": {
                        "width": g_zoomIn + "%",
                        "height": g_zoomIn + "%",
                        // "rectified": true
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0
                }, {
                    "animationEnd": function() {}
                });
            } else {
                g_zoomOut = g_zoomIn;
                if (g_zoomOut > 50) {
                    g_zoomOut = g_zoomOut - 5;
                    g_zoomIn = g_zoomOut;
                    this.view.Image0b8a22e54f53b46.width = g_zoomOut + "%";
                    this.view.Image0b8a22e54f53b46.height = g_zoomOut + "%";
                    // this.view.FlexScrollContainer0d126bcb63b554d.forceLayout();
                    this.view.Image0b8a22e54f53b46.animate(kony.ui.createAnimation({
                        "100": {
                            "width": g_zoomOut + "%",
                            "height": g_zoomOut + "%",
                            //"rectified": true
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0
                    }, {
                        "animationEnd": function() {}
                    });
                }
            }
        }
        // this.view.lblGesture.text=JSON.stringify(gestureInfo);
    },
    addPinchGesture: function() {
        var pinchConfig = {
            fingers: 2,
            continuousEvents: true
        };
        this.view.FlexScrollContainer0d126bcb63b554d.addGestureRecognizer(constants.GESTURE_TYPE_PINCH, pinchConfig, this.mypinch);
    }
});
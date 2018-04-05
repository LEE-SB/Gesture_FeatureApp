define({
    //Type your controller code here 
    mylongpress: function(commonWidget, gestureInfo) {
        this.view.lblGesture.text = "A longpress gesture was performed for " + gestureInfo.gesturesetUpParams.pressDuration + " Seconds";
    },
    addLongPressGesture: function() {
        var getTime = parseInt(this.view.lstbx.selectedKey);
        var longConfig = {
            pressDuration: getTime
        };
        gesturehandle = this.view.FlexContainer0e9c0b42fdc6949.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS, longConfig, this.mylongpress);
    }
});
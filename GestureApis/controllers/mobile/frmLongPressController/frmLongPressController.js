define({ 

 //Type your controller code here 
  onLongpressClosure:function(widgetRef,gestureInfo){
    
     this.view.lblGesture.text= "A longpress gesture was performed for "+ gestureInfo.gesturesetUpParams.pressDuration+" Seconds";
    
  },
  addLongPressGesture:function(){
    var getTime=parseInt(this.view.lstbx.selectedKey);
    
    var longConfig={pressDuration:getTime};
     gesturehandle=this.view.flxLongpress.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS,longConfig,this.onLongpressClosure);
        
  }

 });
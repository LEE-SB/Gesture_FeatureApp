define({ 

 //Type your controller code here 
	onPanclosure:function(widgetRef,gestureInfo){
      
      this.view.lbltx.text=gestureInfo.translationX;
      this.view.lblty.text=gestureInfo.translationY;
      this.view.lblvx.text=gestureInfo.velocityX;
      this.view.lblvy.text=gestureInfo.velocityY;
      this.view.lblgx.text=gestureInfo.gestureX;
      this.view.lblgy.text=gestureInfo.gestureY;    
          
  },
  addPanGesture:function(){
    var panConfig={fingers :1,continuousEvents :false};
     this.view.flxpan.addGestureRecognizer(constants.GESTURE_TYPE_PAN,panConfig,this.onPanclosure);
        
  }
 });
define({ 
  	kfdata : [
                              {
                                "APIName" : "Gesture API",
                                "Description" : "A gesture is an action associated with movement of a mouse or a touch screen action. The developers determine how a gesture should be interpreted and the function that must be executed when a gesture is recognized.",
                                "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;"><b>addGestureRecognizer</b><label><br><label style=color:#f2f1f1><br>This API allows you to set a gesture recognizer for a specified gesture for a specified widget.</label><br><br>Signature:<br><br><label style=color:#ffffff>addGestureRecognizer(gestureType, gestureConfigParams, onGestureClosure)<br></label><br><br><label style="font-weight:bold;color:#f2f1f1;"><b>removeGestureRecognizer</b><label><br><label style=color:#f2f1f1><br>This API allows you to remove the specified gesture recognizer for the specified widget.</label><br><br>Signature:<br><br><label style=color:#ffffff>removeGestureRecognizer(gestureHandle)<br></label>',
                                "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                              }
                            ],
	featureSelected:function(){
      	var formToBeNavigated = null;
      	  
     	switch(this.view.segFeatureOptions.selectedRowIndex[1]){
          case 0:	formToBeNavigated = "frmTap";
            		 data = [
      								{
                                  "APIName" : "Tap Gesture",
                                  "Description" : "A Tap gesture is a click or touch performed on the view.<br><br>Parameter has the following key-value pairs:<br><br> fingers [Number] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.<br><br>taps [Number] - specifies the maximum number of taps that must be respected for a gesture. Possible values are: 1 or 2. Default value is 1.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Tap Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onTapClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>onTapClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addSingleTapGesture<br>@description function to invoke single tap gesture<br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>addSingleTapGesture:function(){<br>var tapConfig={fingers:1,taps:1};<br>this.view.flxSingle.addGestureRecognizer(constants.GESTURE_TYPE_TAP,tapConfig,this.onTapClosure);<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addDoubleTapGesture <br>@description-function to invoke Double tap gesture <br>@defined in the frmTapController<br>*/</label><br><label style=color:#ffffff>  addDoubleTapGesture:function(){<br>var tapConfig={fingers:1,taps:2};<br>this.view.flxDouble.addGestureRecognizer(constants.GESTURE_TYPE_TAP,tapConfig,this.onTapClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							]; 
            		break;
          case 1:	formToBeNavigated = "frmSwipe";
            		 data = [
      								{
                                  "APIName" : "Swipe Gesture",
                                  "Description" : "A Swipe gesture is dragging a finger towards a direction (right, left, top and down).<br><br>Parameter has the following key-value pairs:<br><br> fingers [Number] - specifies the maximum number of fingers that must be respected for a gesture. Possible values are: 1. Default value is 1.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Swipe Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onSwipeClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmSwipeController<br>*/</label><br><label style=color:#ffffff>onSwipeClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addSwipeGesture<br>@description function to invoke Swipe gesture<br>@defined in the frmSwipeController<br>*/</label><br><label style=color:#ffffff>addSwipeGesture:function(){<br>var swipeConfig={fingers:1};<br>this.view.flxSwipe.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE,swipeConfig,this.onSwipeClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							]; 
            		break;
          case 2:	formToBeNavigated = "frmLongPress";
            		data = [
      								{
                                  "APIName" : "LongPress Gesture",
                                  "Description" : "A LongPress gesture is pressing the screen for long enough, and the finger should not move a lot around the pressed point otherwise the gesture fails.<br><br>Parameter has the following key-value pairs:<br><br> pressDuration [Number] - specifies the minimum time interval (in seconds) after which the gesture is recognized as a LONGPRESS. This is not applicable to Windows.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*LongPress Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onLongpressClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmLongPressController<br>*/</label><br><label style=color:#ffffff>onLongpressClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addLongPressGesture<br>@description function to invoke LongPress gesture<br>@defined in the frmLongPressController<br>*/</label><br><label style=color:#ffffff>addLongPressGesture:function(){<br>var getTime=parseInt(this.view.lstbx.selectedKey);<br>var longConfig={pressDuration:getTime};<br>gesturehandle=this.view.flxLongpress.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS,longConfig,this.onLongpressClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							];
            		break;
          case 3:	formToBeNavigated = "frmPan";
            		data = [
      								{
                                  "APIName" : "Pan Gesture",
                                  "Description" : "A Pan gesture is actually a drag gesture. It’s used when it’s needed to drag views from one point to another.<br><br>Parameter has the following key-value pairs:<br><br> fingers [number] specifies the minimum number of fingers needed to recognize this gesture. Default value is 1.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Pan Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onPanclosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmPanController<br>*/</label><br><label style=color:#ffffff>onPanclosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addPanGesture<br>@description function to invoke Pan gesture<br>@defined in the frmPanController<br>*/</label><br><label style=color:#ffffff>addPanGesture:function(){<br>var panConfig={fingers :1,continuousEvents :false};<br>this.view.flxpan.addGestureRecognizer(constants.GESTURE_TYPE_PAN,panConfig,this.onPanclosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							];
            		break;
          case 4:	formToBeNavigated = "frmPinch";
            		data = [
      								{
                                  "APIName" : "Pinch Gesture",
                                  "Description" : "When you view photos on the Photos app and you use your two fingers to zoom in or out to a photo, then you perform a pinch gesture.<br><br>Parameter has the following key-value pairs:<br><br> Pinch gesture invloves two fingers.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Pinch Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onPinchClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmPinchController<br>*/</label><br><label style=color:#ffffff>onPinchClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addPinchGesture<br>@description function to invoke Pinch gesture<br>@defined in the frmPinchController<br>*/</label><br><label style=color:#ffffff>addPinchGesture:function(){<br>var pinchConfig={fingers :2,continuousEvents :true};<br>this.view.flxPinch.addGestureRecognizer(constants.GESTURE_TYPE_PINCH,pinchConfig,this.onPinchClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							];
            		break;
          case 5:	formToBeNavigated = "frmRotation";
            		data = [
      								{
                                  "APIName" : "Rotation Gesture",
                                  "Description" : "Rotation gesture is used to rotate a view using two fingers.<br><br>Parameter has the following key-value pairs:<br><br> Rotation gesture involves only two fingers.<br><br>continuousEvents [Boolean] indicates if callback should be called continuously for every change beginning from the time the gesture is recognized to the time it ends.",
                                  "CodeSnippet" : '<label style="font-weight:bold;color:#f2f1f1;">/*Rotation Gesture*/<label><br><label style=color:#f2f1f1>/*<br>@function onRotateClosure<br>@description Specifies the function that needs to be executed when a gesture is recognized<br>@param widgetRef- specifies the handle to the widget on which the gesture was recognized<br>@param gestureInfo- Table with information about the gesture<br>@defined in the frmRotationController<br>*/</label><br><label style=color:#ffffff>onRotateClosure:function(widgetRef,gestureInfo){<br>//do something<br>}<br></label><label style=color:#f2f1f1>/*<br>@function addRotateGesture<br>@description function to invoke Rotation gesture<br>@defined in the frmRotationController<br>*/</label><br><label style=color:#ffffff>addRotateGesture:function(){<br>var rotateConfig={fingers :2,continuousEvents :true};<br>this.view.flxRotation.addGestureRecognizer(constants.GESTURE_TYPE_ROTATION,rotateConfig,this.onRotateClosure);<br>}<br></label>',
                                  "DocLink" : 'Please find below the link for the documentation site:<br><a href = "http://docsdirect.kony.com/6_0/konyonpremises/Subsystems/API_Reference_Guide/content/gestures.htm#onGestureClosure"> Gesture API </a><br>'
                                }
    							];
            		break;
          default:
            		
            		kony.print("You Shld not be here!!!");
            		return;   
        }
      	var ntf = new kony.mvc.Navigation(formToBeNavigated);
    	ntf.navigate();
    }
 });
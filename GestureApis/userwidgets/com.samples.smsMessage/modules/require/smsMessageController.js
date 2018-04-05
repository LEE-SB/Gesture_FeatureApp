define(function() {

	return {
      	__Initial_Data:null,
		constructor: function(baseConfig, layoutConfig, pspConfig) {
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
		},
      	smsMsgPostShow:function(){
          	if(this.__Initial_Data===null){
              this.__Initial_Data = this.view.segMessagesList.data;
            }else{
              this.view.segMessagesList.setData(this.__Initial_Data);
            }
        },
      	reFreshWithRowAnim:function(){
          	var data = this.view.segMessagesList.data;
			var addRowAnim=this.getAddRowAnim();
          	this.view.segMessagesList.addAll(data,addRowAnim);
          	this.onRowDisplayFunction();
        },
      	getAddRowAnim:function(){
              var transformProp1 = kony.ui.makeAffineTransform();
             transformProp1.scale(0.0,0.0); 
             var transformProp2 = kony.ui.makeAffineTransform();
             transformProp2.scale(0.5,0.5);
             var transformProp3 = kony.ui.makeAffineTransform();
             transformProp3.scale(1,1);
             var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                                       // 50 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp2},
                         100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
                        } ;
              var animObj=kony.ui.createAnimation(animDefinitionOne);
              var animConf={delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.7};
              var addRowAnimtion = { definition : animObj, config : animConf, callbacks : null };
             return addRowAnimtion;
            },
      		onRowDisplayFunction:function (){
                var animConfig = {"duration":0.3,"iterationCount":1,"delay":0,"fillMode":kony.anim.FORWARDS	};
                  //scale
                  var transformProp1 = kony.ui.makeAffineTransform();
                  transformProp1.scale(0.0,0.0); 
                  var transformProp3 = kony.ui.makeAffineTransform();
                  transformProp3.scale(1,1);
                  var animDefinitionOne = {0  : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp1},
                                          100 : {"anchorPoint":{"x":0.5,"y":0.5},"transform":transformProp3}
                                          } ;
                  var animDefinition = kony.ui.createAnimation(animDefinitionOne);
                  var finalAnimation = {definition: animDefinition, config: animConfig};
              		
                  this.view.segMessagesList.setAnimations({visible: finalAnimation});
            },
      		swipeDetected:function(widgetInfo,swipeInfo){
              try{
                
                	var needToAnimate = false;
                	var curRowData = this.view.segMessagesList.data[swipeInfo.row];
                	var vw =  curRowData.curnt_view;
                	var sd = swipeInfo.swipeDirection;
                //	alert("vw : "+vw);
                	var fstStepConfig={
                      "left": "-20%",
                      "stepConfig": {
                        "timingFunction": kony.anim.EASE
                      }
                    };
                
                	var lstStepConfig = {
                      "left": "-20%",
                      "stepConfig": {
                        "timingFunction": kony.anim.EASE
                      }
                    };
                	
                	if(sd==1 && vw==1){
                      	//alert("reveal del btn");  
                        fstStepConfig.left = "-20%";
                      	lstStepConfig.left = "-40%";
                      	curRowData.curnt_view = 2;
                      	curRowData.flxTempRowWrapper = {
                     			left : "-40%"
                   			};
                      	needToAnimate = true;
                    }else if(sd==1 && vw==2){
                      	//alert("donothing");
                      	needToAnimate = false;
                      	return;
                    }else if(sd==1 && vw==3){
                      	//alert("to default view");
                      	fstStepConfig.left = "0%";
                      	lstStepConfig.left = "-20%";
                        curRowData.curnt_view = 1;
                      	curRowData.flxTempRowWrapper = {
                     			left : "-20%"
                   			};
                      	needToAnimate = true;
                    }else if(sd==2 && vw==1){
                      	//alert("reveal mark read");
                        fstStepConfig.left = "-20%";
                      	lstStepConfig.left = "0%";
                      	curRowData.curnt_view = 3;
                      	curRowData.flxTempRowWrapper = {
                     			left : "0%"
                   			};
                      	needToAnimate = true;
					}else if(sd==2 && vw==2){
                      	//alert("to defautl view");
                      	fstStepConfig.left = "-40%";
                      	lstStepConfig.left = "-20%";
                      	curRowData.flxTempRowWrapper = {
                     			left : "-20%"
                   			};
                        curRowData.curnt_view = 1;
                      	needToAnimate = true;
                    }else if(sd==2 && vw==3){
                      	//alert("donothing");
                      	needToAnimate = false;
                      	return;
                    }
                if(needToAnimate){
                  this.view.segMessagesList.animateRows({
                  											rows:[{
                                                                  	sectionIndex : swipeInfo.section,
                                                                  	rowIndex : swipeInfo.row
                                                                }],
                      										widgets:["flxTempRowWrapper"],
															animation:{
                                                                  	definition:kony.ui.createAnimation({
                                                                      	  "0" : fstStepConfig,
                                                                          "100": lstStepConfig
                                                                      }), 
                                                                  		config:{
                                                                                "delay": 0,
                                                                                "iterationCount": 1,
                                                                                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                                                                                "duration": 0.5,
                                                                                "direction": kony.anim.DIRECTION_ALTERNATE
                                                                            },
                                                              				callbacks:{
                                                              					animationEnd : function(){
                  																	this.view.segMessagesList.setDataAt(curRowData,swipeInfo.row);   
                                                                                }.bind(this)
                                                            				}
                                                                	}
                											});
                }
              }catch(exc){
                alert("exception in swipeHandler!!!!");
              }
            },
      		deleteRowDetected:function(widgetInfo,rowData){              			
                     	this.view.segMessagesList.removeAt(rowData.row,rowData.section);
            }
	};
});
define("frmPinch", function() {
    return function(controller) {
        function addWidgetsfrmPinch() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexScrollContainer0d126bcb63b554d = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "305dp",
                "id": "FlexScrollContainer0d126bcb63b554d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexScrollContainer0d126bcb63b554d.setDefaultUnit(kony.flex.DP);
            var Image0b8a22e54f53b46 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50%",
                "id": "Image0b8a22e54f53b46",
                "isVisible": true,
                "skin": "slImage",
                "src": "kony_mp_carousel1_slides3.png",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexScrollContainer0d126bcb63b554d.add(Image0b8a22e54f53b46);
            var lblGesture = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblGesture",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Verify Pinch gesture",
                "textStyle": {},
                "top": "331dp",
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_cbe07d26d90c4c5bbc576cbf03740452,
                "right": "4%",
                "skin": "btnimg",
                "width": "70dp",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            this.add(FlexScrollContainer0d126bcb63b554d, lblGesture, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmPinch,
            "enabledForIdleTimeout": false,
            "id": "frmPinch",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c649159c9f3943918b897ce67b8fee8c,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarConfig": {
                "renderTitleText": true,
                "prevFormTitle": false,
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back",
                "titleBarRightSideView": "button",
                "labelRightSideView": "Edit"
            },
            "titleBarSkin": "slTitleBar"
        }]
    }
});
define("frmSwipe", function() {
    return function(controller) {
        function addWidgetsfrmSwipe() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0be3f8d59c9514a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "320dp",
                "id": "FlexContainer0be3f8d59c9514a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0d4de0faca8fa46",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0be3f8d59c9514a.setDefaultUnit(kony.flex.DP);
            var lblGesture = new kony.ui.Label({
                "id": "lblGesture",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Verify Swipe gesture in four directions",
                "textStyle": {},
                "top": "0dp",
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
            var imgGes = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgGes",
                "isVisible": true,
                "left": "112dp",
                "skin": "slImage",
                "src": "arrow4.png",
                "top": "93dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0be3f8d59c9514a.add(lblGesture, imgGes);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_jae27abf8c294e8791a446d62e9de82f,
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
            this.add(FlexContainer0be3f8d59c9514a, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmSwipe,
            "enabledForIdleTimeout": false,
            "id": "frmSwipe",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b3014e9b68f8468f8996b45912115a63,
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
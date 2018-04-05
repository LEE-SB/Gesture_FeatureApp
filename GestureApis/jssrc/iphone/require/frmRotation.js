define("frmRotation", function() {
    return function(controller) {
        function addWidgetsfrmRotation() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0hc4bbcf19b064f = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "FlexContainer0hc4bbcf19b064f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0fb70cd26767a49",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0hc4bbcf19b064f.setDefaultUnit(kony.flex.DP);
            var imgrotate = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgrotate",
                "isVisible": true,
                "left": "92dp",
                "skin": "slImage",
                "src": "rotate.png",
                "top": "69dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0hc4bbcf19b064f.add(imgrotate);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_d214db0a9e0b413380591c1435c18e25,
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
            this.add(FlexContainer0hc4bbcf19b064f, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmRotation,
            "enabledForIdleTimeout": false,
            "id": "frmRotation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a06b5634e72142eda0df5031600fd62b,
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
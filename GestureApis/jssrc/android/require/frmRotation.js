define("frmRotation", function() {
    return function(controller) {
        function addWidgetsfrmRotation() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRotation = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxRotation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "right": "5%",
                "skin": "CopyslFbox0fb70cd26767a49",
                "zIndex": 1
            }, {}, {});
            flxRotation.setDefaultUnit(kony.flex.DP);
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
            flxRotation.add(imgrotate);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "btnimg",
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
            }, {});
            var Label0acc7637c964e43 = new kony.ui.Label({
                "id": "Label0acc7637c964e43",
                "isVisible": true,
                "left": "5%",
                "right": "5%",
                "skin": "lblskn",
                "text": "Verify Rotate Gesture by rotating below image",
                "textStyle": {},
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(flxRotation, Button0c4ad1989651943, Label0acc7637c964e43);
        };
        return [{
            "addWidgets": addWidgetsfrmRotation,
            "enabledForIdleTimeout": false,
            "id": "frmRotation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a06b5634e72142eda0df5031600fd62b,
            "skin": "frmskin"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});
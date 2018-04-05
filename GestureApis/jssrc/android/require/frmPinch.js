define("frmPinch", function() {
    return function(controller) {
        function addWidgetsfrmPinch() {
            this.setDefaultUnit(kony.flex.DP);
            var flxPinch = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "305dp",
                "id": "flxPinch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "right": "5%",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            flxPinch.setDefaultUnit(kony.flex.DP);
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
            flxPinch.add(Image0b8a22e54f53b46);
            var lblGesture = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblGesture",
                "isVisible": true,
                "left": "5%",
                "right": "5%",
                "skin": "lblskn",
                "text": "Verify Zoom In/Out gesture for below image",
                "textStyle": {},
                "top": "10%",
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "btnimg",
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
            }, {});
            this.add(flxPinch, lblGesture, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmPinch,
            "enabledForIdleTimeout": false,
            "id": "frmPinch",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c649159c9f3943918b897ce67b8fee8c,
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
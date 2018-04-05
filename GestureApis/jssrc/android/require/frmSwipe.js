define("frmSwipe", function() {
    return function(controller) {
        function addWidgetsfrmSwipe() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSwipe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSwipe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "right": "5%",
                "skin": "CopyslFbox0d4de0faca8fa46",
                "zIndex": 1
            }, {}, {});
            flxSwipe.setDefaultUnit(kony.flex.DP);
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
            flxSwipe.add(imgGes);
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
            }, {});
            var lblGesture = new kony.ui.Label({
                "id": "lblGesture",
                "isVisible": true,
                "left": "5%",
                "right": "5%",
                "skin": "lblskn",
                "text": "Verify Swipe gesture in four directions in below container",
                "textStyle": {},
                "top": "10%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var PaddedButtonRound = new kony.ui.FlexContainer({
                "bottom": "7%",
                "clipBounds": true,
                "height": "45dp",
                "id": "PaddedButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox0f1cc0b58969c40",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            PaddedButtonRound.setDefaultUnit(kony.flex.DP);
            var ButtonRound = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "ButtonSkinActive",
                "id": "ButtonRound",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_f6f1b74972304c9b943200ff41641804,
                "right": "10dp",
                "skin": "ButtonSkinNormal",
                "text": "Reset",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            PaddedButtonRound.add(ButtonRound);
            this.add(flxSwipe, Button0c4ad1989651943, lblGesture, PaddedButtonRound);
        };
        return [{
            "addWidgets": addWidgetsfrmSwipe,
            "enabledForIdleTimeout": false,
            "id": "frmSwipe",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b3014e9b68f8468f8996b45912115a63,
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
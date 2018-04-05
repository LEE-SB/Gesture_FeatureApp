define("frmTap", function() {
    return function(controller) {
        function addWidgetsfrmTap() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "FlxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            FlxMain.setDefaultUnit(kony.flex.DP);
            var Label0i450eeca767d40 = new kony.ui.Label({
                "id": "Label0i450eeca767d40",
                "isVisible": true,
                "left": "2%",
                "skin": "lblskn",
                "text": "Tap in below blue container for single tap gesture",
                "textStyle": {},
                "top": "10dp",
                "width": "97%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSingle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175dp",
                "id": "flxSingle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "CopyslFbox0d4de0faca8fa46",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSingle.setDefaultUnit(kony.flex.DP);
            var lblTap = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTap",
                "isVisible": true,
                "skin": "lblskn",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSingle.add(lblTap);
            var CopyLabel0ccfa476dd5f342 = new kony.ui.Label({
                "id": "CopyLabel0ccfa476dd5f342",
                "isVisible": true,
                "left": "2%",
                "skin": "lblskn",
                "text": "Tap in below green container for Double tap gesture",
                "textStyle": {},
                "top": "10dp",
                "width": "98%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDouble = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175dp",
                "id": "flxDouble",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "skin": "CopyslFbox0fb70cd26767a49",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxDouble.setDefaultUnit(kony.flex.DP);
            var lblDbl = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDbl",
                "isVisible": true,
                "skin": "lblskn",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDouble.add(lblDbl);
            FlxMain.add(Label0i450eeca767d40, flxSingle, CopyLabel0ccfa476dd5f342, flxDouble);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "centerY": "91.30%",
                "focusSkin": "btnimg",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_ha2a020f3ee04db1b38d6a30e2f87d30,
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
                "onClick": controller.AS_Button_a92315d1d7914462a82d8fb7aa3b50dd,
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
            this.add(FlxMain, Button0c4ad1989651943, PaddedButtonRound);
        };
        return [{
            "addWidgets": addWidgetsfrmTap,
            "enabledForIdleTimeout": false,
            "id": "frmTap",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e67c15eee54a47dd958957e11638c8f4,
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
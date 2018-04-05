define("frmTap", function() {
    return function(controller) {
        function addWidgetsfrmTap() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0i09e4d1db62841 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "FlexContainer0i09e4d1db62841",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1dp",
                "skin": "CopyslFbox0d4de0faca8fa46",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0i09e4d1db62841.setDefaultUnit(kony.flex.DP);
            var lblTap = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTap",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Tap here to verify single tap gesture",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            FlexContainer0i09e4d1db62841.add(lblTap);
            var FlexContainer0ec2f3999f8064b = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "FlexContainer0ec2f3999f8064b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1dp",
                "skin": "CopyslFbox0fb70cd26767a49",
                "top": "224dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0ec2f3999f8064b.setDefaultUnit(kony.flex.DP);
            var lblDbl = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDbl",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Tap here to verify  double tap gesture",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            FlexContainer0ec2f3999f8064b.add(lblDbl);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_c986bdb8410d4eb4834a18acfdc145a2,
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
            this.add(FlexContainer0i09e4d1db62841, FlexContainer0ec2f3999f8064b, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmTap,
            "enabledForIdleTimeout": false,
            "id": "frmTap",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e67c15eee54a47dd958957e11638c8f4,
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
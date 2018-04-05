define("frmLongPress", function() {
    return function(controller) {
        function addWidgetsfrmLongPress() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0e9c0b42fdc6949 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "FlexContainer0e9c0b42fdc6949",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0fb70cd26767a49",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0e9c0b42fdc6949.setDefaultUnit(kony.flex.DP);
            var lblGesture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblGesture",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Verify Long Press Gesture by selecting the pressDuration",
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
            var lstbx = new kony.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "lstbx",
                "isVisible": true,
                "left": "48dp",
                "masterData": [
                    ["0", "0 Sec"],
                    ["1", "1 Sec"],
                    ["2", "2 Sec"]
                ],
                "onSelection": controller.AS_ListBox_e6cfb6471aa64ab9a125bdf0f57d6089,
                "selectedKey": "0",
                "selectedKeyValue": ["0", "0 Sec"],
                "skin": "defListBoxNormal",
                "top": "26dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dropDownImage": "listboxarw.png",
                "groupCells": false,
                "placeholder": "Please Select",
                "viewConfig": {
                    "toggleViewConfig": {
                        "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
                    }
                },
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
            });
            FlexContainer0e9c0b42fdc6949.add(lblGesture, lstbx);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_ha9d7ef0d1e14ab8aa79c7ea981c96d7,
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
            this.add(FlexContainer0e9c0b42fdc6949, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmLongPress,
            "enabledForIdleTimeout": false,
            "id": "frmLongPress",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_he3e3177b20f4715b20af0e87b1eae7f,
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
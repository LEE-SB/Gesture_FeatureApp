define("frmLongPress", function() {
    return function(controller) {
        function addWidgetsfrmLongPress() {
            this.setDefaultUnit(kony.flex.DP);
            var flxLongpress = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxLongpress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "right": "5%",
                "skin": "CopyslFbox0fb70cd26767a49",
                "zIndex": 1
            }, {}, {});
            flxLongpress.setDefaultUnit(kony.flex.DP);
            var lblGesture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblGesture",
                "isVisible": true,
                "skin": "lblskn",
                "textStyle": {},
                "width": "98%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLongpress.add(lblGesture);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "btnimg",
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
            }, {});
            var Label0f4d258e0e0d84b = new kony.ui.Label({
                "id": "Label0f4d258e0e0d84b",
                "isVisible": true,
                "left": "5%",
                "right": "5%",
                "skin": "lblskn",
                "text": "Verify Long Press Gesture by selecting the pressDuration in below container",
                "textStyle": {},
                "top": "10%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lstbx = new kony.ui.ListBox({
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "lstbx",
                "isVisible": true,
                "left": "58dp",
                "masterData": [
                    ["0", "0 Sec"],
                    ["1", "1 Sec"],
                    ["2", "2 Sec"]
                ],
                "onSelection": controller.AS_ListBox_d1214ba55a34416694e050c168b01a78,
                "selectedKey": "0",
                "selectedKeyValue": ["0", "0 Sec"],
                "skin": "defListBoxNormal",
                "top": "118dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "applySkinsToPopup": true,
                "dropDownImage": "listboxarw.png",
                "placeholder": "Please Select",
                "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
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
                "onClick": controller.AS_Button_h87372e58bca451ea8a3bb0b3c378af2,
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
            this.add(flxLongpress, Button0c4ad1989651943, Label0f4d258e0e0d84b, lstbx, PaddedButtonRound);
        };
        return [{
            "addWidgets": addWidgetsfrmLongPress,
            "enabledForIdleTimeout": false,
            "id": "frmLongPress",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_he3e3177b20f4715b20af0e87b1eae7f,
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
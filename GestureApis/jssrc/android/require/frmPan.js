define("frmPan", function() {
    return function(controller) {
        function addWidgetsfrmPan() {
            this.setDefaultUnit(kony.flex.DP);
            var flxpan = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "220dp",
                "horizontalScrollIndicator": true,
                "id": "flxpan",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "pagingEnabled": false,
                "right": "5%",
                "scrollDirection": kony.flex.SCROLL_BOTH,
                "skin": "CopyslFSbox0ef9bf772874447",
                "top": "15%",
                "verticalScrollIndicator": true,
                "zIndex": 1
            }, {}, {});
            flxpan.setDefaultUnit(kony.flex.DP);
            var imgpan = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "200%",
                "id": "imgpan",
                "isVisible": true,
                "skin": "slImage",
                "src": "kony_mp_carousel2_slides1.png",
                "width": "200%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxpan.add(imgpan);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "bottom": "4%",
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_e9b82b93bc784b4d898db730d22ab5ef,
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
            var FlexContainer0c505cf56f6654e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlexContainer0c505cf56f6654e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "right": "5%",
                "skin": "CopyslFbox0g0882753f40f4f",
                "top": "60%",
                "zIndex": 10
            }, {}, {});
            FlexContainer0c505cf56f6654e.setDefaultUnit(kony.flex.DP);
            var flxCont1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxCont1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCont1.setDefaultUnit(kony.flex.DP);
            var Label0aa8d1007ab8c4e = new kony.ui.Label({
                "height": "100%",
                "id": "Label0aa8d1007ab8c4e",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "TranslationX",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lbltx = new kony.ui.Label({
                "height": "100%",
                "id": "lbltx",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCont1.add(Label0aa8d1007ab8c4e, lbltx);
            var CopyflxCont0eb94911c7c1846 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxCont0eb94911c7c1846",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0eb94911c7c1846.setDefaultUnit(kony.flex.DP);
            var CopyLabel0d7dc63ce704048 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0d7dc63ce704048",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "TranslationY",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblty = new kony.ui.Label({
                "height": "100%",
                "id": "lblty",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxCont0eb94911c7c1846.add(CopyLabel0d7dc63ce704048, lblty);
            var CopyflxCont0a67d40183e904b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxCont0a67d40183e904b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0a67d40183e904b.setDefaultUnit(kony.flex.DP);
            var CopyLabel0fcc7062f678546 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0fcc7062f678546",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "VelocityX",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblvx = new kony.ui.Label({
                "height": "100%",
                "id": "lblvx",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxCont0a67d40183e904b.add(CopyLabel0fcc7062f678546, lblvx);
            var CopyflxCont0c04f2f895f724e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxCont0c04f2f895f724e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0c04f2f895f724e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0eff96cbfbb9d4e = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0eff96cbfbb9d4e",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "VelocityY",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblvy = new kony.ui.Label({
                "height": "100%",
                "id": "lblvy",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxCont0c04f2f895f724e.add(CopyLabel0eff96cbfbb9d4e, lblvy);
            var CopyflxCont0a4f2ddd80ee542 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxCont0a4f2ddd80ee542",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0a4f2ddd80ee542.setDefaultUnit(kony.flex.DP);
            var CopyLabel0e8b37a25427c40 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0e8b37a25427c40",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "GestureX",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblgx = new kony.ui.Label({
                "height": "100%",
                "id": "lblgx",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxCont0a4f2ddd80ee542.add(CopyLabel0e8b37a25427c40, lblgx);
            var CopyflxCont0dde1421ca00b4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxCont0dde1421ca00b4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0dde1421ca00b4b.setDefaultUnit(kony.flex.DP);
            var CopyLabel0j6889479400740 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0j6889479400740",
                "isVisible": true,
                "left": "2dp",
                "skin": "lblskin2",
                "text": "GestureY",
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblgy = new kony.ui.Label({
                "height": "100%",
                "id": "lblgy",
                "isVisible": true,
                "left": "50%",
                "skin": "lblskin2",
                "text": "Label",
                "textStyle": {},
                "top": "0%",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxCont0dde1421ca00b4b.add(CopyLabel0j6889479400740, lblgy);
            FlexContainer0c505cf56f6654e.add(flxCont1, CopyflxCont0eb94911c7c1846, CopyflxCont0a67d40183e904b, CopyflxCont0c04f2f895f724e, CopyflxCont0a4f2ddd80ee542, CopyflxCont0dde1421ca00b4b);
            var Label0acc7637c964e43 = new kony.ui.Label({
                "id": "Label0acc7637c964e43",
                "isVisible": true,
                "left": "5%",
                "right": "5%",
                "skin": "lblskn",
                "text": "Verify Pan Gesture by dragging below image",
                "textStyle": {},
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(flxpan, Button0c4ad1989651943, FlexContainer0c505cf56f6654e, Label0acc7637c964e43);
        };
        return [{
            "addWidgets": addWidgetsfrmPan,
            "enabledForIdleTimeout": false,
            "id": "frmPan",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c24a4d4329f1413a95e16b4509283368,
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
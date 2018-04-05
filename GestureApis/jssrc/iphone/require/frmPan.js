define("frmPan", function() {
    return function(controller) {
        function addWidgetsfrmPan() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexScrollContainer0e91dc6aacea445 = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "220dp",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollContainer0e91dc6aacea445",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_BOTH,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexScrollContainer0e91dc6aacea445.setDefaultUnit(kony.flex.DP);
            var imgpan = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150%",
                "id": "imgpan",
                "isVisible": true,
                "skin": "slImage",
                "src": "kony_mp_carousel2_slides1.png",
                "width": "150%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexScrollContainer0e91dc6aacea445.add(imgpan);
            var flxCont1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "flxCont1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCont1.setDefaultUnit(kony.flex.DP);
            var Label0aa8d1007ab8c4e = new kony.ui.Label({
                "height": "100%",
                "id": "Label0aa8d1007ab8c4e",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lbltx = new kony.ui.Label({
                "height": "100%",
                "id": "lbltx",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCont1.add(Label0aa8d1007ab8c4e, lbltx);
            var CopyflxCont0eb94911c7c1846 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxCont0eb94911c7c1846",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
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
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblty = new kony.ui.Label({
                "height": "100%",
                "id": "lblty",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxCont0eb94911c7c1846.add(CopyLabel0d7dc63ce704048, lblty);
            var CopyflxCont0a67d40183e904b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxCont0a67d40183e904b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0a67d40183e904b.setDefaultUnit(kony.flex.DP);
            var CopyLabel0fcc7062f678546 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0fcc7062f678546",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblvx = new kony.ui.Label({
                "height": "100%",
                "id": "lblvx",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxCont0a67d40183e904b.add(CopyLabel0fcc7062f678546, lblvx);
            var CopyflxCont0c04f2f895f724e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxCont0c04f2f895f724e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0c04f2f895f724e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0eff96cbfbb9d4e = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0eff96cbfbb9d4e",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblvy = new kony.ui.Label({
                "height": "100%",
                "id": "lblvy",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxCont0c04f2f895f724e.add(CopyLabel0eff96cbfbb9d4e, lblvy);
            var CopyflxCont0a4f2ddd80ee542 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxCont0a4f2ddd80ee542",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0a4f2ddd80ee542.setDefaultUnit(kony.flex.DP);
            var CopyLabel0e8b37a25427c40 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0e8b37a25427c40",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblgx = new kony.ui.Label({
                "height": "100%",
                "id": "lblgx",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxCont0a4f2ddd80ee542.add(CopyLabel0e8b37a25427c40, lblgx);
            var CopyflxCont0dde1421ca00b4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "12%",
                "id": "CopyflxCont0dde1421ca00b4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxCont0dde1421ca00b4b.setDefaultUnit(kony.flex.DP);
            var CopyLabel0j6889479400740 = new kony.ui.Label({
                "height": "100%",
                "id": "CopyLabel0j6889479400740",
                "isVisible": true,
                "left": "0dp",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblgy = new kony.ui.Label({
                "height": "100%",
                "id": "lblgy",
                "isVisible": true,
                "left": "50%",
                "skin": "slLabel",
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
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            CopyflxCont0dde1421ca00b4b.add(CopyLabel0j6889479400740, lblgy);
            var Button0c4ad1989651943 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "70dp",
                "id": "Button0c4ad1989651943",
                "isVisible": true,
                "onClick": controller.AS_Button_e9b82b93bc784b4d898db730d22ab5ef,
                "right": "4%",
                "skin": "btnimg",
                "top": "-28%",
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
            this.add(FlexScrollContainer0e91dc6aacea445, flxCont1, CopyflxCont0eb94911c7c1846, CopyflxCont0a67d40183e904b, CopyflxCont0c04f2f895f724e, CopyflxCont0a4f2ddd80ee542, CopyflxCont0dde1421ca00b4b, Button0c4ad1989651943);
        };
        return [{
            "addWidgets": addWidgetsfrmPan,
            "enabledForIdleTimeout": false,
            "id": "frmPan",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c24a4d4329f1413a95e16b4509283368,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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
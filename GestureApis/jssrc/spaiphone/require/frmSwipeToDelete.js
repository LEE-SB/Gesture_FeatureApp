define("frmSwipeToDelete", function() {
    return function(controller) {
        function addWidgetsfrmSwipeToDelete() {
            this.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "height": "10%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Swipe to Delete",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "5%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "onClick": controller.AS_FlexContainer_g9ae00071531481296886c507f28e56b,
                "skin": "slFbox",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "imgBack",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage",
                "src": "backbtn.png",
                "top": "6dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var lblTitleBottomLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblTitleBottomLine",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLLINE",
                "top": "10%",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var smsMessage = new com.samples.smsMessage({
                "clipBounds": true,
                "height": "90%",
                "id": "smsMessage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            this.add(lblTitle, flxBack, lblTitleBottomLine, smsMessage);
        };
        return [{
            "addWidgets": addWidgetsfrmSwipeToDelete,
            "enabledForIdleTimeout": false,
            "id": "frmSwipeToDelete",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "FRMKLG"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});
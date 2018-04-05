define("frmExpandCollapse", function() {
    return function(controller) {
        function addWidgetsfrmExpandCollapse() {
            this.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "height": "10%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Expand / Collapse",
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
                "onClick": controller.AS_FlexContainer_ic9540b5ed1d414a95580dd807e835f6,
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
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "SKNWHITE",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var ProductList = new com.samples.ProductList({
                "clipBounds": true,
                "height": "100%",
                "id": "ProductList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.add(ProductList);
            this.add(lblTitle, flxBack, lblTitleBottomLine, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmExpandCollapse,
            "enabledForIdleTimeout": false,
            "id": "frmExpandCollapse",
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
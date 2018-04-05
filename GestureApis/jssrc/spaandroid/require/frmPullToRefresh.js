define("frmPullToRefresh", function() {
    return function(controller) {
        function addWidgetsfrmPullToRefresh() {
            this.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "height": "10%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Pull to Refresh",
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
                "onClick": controller.AS_FlexContainer_hee0e46c0ceb40ed8ce18624746fa6af,
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
                "zIndex": 15
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var segSampleProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblDescription": "Unisex Black Runnning Shoe Product description lines",
                    "lblDetails": "",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblDescription": "Unisex Black Runnning Shoe Product description lines",
                    "lblDetails": "",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color4.png",
                    "productThree": "konymp_pl_color6.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblDescription": "Unisex Black Runnning Shoe Product description lines",
                    "lblDetails": "",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segSampleProducts",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductRow",
                "scrollingEvents": {
                    "onPull": controller.AS_Segment_aa850326889c445180667ade3962d78b
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "10%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxImg": "flxImg",
                    "flxImgMain": "flxImgMain",
                    "flxPro": "flxPro",
                    "flxProductColors": "flxProductColors",
                    "flxProductRow": "flxProductRow",
                    "flxProductWrapper": "flxProductWrapper",
                    "img": "img",
                    "img1": "img1",
                    "img2": "img2",
                    "img3": "img3",
                    "img4": "img4",
                    "img5": "img5",
                    "lblCost": "lblCost",
                    "lblDescription": "lblDescription",
                    "lblDetails": "lblDetails",
                    "lblProductName": "lblProductName",
                    "lblStock": "lblStock",
                    "productOne": "productOne",
                    "productThree": "productThree",
                    "productTwo": "productTwo"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(lblTitle, flxBack, lblTitleBottomLine, segSampleProducts);
        };
        return [{
            "addWidgets": addWidgetsfrmPullToRefresh,
            "enabledForIdleTimeout": false,
            "id": "frmPullToRefresh",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c9249adf100941568ad5d3b9eb68c4dc,
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
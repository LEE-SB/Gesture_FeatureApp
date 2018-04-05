define("frmCoupledSegments", function() {
    return function(controller) {
        function addWidgetsfrmCoupledSegments() {
            this.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "height": "10%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Coupled Segments",
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
            var lblTitleBottomLine = new kony.ui.Label({
                "height": "1dp",
                "id": "lblTitleBottomLine",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLLINE",
                "top": "9%",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxLock = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
                "id": "flxLock",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "51dp",
                "onClick": controller.AS_FlexContainer_b0d6dbb0482c476999ce43603373fa5d,
                "skin": "slFbox",
                "top": "9.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLock.setDefaultUnit(kony.flex.DP);
            var lblLock = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLock",
                "isVisible": true,
                "left": "4%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Lock Segments",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var switchLock = new kony.ui.Switch({
                "centerY": "50%",
                "height": "65px",
                "id": "switchLock",
                "isVisible": true,
                "leftSideText": "ON",
                "onSlide": controller.AS_Switch_e131ad00c54d4b928f2960775e9d5768,
                "right": "4%",
                "rightSideText": "OFF",
                "selectedIndex": 0,
                "skin": "slSwitch",
                "width": "15%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLock.add(lblLock, switchLock);
            var flxSegments = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxSegments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "FLXSCRLFAFAFA",
                "top": "18%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegments.setDefaultUnit(kony.flex.DP);
            var segData1 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
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
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
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
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
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
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
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
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color1.png",
                    "productThree": "konymp_pl_color3.png",
                    "productTwo": "konymp_pl_color2.png"
                }],
                "groupCells": false,
                "height": "190%",
                "id": "segData1",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductRowMini",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxImg": "flxImg",
                    "flxImgMain": "flxImgMain",
                    "flxProColors": "flxProColors",
                    "flxProDetails": "flxProDetails",
                    "flxProductRowMini": "flxProductRowMini",
                    "flxProductWrapper": "flxProductWrapper",
                    "img": "img",
                    "img1": "img1",
                    "img2": "img2",
                    "img3": "img3",
                    "img4": "img4",
                    "img5": "img5",
                    "lblCost": "lblCost",
                    "lblProductName": "lblProductName",
                    "lblStock": "lblStock",
                    "productOne": "productOne",
                    "productThree": "productThree",
                    "productTwo": "productTwo"
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "185%",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "skin": "FLXCCCCCC",
                "top": "0%",
                "width": "2dp",
                "zIndex": 3
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var segData2 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_1_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }, {
                    "img": "konymp_pl_shoe_2_list.png",
                    "img1": "konymp_pl_star_active.png",
                    "img2": "konymp_pl_star_active.png",
                    "img3": "konymp_pl_star_active.png",
                    "img4": "konymp_pl_star_active.png",
                    "img5": "konymp_pl_star_inactive.png",
                    "lblCost": "$119.95",
                    "lblProductName": "T-Rock Men's",
                    "lblStock": "Instock for delivery",
                    "productOne": "konymp_pl_color7.png",
                    "productThree": "konymp_pl_color4.png",
                    "productTwo": "konymp_pl_color5.png"
                }],
                "groupCells": false,
                "height": "190%",
                "id": "segData2",
                "isVisible": true,
                "left": "50%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductRowMini",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxImg": "flxImg",
                    "flxImgMain": "flxImgMain",
                    "flxProColors": "flxProColors",
                    "flxProDetails": "flxProDetails",
                    "flxProductRowMini": "flxProductRowMini",
                    "flxProductWrapper": "flxProductWrapper",
                    "img": "img",
                    "img1": "img1",
                    "img2": "img2",
                    "img3": "img3",
                    "img4": "img4",
                    "img5": "img5",
                    "lblCost": "lblCost",
                    "lblProductName": "lblProductName",
                    "lblStock": "lblStock",
                    "productOne": "productOne",
                    "productThree": "productThree",
                    "productTwo": "productTwo"
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegments.add(segData1, flxSeperator, segData2);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "5%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "onClick": controller.AS_FlexContainer_gf34945cb6d648fa913f9895bb3adc0d,
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
            this.add(lblTitle, lblTitleBottomLine, flxLock, flxSegments, flxBack);
        };
        return [{
            "addWidgets": addWidgetsfrmCoupledSegments,
            "enabledForIdleTimeout": false,
            "id": "frmCoupledSegments",
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
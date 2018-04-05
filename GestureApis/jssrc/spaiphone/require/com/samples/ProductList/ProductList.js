define(function() {
    return function(controller) {
        var ProductList = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ProductList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        ProductList.setDefaultUnit(kony.flex.DP);
        var segProductList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "img": "konymp_pl_shoe_1_list.png",
                "img1": "konymp_pl_star_active.png",
                "img2": "konymp_pl_star_active.png",
                "img3": "konymp_pl_star_active.png",
                "img4": "konymp_pl_star_active.png",
                "img5": "konymp_pl_star_inactive.png",
                "lblCost": "$119.95",
                "lblDescription": "Unisex Black Runnning Shoe Product",
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
                "lblDescription": "Unisex Black Runnning Shoe",
                "lblDetails": "",
                "lblProductName": "T-Rock Men's",
                "lblStock": "Instock for delivery",
                "productOne": "konymp_pl_color4.png",
                "productThree": "konymp_pl_color7.png",
                "productTwo": "konymp_pl_color5.png"
            }, {
                "img": "konymp_pl_shoe_1_list.png",
                "img1": "konymp_pl_star_active.png",
                "img2": "konymp_pl_star_active.png",
                "img3": "konymp_pl_star_active.png",
                "img4": "konymp_pl_star_active.png",
                "img5": "konymp_pl_star_inactive.png",
                "lblCost": "$119.95",
                "lblDescription": "Unisex Black Runnning Shoe",
                "lblDetails": "",
                "lblProductName": "T-Rock Men's",
                "lblStock": "Instock for delivery",
                "productOne": "konymp_pl_color1.png",
                "productThree": "konymp_pl_color5.png",
                "productTwo": "konymp_pl_color7.png"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segProductList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_g9cde260521841d5a2e2ec22c93ffdd6,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxProductRow",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
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
        ProductList.add(segProductList);
        return ProductList;
    }
})
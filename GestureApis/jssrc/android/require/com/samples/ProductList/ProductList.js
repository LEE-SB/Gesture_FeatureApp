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
            "preShow": controller.AS_FlexContainer_b167c3390a6d42908fc8ee84fcdf5650,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        ProductList.setDefaultUnit(kony.flex.DP);
        var segProductList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "64646400",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
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
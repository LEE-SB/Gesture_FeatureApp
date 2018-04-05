define(function() {
    return function(controller) {
        var smsMessage = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "smsMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_g1769dd8deaa47f597705f406c91b7d5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        smsMessage.setDefaultUnit(kony.flex.DP);
        var segMessagesList = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "100%",
            "id": "segMessagesList",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
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
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        smsMessage.add(segMessagesList);
        return smsMessage;
    }
})
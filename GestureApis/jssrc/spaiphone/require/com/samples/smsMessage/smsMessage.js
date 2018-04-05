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
            "data": [{
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_1.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Wayne Stanley",
                "lblLastSeen": "2 days ago",
                "lblMessageText": "I am back, after few days of vacating with family. Weather is so good"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_2.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Logan Hall",
                "lblLastSeen": "2 days ago",
                "lblMessageText": "Here, I focus on a range of items and features we use in life"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_3.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Verna Porter",
                "lblLastSeen": "2 days ago",
                "lblMessageText": "Photographs are a way of preserving a moment in our lives"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_4.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Lina Robbins",
                "lblLastSeen": "2 days ago",
                "lblMessageText": "Having used discount toner cartridges for twenty years, there are not"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_5.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Glenn Cook",
                "lblLastSeen": "Yesterday",
                "lblMessageText": "All the rumors have finally died down and many skeptics have raised"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_1.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Maggie Hall",
                "lblLastSeen": "Yesterday",
                "lblMessageText": "With easy access to Broadband and DSL the number of people"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_2.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Oscar Oslon",
                "lblLastSeen": "Yesterday",
                "lblMessageText": "Photographs are a way of preserving a moment in our lives"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_3.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Lina Robbins",
                "lblLastSeen": "Yesterday",
                "lblMessageText": "Having used discount toner cartridges for twenty years, there are not"
            }, {
                "curnt_view": "1",
                "imgArrow": "konymplistchevron.png",
                "imgContact": "konymp_user_image_4.png",
                "imgDelRow": "del_full_trans.png",
                "imgMarkRead": "mark_read_trans.png",
                "lblContactName": "Abhishek Singh",
                "lblLastSeen": "Yesterday",
                "lblMessageText": "Pain may sometimes be the reason"
            }],
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
            "rowTemplate": "flxSmsMessage",
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
                "flxContactImg": "flxContactImg",
                "flxDelRow": "flxDelRow",
                "flxMarkRead": "flxMarkRead",
                "flxRowWrapper": "flxRowWrapper",
                "flxSmsMessage": "flxSmsMessage",
                "flxTempRowWrapper": "flxTempRowWrapper",
                "imgArrow": "imgArrow",
                "imgContact": "imgContact",
                "imgDelRow": "imgDelRow",
                "imgMarkRead": "imgMarkRead",
                "lblContactName": "lblContactName",
                "lblLastSeen": "lblLastSeen",
                "lblMessageText": "lblMessageText"
            },
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
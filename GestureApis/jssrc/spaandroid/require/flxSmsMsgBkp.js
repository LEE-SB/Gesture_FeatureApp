define("flxSmsMsgBkp", function() {
    return function(controller) {
        var flxSmsMsgBkp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxSmsMsgBkp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "SKNCHARCOAL"
        }, {}, {});
        flxSmsMsgBkp.setDefaultUnit(kony.flex.DP);
        var flxTempWrap = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTempWrap",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "-20%",
            "skin": "slFbox",
            "top": "0%",
            "width": "140%",
            "zIndex": 40
        }, {}, {});
        flxTempWrap.setDefaultUnit(kony.flex.DP);
        var flxMarkRead = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMarkRead",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_b28bec4704274cf19270b98151693284,
            "skin": "slFbox",
            "width": "14%",
            "zIndex": 1
        }, {}, {});
        flxMarkRead.setDefaultUnit(kony.flex.DP);
        var imgMarkRead = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "120%",
            "id": "imgMarkRead",
            "isVisible": true,
            "skin": "CopyslImage0a0adb90b5fa747",
            "src": "mark_read.png",
            "width": "120%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMarkRead.add(imgMarkRead);
        var flxRowWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "SKNCHARCOAL",
            "height": "100%",
            "id": "flxRowWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "SKNCHARCOAL",
            "top": "0%",
            "width": "72%",
            "zIndex": 40
        }, {}, {});
        flxRowWrapper.setDefaultUnit(kony.flex.DP);
        var flxContactImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90px",
            "id": "flxContactImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "skin": "FLXROUND",
            "top": "45dp",
            "width": "90px",
            "zIndex": 1
        }, {}, {});
        flxContactImg.setDefaultUnit(kony.flex.DP);
        var imgContact = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgContact",
            "isVisible": true,
            "skin": "slImage",
            "src": "konymp_user_image_3.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContactImg.add(imgContact);
        var lblContactName = new kony.ui.Label({
            "id": "lblContactName",
            "isVisible": true,
            "left": "17.50%",
            "skin": "LBLCONTACTNAME",
            "text": "Contact Name",
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblMessageText = new kony.ui.Label({
            "height": "42%",
            "id": "lblMessageText",
            "isVisible": true,
            "left": "17.50%",
            "skin": "LBLMSGBDY",
            "text": "Loreum ipsum dollar Loreum ipsum dollar Loreum ipsum dollar Loreum ...",
            "top": "47%",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblLastSeen = new kony.ui.Label({
            "id": "lblLastSeen",
            "isVisible": true,
            "right": "10%",
            "skin": "LBLMSGBDY",
            "text": "2 days ago",
            "top": "16.50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50px",
            "id": "imgArrow",
            "isVisible": true,
            "right": "3%",
            "skin": "slImage",
            "src": "konymplistchevron.png",
            "width": "30px",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowWrapper.add(flxContactImg, lblContactName, lblMessageText, lblLastSeen, imgArrow);
        var flxDelRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxDelRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_g3b73636d7ac4453b29f45819c194fa0,
            "skin": "slFbox",
            "width": "14%",
            "zIndex": 1
        }, {}, {});
        flxDelRow.setDefaultUnit(kony.flex.DP);
        var imgDelRow = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDelRow",
            "isVisible": true,
            "skin": "CopyslImage0a0adb90b5fa747",
            "src": "del_full_trans.png",
            "width": "120%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDelRow.add(imgDelRow);
        flxTempWrap.add(flxMarkRead, flxRowWrapper, flxDelRow);
        flxSmsMsgBkp.add(flxTempWrap);
        return flxSmsMsgBkp;
    }
})
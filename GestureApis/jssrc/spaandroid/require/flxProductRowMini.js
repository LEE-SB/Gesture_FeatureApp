define("flxProductRowMini", function() {
    return function(controller) {
        var flxProductRowMini = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProductRowMini",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "SKNWHITE"
        }, {}, {});
        flxProductRowMini.setDefaultUnit(kony.flex.DP);
        var flxProductWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProductWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0px",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxProductWrapper.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0px",
            "width": "27%",
            "zIndex": 1
        }, {}, {});
        flxImg.setDefaultUnit(kony.flex.DP);
        var img = new kony.ui.Image2({
            "id": "img",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_shoe_1_list.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(img);
        var flxProDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, {}, {});
        flxProDetails.setDefaultUnit(kony.flex.DP);
        var lblProductName = new kony.ui.Label({
            "id": "lblProductName",
            "isVisible": true,
            "left": "4%",
            "skin": "LBLCONTACTNAME",
            "text": "T-Rock Men's",
            "top": "5px",
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
        var flxImgMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxImgMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "4%",
            "skin": "slFbox",
            "top": "2px",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxImgMain.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "id": "img1",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_star_active.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img2 = new kony.ui.Image2({
            "id": "img2",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_star_active.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img3 = new kony.ui.Image2({
            "id": "img3",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_star_active.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img4 = new kony.ui.Image2({
            "id": "img4",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_star_active.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var img5 = new kony.ui.Image2({
            "id": "img5",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_star_inactive.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgMain.add(img1, img2, img3, img4, img5);
        var lblCost = new kony.ui.Label({
            "id": "lblCost",
            "isVisible": true,
            "left": "4%",
            "skin": "LBLCONTACTNAME",
            "text": "$119.95",
            "top": "2px",
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
        var flxProColors = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProColors",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "4%",
            "skin": "slFbox",
            "top": "2px",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxProColors.setDefaultUnit(kony.flex.DP);
        var productOne = new kony.ui.Image2({
            "height": "20px",
            "id": "productOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_color1.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var productTwo = new kony.ui.Image2({
            "height": "20px",
            "id": "productTwo",
            "isVisible": true,
            "left": "5dp",
            "skin": "slImage",
            "src": "konymp_pl_color2.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var productThree = new kony.ui.Image2({
            "height": "20px",
            "id": "productThree",
            "isVisible": true,
            "left": "5dp",
            "skin": "slImage",
            "src": "konymp_pl_color3.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxProColors.add(productOne, productTwo, productThree);
        var lblStock = new kony.ui.Label({
            "id": "lblStock",
            "isVisible": true,
            "left": "4%",
            "skin": "LBLMSGBDY",
            "text": "Instock for delivery",
            "top": "0px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxProDetails.add(lblProductName, flxImgMain, lblCost, flxProColors, lblStock);
        flxProductWrapper.add(flxImg, flxProDetails);
        flxProductRowMini.add(flxProductWrapper);
        return flxProductRowMini;
    }
})
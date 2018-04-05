define("flxProductRow", function() {
    return function(controller) {
        var flxProductRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProductRow",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "skin": "SKNWHITE"
        }, {}, {});
        flxProductRow.setDefaultUnit(kony.flex.DP);
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
            "top": "50px",
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
        var flxPro = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPro",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "slFbox",
            "top": "0px",
            "width": "73%",
            "zIndex": 1
        }, {}, {});
        flxPro.setDefaultUnit(kony.flex.DP);
        var lblProductName = new kony.ui.Label({
            "id": "lblProductName",
            "isVisible": true,
            "left": "5%",
            "skin": "LBLCONTACTNAME",
            "text": "T-Rock Men's",
            "top": "15dp",
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
        var lblDescription = new kony.ui.Label({
            "id": "lblDescription",
            "isVisible": true,
            "left": "5%",
            "skin": "LBLMSGBDY",
            "text": "Unisex Black Runnning Shoe Product description lines",
            "top": "5dp",
            "width": "85%",
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
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxImgMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "slFbox",
            "top": "5dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxImgMain.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2({
            "height": "100%",
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
            "height": "100%",
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
            "height": "100%",
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
            "height": "100%",
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
            "height": "100%",
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
            "left": "5%",
            "skin": "LBLCONTACTNAME",
            "text": "$119.95",
            "top": "7dp",
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
        var flxProductColors = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxProductColors",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "slFbox",
            "top": "1dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxProductColors.setDefaultUnit(kony.flex.DP);
        var productOne = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "productOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konymp_pl_color1.png",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var productTwo = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "productTwo",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "konymp_pl_color2.png",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var productThree = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "productThree",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "konymp_pl_color3.png",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxProductColors.add(productOne, productTwo, productThree);
        var lblStock = new kony.ui.Label({
            "id": "lblStock",
            "isVisible": true,
            "left": "5%",
            "skin": "LBLMSGBDY",
            "text": "Instock for delivery",
            "top": "1dp",
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
        flxPro.add(lblProductName, lblDescription, flxImgMain, lblCost, flxProductColors, lblStock);
        flxProductWrapper.add(flxImg, flxPro);
        var lblDetails = new kony.ui.Label({
            "id": "lblDetails",
            "isVisible": true,
            "left": "4%",
            "skin": "LBLMSGBDY",
            "top": "5dp",
            "width": "92%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 4],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxProductRow.add(flxProductWrapper, lblDetails);
        return flxProductRow;
    }
})
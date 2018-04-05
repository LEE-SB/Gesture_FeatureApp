define("frmLanding", function() {
    return function(controller) {
        function addWidgetsfrmLanding() {
            this.setDefaultUnit(kony.flex.DP);
            var lblTitle = new kony.ui.Label({
                "height": "10%",
                "id": "lblTitle",
                "isVisible": true,
                "left": "0%",
                "skin": "LBLTITLECHARCOAL",
                "text": "Segment",
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
                "top": "10%",
                "width": "100%",
                "zIndex": 10
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
                "skin": "FLXFAFAFA",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var segFeatureOptions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblFeature": "Row Animation"
                }, {
                    "lblFeature": "Expand/Collapse"
                }, {
                    "lblFeature": "Swipe to Delete"
                }, {
                    "lblFeature": "Pull to Refresh"
                }, {
                    "lblFeature": "Coupled Segments"
                }],
                "groupCells": false,
                "height": "80%",
                "id": "segFeatureOptions",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_df34f2ee6d1344f3a84af71d0c4b0579,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "SEGFEATURES",
                "rowTemplate": "flxFeatureList",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFeatureContainer": "flxFeatureContainer",
                    "flxFeatureList": "flxFeatureList",
                    "lblFeature": "lblFeature"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBody.add(segFeatureOptions);
            this.add(lblTitle, lblTitleBottomLine, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmLanding,
            "enabledForIdleTimeout": false,
            "id": "frmLanding",
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
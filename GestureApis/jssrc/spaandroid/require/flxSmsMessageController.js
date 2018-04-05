define({
    "onViewCreated": function(eObj) {
        try {
            this.view.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                fingers: 1
            }, this.swipeGestureHandler);
        } catch (exc) {
            alert("exception in template!!!" + JSON.stringify(exc));
        }
    },
    "swipeGestureHandler": function(widgetInfo, gestureInfo, context) {
        var mswipeDirection = gestureInfo.swipeDirection;
        var secIndex = context["sectionIndex"];
        var rowIndex = context["rowIndex"];
        var myInfo = {
            section: secIndex,
            row: rowIndex,
            swipeDirection: mswipeDirection
        };
        this.executeOnParent("swipeDetected", myInfo);
    },
    "onDeleteRow": function(eventobject, context) {
        var secIndex = context["sectionIndex"];
        var rowIndex = context["rowIndex"];
        this.executeOnParent("deleteRowDetected", {
            section: secIndex,
            row: rowIndex
        });
    },
    "AS_FlexContainer_b8f44d27d7874ae5bf7df47b15904bae": function AS_FlexContainer_b8f44d27d7874ae5bf7df47b15904bae(eventobject, context) {
        var self = this;
        alert("clicked on mark read!!!");
    },
    "AS_FlexContainer_bc5b68e343aa476481e8bc46e8a18a9a": function AS_FlexContainer_bc5b68e343aa476481e8bc46e8a18a9a(eventobject, context) {
        var self = this;
        this.onDeleteRow(eventobject, context);
    }
})
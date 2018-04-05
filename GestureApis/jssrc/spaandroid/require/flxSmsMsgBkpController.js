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
    "AS_FlexContainer_b28bec4704274cf19270b98151693284": function AS_FlexContainer_b28bec4704274cf19270b98151693284(eventobject, context) {
        var self = this;
        alert("clicked on mark read!!!");
    },
    "AS_FlexContainer_g3b73636d7ac4453b29f45819c194fa0": function AS_FlexContainer_g3b73636d7ac4453b29f45819c194fa0(eventobject, context) {
        var self = this;
        this.onDeleteRow(eventobject, context);
    }
})
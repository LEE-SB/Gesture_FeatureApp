define({
    "featureSelected": function() {
        var formToBeNavigated = null;
        switch (this.view.segFeatureOptions.selectedRowIndex[1]) {
            case 0:
                formToBeNavigated = "frmRowAnimation";
                break;
            case 1:
                formToBeNavigated = "frmExpandCollapse";
                break;
            case 2:
                formToBeNavigated = "frmSwipeToDelete";
                break;
            case 3:
                formToBeNavigated = "frmPullToRefresh";
                break;
            case 4:
                formToBeNavigated = "frmCoupledSegments";
                break;
            default:
                kony.print("You Shld not be here!!!");
                return;
        }
        var ntf = new kony.mvc.Navigation(formToBeNavigated);
        ntf.navigate();
    },
    "AS_Segment_df34f2ee6d1344f3a84af71d0c4b0579": function AS_Segment_df34f2ee6d1344f3a84af71d0c4b0579(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.featureSelected();
    }
})
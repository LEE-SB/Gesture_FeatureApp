define({
    "segmentOnPullCallback": function() {
        alert("Segment Pull Triggered!!");
    },
    "frmPullToRefreshCallback": function() {
        this.view.segSampleProducts.onPull = this.segmentOnPullCallback;
    },
    "AS_FlexContainer_hee0e46c0ceb40ed8ce18624746fa6af": function AS_FlexContainer_hee0e46c0ceb40ed8ce18624746fa6af(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    "AS_Segment_aa850326889c445180667ade3962d78b": function AS_Segment_aa850326889c445180667ade3962d78b(eventobject) {
        var self = this;
        this.segmentOnPullCallback();
    },
    "AS_Form_c9249adf100941568ad5d3b9eb68c4dc": function AS_Form_c9249adf100941568ad5d3b9eb68c4dc(eventobject) {
        var self = this;
        this.frmPullToRefreshCallback();
    }
})
define({
    "lockSegments": true,
    "onClickLockSegments": function() {},
    "onSwitchSlide": function(eventobject) {
        //alert("switch slide occured! "+this.view.switchLock.selectedIndex);
        if (this.view.switchLock.selectedIndex === 1) {
            //alert("unlocked!!!");
            this.view.segData1.height = "98%";
            this.view.segData2.height = "98%";
            this.view.flxSeperator.height = "100%";
        } else if (this.view.switchLock.selectedIndex === 0) {
            //alert("locked!!");
            this.view.segData1.height = "190%";
            this.view.segData2.height = "190%";
            this.view.flxSeperator.height = "190%";
        }
        this.view.forceLayout();
    },
    "AS_Switch_e131ad00c54d4b928f2960775e9d5768": function AS_Switch_e131ad00c54d4b928f2960775e9d5768(eventobject) {
        var self = this;
        this.onSwitchSlide(eventobject);
    },
    "AS_FlexContainer_b0d6dbb0482c476999ce43603373fa5d": function AS_FlexContainer_b0d6dbb0482c476999ce43603373fa5d(eventobject) {
        var self = this;
        this.onClickLockSegments();
    },
    "AS_FlexContainer_gf34945cb6d648fa913f9895bb3adc0d": function AS_FlexContainer_gf34945cb6d648fa913f9895bb3adc0d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    }
})
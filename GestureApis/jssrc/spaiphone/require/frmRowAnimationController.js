define({
    "fromRowAnimationPostShow": function() {
        this.view.smsMessage.reFreshWithRowAnim();
    },
    "AS_FlexContainer_f673a1f11f694b69919b20ede51030fc": function AS_FlexContainer_f673a1f11f694b69919b20ede51030fc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLanding");
        ntf.navigate();
    },
    "AS_Form_d1eaa882a6324207a4d3d6294469ef1a": function AS_Form_d1eaa882a6324207a4d3d6294469ef1a(eventobject) {
        var self = this;
        this.fromRowAnimationPostShow();
    }
})
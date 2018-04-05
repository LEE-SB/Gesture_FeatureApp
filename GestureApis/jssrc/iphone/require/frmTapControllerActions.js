define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0c4ad1989651943 **/
    AS_Button_c986bdb8410d4eb4834a18acfdc145a2: function AS_Button_c986bdb8410d4eb4834a18acfdc145a2(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** postShow defined for frmTap **/
    AS_Form_e67c15eee54a47dd958957e11638c8f4: function AS_Form_e67c15eee54a47dd958957e11638c8f4(eventobject) {
        var self = this;
        this.view.lblTap.text = "Tap here to verify single tap gesture";
        this.view.lblDbl.text = "Tap here to verify double tap gesture";
        this.addSingleTapGesture();
        this.addDoubleTapGesture();
    }
});
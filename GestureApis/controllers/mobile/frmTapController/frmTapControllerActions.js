define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0c4ad1989651943 **/
    AS_Button_ha2a020f3ee04db1b38d6a30e2f87d30: function AS_Button_ha2a020f3ee04db1b38d6a30e2f87d30(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** onClick defined for ButtonRound **/
    AS_Button_a92315d1d7914462a82d8fb7aa3b50dd: function AS_Button_a92315d1d7914462a82d8fb7aa3b50dd(eventobject) {
        var self = this;
        this.view.lblTap.text = "";
        this.view.lblDbl.text = "";
    },
    /** postShow defined for frmTap **/
    AS_Form_e67c15eee54a47dd958957e11638c8f4: function AS_Form_e67c15eee54a47dd958957e11638c8f4(eventobject) {
        var self = this;
        this.view.lblTap.text = "";
        this.view.lblDbl.text = "";
        this.addSingleTapGesture();
        this.addDoubleTapGesture();
    }
});
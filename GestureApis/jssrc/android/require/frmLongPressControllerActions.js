define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0c4ad1989651943 **/
    AS_Button_ha9d7ef0d1e14ab8aa79c7ea981c96d7: function AS_Button_ha9d7ef0d1e14ab8aa79c7ea981c96d7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** onSelection defined for lstbx **/
    AS_ListBox_d1214ba55a34416694e050c168b01a78: function AS_ListBox_d1214ba55a34416694e050c168b01a78(eventobject) {
        var self = this;
        this.view.FlexContainer0e9c0b42fdc6949.removeGestureRecognizer(gesturehandle);
        this.addLongPressGesture();
    },
    /** onClick defined for ButtonRound **/
    AS_Button_h87372e58bca451ea8a3bb0b3c378af2: function AS_Button_h87372e58bca451ea8a3bb0b3c378af2(eventobject) {
        var self = this;
        this.view.lblGesture.text = "";
    },
    /** postShow defined for frmLongPress **/
    AS_Form_he3e3177b20f4715b20af0e87b1eae7f: function AS_Form_he3e3177b20f4715b20af0e87b1eae7f(eventobject) {
        var self = this;
        this.view.lblGesture.text = "";
        this.addLongPressGesture();
    }
});
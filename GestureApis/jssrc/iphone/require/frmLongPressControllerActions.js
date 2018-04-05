define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSelection defined for lstbx **/
    AS_ListBox_e6cfb6471aa64ab9a125bdf0f57d6089: function AS_ListBox_e6cfb6471aa64ab9a125bdf0f57d6089(eventobject) {
        var self = this;
        this.view.FlexContainer0e9c0b42fdc6949.removeGestureRecognizer(gesturehandle);
        this.addLongPressGesture();
    },
    /** onClick defined for Button0c4ad1989651943 **/
    AS_Button_ha9d7ef0d1e14ab8aa79c7ea981c96d7: function AS_Button_ha9d7ef0d1e14ab8aa79c7ea981c96d7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** postShow defined for frmLongPress **/
    AS_Form_he3e3177b20f4715b20af0e87b1eae7f: function AS_Form_he3e3177b20f4715b20af0e87b1eae7f(eventobject) {
        var self = this;
        this.addLongPressGesture();
    }
});
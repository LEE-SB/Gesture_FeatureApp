define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Button0c4ad1989651943 **/
    AS_Button_jae27abf8c294e8791a446d62e9de82f: function AS_Button_jae27abf8c294e8791a446d62e9de82f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** onClick defined for ButtonRound **/
    AS_Button_f6f1b74972304c9b943200ff41641804: function AS_Button_f6f1b74972304c9b943200ff41641804(eventobject) {
        var self = this;
        this.view.lblGesture.text = "Verify Swipe gesture in four directions in below container";
        this.view.imgGes.src = "arrow4.png";
    },
    /** postShow defined for frmSwipe **/
    AS_Form_b3014e9b68f8468f8996b45912115a63: function AS_Form_b3014e9b68f8468f8996b45912115a63(eventobject) {
        var self = this;
        this.view.lblGesture.text = "Verify Swipe gesture in four directions in below container";
        this.view.imgGes.src = "arrow4.png";
        this.addSwipeGesture();
    }
});
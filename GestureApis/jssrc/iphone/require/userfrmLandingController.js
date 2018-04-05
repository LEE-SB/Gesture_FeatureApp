define({
    featureSelected: function() {
        var formToBeNavigated = null;
        switch (this.view.segFeatureOptions.selectedRowIndex[1]) {
            case 0:
                formToBeNavigated = "frmTap";
                break;
            case 1:
                formToBeNavigated = "frmSwipe";
                break;
            case 2:
                formToBeNavigated = "frmLongPress";
                break;
            case 3:
                formToBeNavigated = "frmPan";
                break;
            case 4:
                formToBeNavigated = "frmPinch";
                break;
            case 5:
                formToBeNavigated = "frmRotation";
                break;
            default:
                kony.print("You Shld not be here!!!");
                return;
        }
        var ntf = new kony.mvc.Navigation(formToBeNavigated);
        ntf.navigate();
    }
});
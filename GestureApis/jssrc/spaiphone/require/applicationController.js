define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.samples.ProductList", "ProductList", "ProductListController");
        kony.application.registerMaster({
            "namespace": "com.samples",
            "classname": "ProductList",
            "name": "com.samples.ProductList"
        });
        kony.mvc.registry.add("com.samples.smsMessage", "smsMessage", "smsMessageController");
        kony.application.registerMaster({
            "namespace": "com.samples",
            "classname": "smsMessage",
            "name": "com.samples.smsMessage"
        });
        kony.mvc.registry.add("flxFeatureList", "flxFeatureList", "flxFeatureListController");
        kony.mvc.registry.add("flxProductRow", "flxProductRow", "flxProductRowController");
        kony.mvc.registry.add("flxProductRowMini", "flxProductRowMini", "flxProductRowMiniController");
        kony.mvc.registry.add("flxSmsMsgBkp", "flxSmsMsgBkp", "flxSmsMsgBkpController");
        kony.mvc.registry.add("flxSmsMessage", "flxSmsMessage", "flxSmsMessageController");
        kony.mvc.registry.add("frmCoupledSegments", "frmCoupledSegments", "frmCoupledSegmentsController");
        kony.mvc.registry.add("frmExpandCollapse", "frmExpandCollapse", "frmExpandCollapseController");
        kony.mvc.registry.add("frmLanding", "frmLanding", "frmLandingController");
        kony.mvc.registry.add("frmPullToRefresh", "frmPullToRefresh", "frmPullToRefreshController");
        kony.mvc.registry.add("frmRowAnimation", "frmRowAnimation", "frmRowAnimationController");
        kony.mvc.registry.add("frmSwipeToDelete", "frmSwipeToDelete", "frmSwipeToDeleteController");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLanding").navigate();
    }
});
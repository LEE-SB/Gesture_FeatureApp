define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework", "KnowledgeFramework", "KnowledgeFrameworkController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework",
            "name": "com.konycmpt.KnowledgeFramework"
        });
        kony.mvc.registry.add("com.konymp.CardNoPeek", "CardNoPeek", "CardNoPeekController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "CardNoPeek",
            "name": "com.konymp.CardNoPeek"
        });
        kony.mvc.registry.add("com.konymp.E2ECard", "E2ECard", "E2ECardController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "E2ECard",
            "name": "com.konymp.E2ECard"
        });
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
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("frmKnowledgeFramework", "frmKnowledgeFramework", "frmKnowledgeFrameworkController");
        kony.mvc.registry.add("frmLanding", "frmLanding", "frmLandingController");
        kony.mvc.registry.add("frmLongPress", "frmLongPress", "frmLongPressController");
        kony.mvc.registry.add("frmPan", "frmPan", "frmPanController");
        kony.mvc.registry.add("frmPinch", "frmPinch", "frmPinchController");
        kony.mvc.registry.add("frmRotation", "frmRotation", "frmRotationController");
        kony.mvc.registry.add("frmSwipe", "frmSwipe", "frmSwipeController");
        kony.mvc.registry.add("frmTap", "frmTap", "frmTapController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmLanding").navigate();
    }
});
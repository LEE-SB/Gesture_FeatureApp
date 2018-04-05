define(function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        productListPreshow: function() {
            if (this.expandData === undefined || this.expandData === null) {
                this.expandData = this.view.segProductList.data;
            } else {
                this.view.segProductList.setData(this.expandData);
            }
        },
        productOnClick: function() {
            var rowData = this.view.segProductList.selectedItems;
            var animDefinition = null;
            if (rowData[0].lblDetails.length === 0) {
                rowData[0].lblDetails = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
                animDefinition = {
                    0: {
                        "height": 120,
                    },
                    100: {
                        "height": 200,
                    }
                };
            } else {
                rowData[0].lblDetails = "";
                animDefinition = {
                    0: {
                        "height": 200,
                    },
                    100: {
                        "height": 120,
                    }
                };
            }
            var myanimDef = kony.ui.createAnimation(animDefinition);
            var animConf = {
                delay: 0.7,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: 1
            };
            var addRowAnimtion = {
                definition: myanimDef,
                config: animConf,
                callbacks: null
            };
            var row1 = {
                sectionIndex: this.view.segProductList.selectedRowIndex[0],
                rowIndex: this.view.segProductList.selectedRowIndex[1],
            };
            this.view.segProductList.setDataAt(rowData[0], this.view.segProductList.selectedRowIndex[1], this.view.segProductList.selectedRowIndex[0]);
            //this.view.segProductList.animateRows({rows:[row1],widgets:["flxProductRow"],animation:addRowAnimtion});
        }
    };
});
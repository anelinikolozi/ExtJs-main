Ext.define("SL.view.MainController",{
    extend:"Ext.app.ViewController",
    konvertacia:function(){

        var exchanged=this.getViewModel().get('startingnumber');

        const form=this.lookup('mainform').getForm()

        if (this.lookup('damaged').getValue()&&(!(this.lookup('speccourse').getValue()))) {

            exchanged = (exchanged * 0.9);
            exchanged=exchanged*this.getViewModel().get('kursi');
            this.getViewModel().set('convertedmoney', exchanged);
        }else {
            exchanged = exchanged * this.getViewModel().get('kursi');
        }
        values=this.lookup('mainform').getValues();
       const record=Ext.create('SL.model.transaction',{
           'recieve':values.money,
           'giveaway':exchanged,
           'kursi':values.kursi,
           'speckursi':values.speccourse,
           'damagedvalue':values.damaged,
       })
        const store = this.getViewModel().getStore('transactions');
       store.add(record);


        },


    specCourse: function (){
        this.lookup('kursi').setReadOnly(false);


    },

    clean:function(){
        this.getViewModel().set('convertedmoney',null);
        this.getViewModel().set('startingnumber',0);
        this.getViewModel().set('kursi',3.29);
    }

})

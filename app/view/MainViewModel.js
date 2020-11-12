Ext.define('SL.view.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	requires:'SL.model.transaction',
	data: {
		convertedmoney: null,
		kursi: '3.29',
        startingnumber:'0',
		counter:'0',
	},
	stores:{
		transactions:{
			config:{
				whatever:null,
			},

			model:"SL.model.transaction",
			autoload:true,
			proxy:{
				type:'rest',
				url:'http://192.168.100.136/banks/exchange/operations'
			}
		}
	}
})


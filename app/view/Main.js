Ext.define("SL.view.Main", {
	extend: 'Ext.panel.Panel',
	controller: {
		xclass: 'SL.view.MainController'
	},
	viewModel: {
		xclass: 'SL.view.MainViewModel'
	},
	layout: {
		type: 'border',
		align: 'stretch'
	},
	items: [{flex:1,
		xtype: 'form',
		reference:'mainform',
		region:'north',
		layout:{
			type:'hbox',
			align:'stretch'
		},

		items:[{

			xtype: 'container',
			flex: 1,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'label',
				text: 'მისაღები თანხა (USD):',


			}, {
				xtype: 'numberfield',
				name:'money',
				reference: 'money',
				bind: {
					value: '{startingnumber}'
				},
				flex: 1,
			}, {
				xtype: 'label',
				text: 'გასაცემი თანხა (GEL):',

			}, {
				xtype: 'displayfield',
				name:'converted',
				reference: 'converted',
				bind: {
					value: '{convertedmoney}',
				},
				flex: 1,

			}]


		}, {
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'label',

				text: 'კურსი:',

				reference: 'money'

			}, {
				xtype: 'numberfield',
				reference: 'kursi',
				readOnly: true,
				name:'kursi',
				bind: {
					value: '{kursi}'
				},
				flex: 1,
			}, {
				xtype: 'checkboxfield',
				boxLabel: 'სპეც კურსი',
				name:'speccourse',
				reference: 'speccourse',
				handler:'specCourse'

			}, {
				xtype: 'checkboxfield',
				name:'damaged',
				boxLabel: 'დაზიანებული ვალუტა',
				reference: 'damaged'
			}]
		}, {
			xtype: 'container',
			flex: 1,
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{flex:1,
				xtype: 'button',
				name:'konvertacia',
				text: 'კონვერტაცია',
				handler: 'konvertacia',
			}, {
				flex:1,
				xtype: 'button',
				text: 'გასუფთავება',
				handler: 'clean'
			}]
		}],


	},
		{
		xtype:'grid',
		flex:1,
			region:'center',
		bind:{
			store: '{transactions}',
		},

		columns:[{
			text:'მისაღები თანხა',
			dataIndex:'recieve',
			flex:1

		},{
			text:'გასაცემი თანხა',
			dataIndex:'giveaway',
			flex:1
		},{
			flex:1,
			text:'კურსი',
			dataIndex:'kursi'
		},{
			text:'სპეც კურსი',
			dataIndex:'speckursi',
			flex:1
		},{
			text:'დაზიანებული ვალუტა',
			dataIndex:'damagedvalue',
			flex:1
		},{
			text:'თარიღი',
			dataIndex:'date',
			flex:1

		}]


	}
	]
})

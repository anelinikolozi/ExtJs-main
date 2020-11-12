Ext.define("SL.model.transaction",{
	extend: 'Ext.data.Model',
	fields: [

		'recieve',
		'giveaway',
		'kursi',
		'speckursi',
		'damagedvalue',
		{name:'date',
		convert:function (){
			var today=new Date();
			return today;
		}},



	],
})
Ext.define("SenchaDemo.store.List",{
	extend:"Ext.data.Store",
	id:"listStore",
	config:{
		model:"SenchaDemo.model.List",
		autoLoad:true,
		proxy:{
			type:'ajax',
			url:'http://localhost:10088/BIZ_SQLPHP/SenchaDemo.php',
			render:{
				type:'json'
			}
		}
	}
});
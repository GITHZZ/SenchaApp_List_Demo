Ext.define("SenchaDemo.view.Viewport",{
	extend:"Ext.Panel",
	xtype:"userList",
	fullscreen:true,
	requires:["SenchaDemo.store.List"],
	initialize:function(){
		var listStore=Ext.create("SenchaDemo.store.List");
		console.log(listStore);
		Ext.create('Ext.List', {
    		fullscreen: true,
    		itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
    		store: listStore,
    		onItemDisclosure:function(record,item,index,e){
    			
    		},
    		items: []
		});
		//this.add(list);
	},
	config:{
		layout:'card',
		iconCls:"team",
		title:"users"
	}
});


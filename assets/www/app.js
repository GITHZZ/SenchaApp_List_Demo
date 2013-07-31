Ext.Loader.setPath({
	'Ext':'support/Sencha Touch_2.2.1/src'
});

Ext.application({
    name: 'SenchaDemo',
    
    //连接框架中的类
    requires:[
    	'Ext.List',
    	'Ext.data.Store'
    ],
    //连接app文件中文件
	controllers:[
	],
	models:[
		"List"
	],
	stores:[
		"List"
	],
	views:[
		"Viewport"
	],
    
    launch: function() {
		Ext.create("SenchaDemo.view.Viewport");
    }
});
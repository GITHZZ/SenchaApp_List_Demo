Ext.Loader.setPath({
	'Ext':'support/Sencha Touch_2.2.1/src'
});

Ext.application({
    name: 'SenchaDemo',
    
    //���ӿ���е���
    requires:[
    	'Ext.List',
    	'Ext.data.Store'
    ],
    //����app�ļ����ļ�
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
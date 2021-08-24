// Ext.define('ForFun.view.main.detail.DetailView', {
// 	extend: 'Ext.Container',
// 	xtype: 'detailview',
//   cls: 'detailview',
//   layout: 'fit',
//   items: [
//     {
//       xtype: 'container', 
//       style: 'background:white', 
//       html: '<div style="padding:10px;font-size:24px;">detailview</div>'
//     }
//   ]
// })
Ext.define('ForFun.view.DetailView', {
  extend: 'Ext.grid.Grid',
  title: 'Reykjavik Flight Departures',
  grouped: true,
  items: [{
      docked: 'top',
      xtype: 'toolbar',
      items: [{
          text: 'Sort on destination',
          handler: function(button){
              // Sort under program control
              button.up('grid').getStore().sort('to');
          }
      }]
  }],
  store: {
  
      // Sort via store configuration
      sorters: [{
          property: 'airline'
      }],
  
      type: 'store',
      autoLoad: true,
      fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
      proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
  },
  plugins: {
    gridfilters: true
},

onClearFilters: function(){
    this.getStore().clearFilter();
},
  
  columns: [{
      xtype: 'datecolumn',
      text: 'Date',
      dataIndex: 'date',
      format: 'M j',
      width: 60,
      filter: true
  }, {
      xtype: 'column', // This is the default column xtype
      text: 'Airline',
      dataIndex: 'airline',
      filter: 'string'
  }, {
      text: 'To',
      dataIndex: 'to',
      width: 200,
      filter: 'string'
  }, {
      text: 'Scheduled',
      dataIndex: 'plannedDeparture',
      align: 'center'
  }, {
      text: 'Status',
      dataIndex: 'realDeparture',
      flex: 1
  }],
  
  });
// Ext.define('ForFun.view.main.detail.DetailView', {
//   extend: 'Ext.grid.Grid',
//   title: 'Pokemon',
  
//   onHpChange: function(field, value) {
//       var store = this.getStore();
//       store.clearFilter();
//       store.filterBy(function(r1) {
//           return r1.data.hp >= value;
//       });
//   },
  
//   items: [{
//       xtype: 'toolbar',
//       docked: 'top',
//       items: [{
//           xtype: 'spinnerfield',
//           minValue: 30,
//           maxValue: 100,
//           stepValue: 10,
//           value: 30,
//           width: 80,
//           labelWidth: 30,
//           label: 'HP',
//           listeners: {
//               change: 'up.onHpChange'
//           }
//       }]
//   }],
 
    
//     onClearFilters: function(){
//         this.getStore().clearFilter();
//     },
//   plugins: {
//       gridsummaryrow: true,
//       gridfilters: true
//   },
//   store: {
//       sorters: ['hp'],
//       proxy: {
//           type: 'ajax',
//           url: 'inventory.json'
//       },
//       autoLoad: true
//   },
//   columns: [{
//       text: 'Name',
//       dataIndex: 'name',
//       summary: 'count',
//       summaryRenderer: function(grid, context) {
//           return (context.records.length + ' Pokemon');
//       },
//       filter: 'string'
//   }, {
//       text: 'HP',
//       dataIndex: 'hp',
//       filter: 'string'
//   }, {
//       text: 'Attack',
//       dataIndex: 'attack',
//       filter: 'string'
//   }, {
//       cell: {
//           encodeHtml: false,
//           tpl: '<img src="https://docs.sencha.com/resources/json/pokemon/{pokedex}.png" height="24">',
//       },
//       text: 'Picture',
//       dataIndex: 'pokedex',
//       flex: 1
//   }]
//   });
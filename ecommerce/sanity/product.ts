export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        
        name:'name',
        title:'productName',
        type:'string',
    },
    {
        name:'title',
        title:'Product Title' ,
        type:'string',
    },
    {
        name:'price',
        title:'Product Price',
        type:'number',
    },
    {
        name:'shortdiscription',
        title:'Short Discription',
        type:'string',
    },
    {
        name:'detaildscription',
        title:'Detail Descrioption',
        type:'string',
    },
    {
        name:'category',
        title:'Category',
        type:'string',
        options:{
            list:[
                
                { title: "Mens", value: "mens" },
                { title: "Womens", value: "womens" },
                { title: "Kids", value: "kids" },
            ]
        }
        
    },
    {
        name:'image',
        title:'Product Image',
        type:'image',
        of:[{type:'image'}],
        options:{
            hotspot:true

        },

    }

    ]

}





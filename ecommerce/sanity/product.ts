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
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
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
                { title: "Electronics", value: "electronics" },
            ]
        }
        
    },
    {
        name:'image',
        title:'Product Image',
        type: 'array',
        of:[{type:'image'}],
        options:{
            hotspot:true

        },

    }

    ]

}





export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name:'title',
            title: 'Title',
            type: 'string'

        },
        {
            name:'price',
            title: 'Prodect Price',
            type: 'number'

        },
        {
            name:'discription',
            title: 'Discription',
            type: 'string'

        },
        {
            name:'image',
            title: 'Prodect image',
            type: 'image'

        },
        {
            name:'category',
            title:'Prodect Category',
            type:'string',
            list:[
                
                    { title: "Mens", value: "mens" },
                    { title: "Womens", value: "womens" },
                    { title: "Kids", value: "kids" },
                    
                
            ]
        }
    ]

}

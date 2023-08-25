import { defineField, defineType } from "sanity";


export default defineType({


    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        defineField( {
            name:'title',
            title: 'Title',
            type: 'string'

        }),
        defineField( {
            name:'price',
            title: 'Prodect Price',
            type: 'number'

        }),
        defineField({
            name:'discription',
            title: 'Discription',
            type: 'string'

        }),
        defineField({
            name:'image',
            title: 'Prodect image',
            type: 'image'

        }),
        defineField({
            name:'category',
            title:'Prodect Category',
            type:'string',
            options:{


                list:[
                    
                    { title: "Mens", value: "mens" },
                    { title: "Womens", value: "womens" },
                    { title: "Kids", value: "kids" },
                ]
            }
                    
                
        })
    ]

})

export default {
    name: 'dish',
    title: 'Dish',
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule: any) => Rule.max(200)
        },
        {
            name: "image",
            title: "Image of the dish",
            type: "image",
        },
        {
            name:"price",
            title:"Price of the dish",
            type:"number",
        }
    ]
}
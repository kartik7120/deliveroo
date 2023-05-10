export default {
    name: 'restaurant',
    title: 'Restaurant',
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
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "image",
            title: "Image of the restaurant",
            type: "image",
        },
        {
            name: "lat",
            title: "Latitude of the restaurant",
            type: "number",
        },
        {
            name: "long",
            title: "Longitude of the restaurant",
            type: "number",
        },
        {
            name: "address",
            title: "Address of the restaurant",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "rating",
            title: "Enter a rating from (1-5 Stars)",
            type: "number",
            validation: (Rule: any) =>
                Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
        },
        {
            name: "type",
            title: "Category",
            validation: (Rule: any) => Rule.required(),
            type: "reference",
            to: [{ type: "category" }]
        },
        {
            name: "dishes",
            title: "Dishes",
            type: "array",
            of: [{
                type: "reference",
                to: [{ type: "dish" }]
            }]
        }
    ]
}
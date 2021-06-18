export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "description",
            type: "text"
        },

        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "client", title: "Client" },
                    { value: "school", title: "School" }
                ],
            },
        },
        {
            name: 'mainImage',
            title: 'Screenshot',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "codeURL",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            }
        }
    ]
}
const formConfig = [
    {
        label: "GENDER",
        name: "gender",
        type: "radio-group",
        child: [
            {
                type: "radio",
                label: "Men",
                value: "Men",
            },
            {
                type: "radio",
                label: "Women",
                value: "Women"
            },
            {
                type: "radio",
                label: "Boys",
                value: "Boys"
            },
            {
                type: "radio",
                label: "Girls",
                value: "Girls"
            }
        ]
    },
    {
        label: "CATEGORIES",
        name: "categories",
        type: "checkbox-group",
        child: [
            {
                label: "Tshirts",
                value: "Tshirts",
            },
            {
                label: "Tops",
                value: "Tops"
            },
            {
                label: "Dresses",
                value: "Dresses"
            },
            {
                label: "Casual Shoes",
                value: "Casual Shoes"
            },
            {
                label: "Shirts",
                value: "Shirts"
            },
            {
                label: "Trousers",
                value: "Trousers"
            },
            {
                label: "Belts",
                value: "Belts"
            },
            {
                label: "Heels",
                value: "Heels"
            },
        ]
    },
    {
        label: "BRAND",
        name: "brand",
        type: "checkbox-group",
        child: [
            {
                label: "Puma",
                value: "Puma"
            },
            {
                label: "Roadster",
                value: "Roadster"
            },
            {
                label: "H&M",
                value: "H&M"
            },
            {
                label: "Dressberry",
                value: "Dressberry"
            },
            {
                label: "Hancock",
                value: "Hancock"
            },
            {
                label: "HRX By Hrithik Roshan",
                value: "HRX by Hrithik Roshan"
            }, {
                label: "HERE&NOW",
                value: "HERE&NOW"
            }
        ]
    },
];

export { formConfig };
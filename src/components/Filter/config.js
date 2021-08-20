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
                value: "tshirts",
            },
            {
                label: "Tops",
                value: "tops"
            },
            {
                label: "Dresses",
                value: "dresses"
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
    {
        label: "PRICE",
        name: "price",
        type: "checkbox-group",
        child: [
            {
                label: "Rs.49 to Rs.50025",
                name: "49-50025"
            },
            {
                label: "Rs.50025 to Rs.10025",
                name: "50025-10025"
            },
            {
                label: "Rs.10025 to Rs.149971",
                name: "10025-149971"
            }
        ]
    },

];

export { formConfig };
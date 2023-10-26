const menu_data = [
    {
        title: 'What we do',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Girls Health and Well-being', link: '/' },
            { title: 'Girls Education', link: '/' },
        ]
    },
    {
        title: 'Projects',
        link: '#',
        mega_menu: true,
        submenus: [
            {
                title: 'Let Her Fund',
                mega_submenu: [
                    { title: 'Supermarket for Kids', link: '' },
                    { title: 'She Inspired Me Family Visits', link: '' },
                    { title: 'She Inspired Me Menstrual and Hygiene Workshops', link: '' },
                ]
            },
            {
                title: 'AquaWear Project',
                mega_submenu: [
                    { title: 'Learn more', link: '/' },
                ]
            },
            {
                title: 'She Inspired Me Scholarship',
                mega_submenu: [
                    { title: 'Learn more', link: '/' },
                ]
            },
        ]
    },
    {
        title: 'About us',
        link: '#',
    },
    {
        title: 'Our podcast',
        link: '#',
    },
]

export default menu_data;
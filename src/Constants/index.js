export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];

export const myProjects = [
    {
        title: 'Isometric-Room',
        desc: 'IDK Man this is literally my room but in Blender',
        subdesc:
            'Made with love :3',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/Blender_Logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Blender',
                path: '/assets/Blender_Logo.png',
            }
        ],
        image: [
            {
                id:1,
                path:"public/assets/IsoRoom/Room_Render_Test.png",
            },
            {
                id:2,
                path:"public/assets/IsoRoom/Room_Render_Test_1.png",
            },
            {
                id:3,
                path:"public/assets/IsoRoom/Room_Render_Test_2.png",
            },
            {
                id:4,
                path:"public/assets/IsoRoom/Room_Render_Test_3.png",
            },
        ],
    },
    {
        title: 'This Portfolio Website',
        desc: "idk man, it's literally what you're looking at",
        subdesc:
            'tell me what you think :)',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Three.js',
                path: '/assets/three_js_logo.png',
            },
        ],
        image: [
            {
                id: 1,
                path:"public/assets/Portfolio/Portfolio_1.png"
            }
        ],
    },
    {
        title: 'Grog-Cold Ones AD',
        desc: 'A sample AD made for the Cold Ones Podcast and YT channel',
        subdesc:
            'While making this portfolio and a lot of the 3d models I was listening to their yt videos in the background so I thought "why not make them a couple rendered ads :)"',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/Blender_Logo.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Blender',
                path: '/assets/Blender_Logo.png',
            }
        ],
        image:[
            {
                id:1,
                path:"public/assets/Grog/0001.png",
            },
            {
                id:2,
                path:"public/assets/Grog/0024.png",
            },
            {
                id:3,
                path:"public/assets/Grog/0059.png",
            },
            {
                id:4,
                path:"public/assets/Grog/0087.png",
            },
        ]
    },
    {
        title: 'GOTI - Get Ovr The Invasion',
        desc: 'An AR experience that I developed with a friend during my internship at OVR',
        subdesc:
            "Built with OVR's propietary sdk in Unity, models made in Blender",
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/GOTI.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: '/assets/unity_logo.png',
            },
            {
                id: 2,
                name: 'Blender',
                path: '/assets/Blender_Logo.png',
            },
        ],
        image: [],
    },
    {
        title: 'Nikka Whisky',
        desc: 'Comercial Render for Nikka Whisky',
        subdesc:
            'I saw a funny meme about Ni**a whisky and wanted to make it :)',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/Blender_Logo.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Blender',
                path: '/assets/Blender_Logo.png',
            },
        ],
        image:[],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'OVR the Reality',
        pos: 'Intern',
        duration: '2024',
        title: "During my studies at IAL Udine, I completed an internship focused on enhancing my 3D modeling abilities and Unity development skills. This practical experience complemented my coursework and provided hands-on training in creating digital assets and interactive applications",
        icon: '/assets/OVR_Logo.jpg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Villaverde Hotel&Resort',
        pos: 'Receptionist',
        duration: '2023',
        title: "Served as Front Desk Receptionist at Villaverde Hotel & Resort, managing guest check-ins/check-outs, handling reservations, and providing exceptional customer service. Efficiently coordinated guest inquiries, managed payment processing, and ensured smooth daily operations while maintaining the highest standards of hospitality.",
        icon: '/assets/Villaverde_logo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'ProLoco San Daniele',
        pos: 'Event Organizer - Tourist Info',
        duration: '2021-2022',
        title: "From theater festivals to local festivities, guided tours and activities for all ages, I aimed to promote our region's beauty and attract visitors while ensuring their enjoyment. With Pro Loco San Daniele's support, I created memorable experiences that fostered community.",
        icon: '/assets/ProSanDaniele_Logo.png',
        animation: 'salute',
    },
];
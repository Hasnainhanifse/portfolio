const name = {
  firstName: "Hasnain",
  lastName: "Hanif",
}

const skills = [
  "Full Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
  "Freelancer",
]

export const homeData = {
    firstName: name.firstName,
    lastName: name.lastName,
    skills
  };

export const aboutData = {
  firstName: name.firstName,
  lastName: name.lastName,
  birthday: "25.12.1993",
  address: process.env.NEXT_PUBLIC_ADDRESS,
  phn: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  serviceLists: skills,
  skills: {
    programming: [
      { name: "Angular", value: "100" },
      { name: "React", value: "100" },
      { name: "Next.js", value: "90" },
      { name: "Ionic", value: "90" },
      { name: "Node.js", value: "90" },
      { name: "Django", value: "70" },
    ],
    language: [
      { name: "English", value: "90" },
      { name: "Urdu", value: "100" },
      { name: "Punjabi", value: "100" },
    ],
  },
  education: [
    { year: "2019 - 2024", unv: "Virtual University Of Pakistan", degree: "Bachelor Of Science In Computer Science (BSCS)" }
  ],
  working: [
    {
      year: "2023 - running",
      company: "BitsnIO Pvt Ltd",
      deg: "Sr. Full Stack Developer | Angular | React | Django | Node.js",
    },
    {
      year: "2021 - 2023",
      company: "Omni App Solutions Pvt Ltd",
      deg: "Front-End Developer | Angular | Ionic | Strencils.js",
    },
    { year: "2020 - 2021", company: "BitsnIO Pvt Ltd", deg: "Front-End Developer" },
    { year: "2014 - 2019", company: "Shifa International Hospital", deg: "Medical Assistant" },
  ],
  partnersLogos: [
    "img/partners/apea-logo.png",
    "img/partners/omni-logo.png",
    "img/partners/tekgenii-logo.png",
    "img/partners/unisync-logo.png",
  ],
};

export const introduction = `My name is <span>Hasnain Hanif.</span> I am a full stack developer, and I'm very passionate and dedicated to my work. With 5 years experience as a professional developer, I have acquired the skills and knowledge related to many tech stacks.`

export const projects = [
  {
    id: 1,
    title: "Unisync Cash App",
    subTitle: "Angular, TailwindCSS",
    banner: "img/portfolio/uni-sync-main-portfolio.png",
    url: "https://www.unisyncgroup.com/",
    description: `
      <p>Unisync Cash App is a middleware application that serves as an interface between a backend system and Bluecherry ERP. This custom service was developed at the request of the Unisync Group to streamline their operations.</p>
      <p>The application features dynamic tables, forms, the ability to import and export XLSX files, and custom validation on imported XLSX files to inform users about correct row and column data.</p>
      <p>I developed this project using Angular, Tailwind CSS, CSS, PrimeNG, ngx-loading-bar, and several other minor libraries.</p>
    `,
    images: [
      "img/portfolio/unisync-1.png",
      "img/portfolio/unisync-2.png",
      "img/portfolio/unisync-3.png",
      "img/portfolio/unisync-4.png",
      "img/portfolio/unisync-5.png",
      "img/portfolio/unisync-6.png",
    ]
  },
  {
    id: 2,
    title: "OClass",
    subTitle: "Angular, Ionic, Stencils",
    banner: "img/portfolio/oclass-main-portfolio.png",
    url: "https://www.oclass.com/",
    description: `
      <p>OClass is an all-in-one class management software system made for dance studios, tuition centers, gyms, and health clubs of all sizes. This web application is built on Angular 15 and ionic 7. It has also mobile version of admin site and client site separately.</p>
      <p>I worked as frontend developer on this product over 1.5 years and built tons of features/components like reports with graphs, schedules on calendars, OPN payment gateway for smooth invoice payments and many more.</p>
    `,
    images: [
      "img/portfolio/oclass-1.png",
      "img/portfolio/oclass-2.png",
      "img/portfolio/oclass-3.png",
      "img/portfolio/oclass-4.png",
      "img/portfolio/oclass-5.png",
      "img/portfolio/oclass-6.png",
    ]
  },
  {
    id: 3,
    title: "Tekgenii",
    subTitle: "Next.js, TailwindCSS",
    banner: "img/portfolio/tekgenii-main-portfolio.png",
    url: "https://www.tekgenii.com/",
    description: `
      <p>Tekgenii Solutions is a software company in California that provides web and mobile application solutions.</p>
      <p>I created this portfolio website as one of my early projects in Angular when I first started learning frontend development. I thoroughly enjoyed working on this project and gained a lot of valuable experience</p>
      <p>To complete this project, I used Next.js, Tailwind CSS, CSS, and the OAS library for animations. This project significantly enhanced my frontend development skills and boosted my confidence in working with Next.js.</p>
      `,
    images: [
      "img/portfolio/tekgenii-1.png",
      "img/portfolio/tekgenii-2.png",
      "img/portfolio/tekgenii-3.png",
      "img/portfolio/tekgenii-4.png",
      "img/portfolio/tekgenii-5.png",
      "img/portfolio/tekgenii-6.png",
    ]
  },
  {
    id: 4,
    title: "APEA",
    subTitle: "Django, React, GraphQL",
    banner: "img/portfolio/apea-main-portfolio.png",
    url: "https://apea.com/",
    description: `
      <p>Advanced Practice Education Associates (APEA) is a IOS/Android app which prepares new nurse practitioners for success on national certification exams by providing impactful evidence-based review courses and study tools
This app is built on React Native and .Net. It has following features.</p>
      <p>1. Download PDF courses and articles</p>
      <p>2. Read live PDF documents</p>
      <p>3. Images gallery and sliders</p>
      <p>4. Video player with updating status of videos while playing</p>
      <p>5. Purchasing subscriptions using stripe payment service provider</p>
      <p>6. Push notifications</p>
    `,
    images: [""]
  },
  {
    id: 5,
    title: "Three You",
    subTitle: "React, TailwindCSS, Firebase",
    banner: "img/portfolio/three-you-main-portfolio.png",
    url: "https://threeyou.com/",
    description: `
      <p>ThreeYou is a social messaging web application to connect users based their past, present and future activities. Users can interact with each other by adding user as friend and they can send messages or create groups.</p>
      <p>This application is build on Next.js, Firebase and TailwindCSS and it has following features.</p>
      <p>1. Realtime messaging</p>
      <p>2. User authentication with social platforms like google, github and facebook.</p>
      <p>3. Post activities and see other users activities.</p>
      <p>4. Update user profile</p>
      <p>5. Dark mode and Light mode theme</p>
    `,
    images: [""]
  }
];

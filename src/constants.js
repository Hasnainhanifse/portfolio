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
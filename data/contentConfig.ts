// contentConfig.ts

export const metaData = {
    title: "Kumail Raza",
    description: "Developer Portfolio of Kumail Raza",
    image: "/images/logos/web-icon.png",
}


export const profileImage = "/images/logos/profile.png"; 

export const headerData = {
  name: "Kumail Raza",
  title: "Software Developer | GIS Engineer",
  location: "Tartu, Estonia",
  locationIcon: "FaMapMarkerAlt",
  description: "Building geospatial solutions that transform data into actionable insights for real-world impact.",
  buttons: [
    {
      text: "Book a Meeting",
      href: "https://calendly.com/mohnark/",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: false,
    },
    {
      text: "Download Resume",
      href: "/docs/cv.pdf",
      className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: true,
    },
    {
      text: "Whatsapp",
      href: "https://wa.me/+37256018191",
      className: "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear inline-block",
      isDownloadButton: false,
    },
  ],
};

export const skills = [
  "GoLang", "Python", "Javascript", "TypeScript", "React.js", "Node.js", "Django",
  "Flask", "PostGIS", "PostgreSQL", "Docker", "Git", "Remote Sensing", 
  "Selenium", "Redis", "Vite", "Linux", "Slack","GDAL", "ArcGIS Pro", "QGIS", "TileDB", "Geoserver"
];

export const education = [
  {
    degree: "Masters in Geoinformatics Engineering",
    school: "Aalto University",
    location: "Finland",
  },
  {
    degree: "Bachelors in Geoinformatics Engineering",
    school: "National University of Science & Technology",
    location: "Pakistan",
  },
];

export const aboutText = [
    `I’m Kumail, a GIS software engineer with a knack for transforming geospatial data into meaningful, real-world solutions. My journey began with spatial data analysis, but it wasn’t long before I found my passion in building full-stack applications that power impactful decisions. I’ve spent years honing my skills in technologies like GoLang, Python, React, and PostGIS, and I love crafting solutions that blend backend efficiency with sleek user interfaces.`,
    `Most recently, I’ve been engineering backend systems at Farmdar, where I integrated GIS technologies to enhance spatial data analysis and developed microservices that scale efficiently. Whether I’m deploying applications on AWS or leading the architecture of key projects, I thrive on solving complex problems and making data actionable.`, 
    `When I’m not coding, you’ll find me hiking or exploring cities. Let's connect and build something extraordinary!`
  ];
  
  export const experience = [
    {
      date: "Sep 2022 - Sep 2024",
      position: "Software Engineer at Farmdar",
      responsibilities: [
        "Developed and maintained backend systems with a focus on scalability and security.",
        "Integrated GIS technologies to enhance mapping and spatial data analysis in applications.",
        "Designed and implemented microservices to improve modularity and performance.",
        "Deployed and managed web applications on AWS, focusing on reliability and scaling."
      ],
      skills: ["GORM", "GeoDjango", "AWS", "PostgreSQL", "GIS", "Remote Sensing"]
    },
    {
      date: "Mar 2022 - Apr 2022",
      position: "Software Engineer at PropSure Pvt Ltd",
      responsibilities: [
        "Collaborated with project managers to design web application UIs.",
        "Developed a RESTful API for road network data using Express.js and PostgreSQL.",
        "Wrote complex SQL queries to calculate routes based on GIS road data."
      ],
      skills: ["Express.js", "PostgreSQL", "RESTful APIs", "GIS"]
    },
    {
      date: "Jan 2020",
      position: "Freelance Software Engineer",
      responsibilities: [
        "Developed custom Web GIS applications and dashboards for telecommunications and real estate sectors.",
        "Automated data collection with web scraping and data mining scripts.",
        "Completed 100+ projects on Fiverr, achieving Level 2 Seller status."
      ],
      skills: ["React.js", "Django", "Web Scraping", "GIS"]
    },
    {
      date: "Jul 2021 - Sep 2021",
      position: "GIS Engineer Intern at DHA Lahore",
      responsibilities: [
        "Acquired and cleaned land parcel data for geospatial projects.",
        "Developed a web application to manage a large database of customers.",
        "Created 3D data visualizations and modeling for urban planning."
      ],
      skills: ["QGIS", "3D Visualization", "GIS"]
    }
  ];
  

export const projects = [
  {
    title: "eSurvey Mobile Application and Web Portal",
    description: "Built for Farmdar: Customisable, pre-loaded crop development activity calendar, with task assignment, scheduling and audit for field managers",
    url: "https://www.farmdar.ai/products",
    stars: null,
    skills: ["GDAL", "GeoDjango", "GoLang", "React", "React Native", "PostGIS"],
    image: "https://cdn.prod.website-files.com/660564e054aa737d07590d3a/6651ac340f292e28497459fc_Farmdar%20iPhone%20Mockup%20Front%20floating%203%20new-p-1600.png",
  },
  {
      title: "Drone Path Mapping - Shapely",
      description: "Calculating and Mapping drone paths using shapely and Greedy Salesman",
      url: "https://github.com/mohnark/drone-path-mapping-shapely",
      stars: null,
      skills: ["GDAL", "Python", "Shapely"],
      image: "https://raw.githubusercontent.com/mohnark/drone-path-mapping-shapely/refs/heads/main/output_sc.JPG",
    },

    // Add more projects here
  ];

  export const repoLink = "https://github.com/mohnark?tab=repositories";

export const posts = [
    {
      year: "Mar 6, 2023",
      title: "How to Draw Polygons on Mobile using React Native Maps",
      url: "https://medium.com/@kumail09/drawing-polygons-using-react-native-maps-e9ce23a34d72",
      thumbnail: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*alQlr1wKkhck9AvhT-Swcw.png"
    },
  ];
  


export const footerData = {
    text: [
      'Crafted with care in Figma and brought to life with Visual Studio Code.',
      'Powered by Next.js and Tailwind CSS, hosted on Vercel.',
      'Typography styled with the elegant Inter font.',
    ],
    socialLinks: [
      { href: 'https://github.com/aaqibmehrban', icon: 'FaGithub' },
      { href: 'https://www.linkedin.com/in/aaqibmehrban', icon: 'FaLinkedin' },
      { href: 'https://x.com/rajaaaqib775', icon: 'FaSquareXTwitter' },
      { href: 'https://instagram.com/aaqibmehrban', icon: 'FaInstagram' },
      { href: 'mailto:rajaaaqib775@gmail.com', icon: 'FaEnvelope' },
      { href: 'https://fiverr.com/aaqibmehrban', icon: 'TbBrandFiverr' },
      { href: 'https://www.upwork.com/freelancers/~0181468059aaa92204?mp_source=share', icon: 'FaSquareUpwork' },
    ],
  };

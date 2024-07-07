interface Technologies {
  top: string[];
  additional: string[];
}

export interface WorkItem {
  link: string;
  org?: string;
  year?: string | number;
  sort?: number;
  title: string;
  menu?: string;
  thumbnail?: string;
  thumbnailOrientation?: string;
  classNames?: string;
  published: boolean;
  tasks?: string[];
  technologies?: Technologies;
  summary?: string;
}

type WorkItems = WorkItem[];

export default [
  {
    link: "/work/study-it/",
    org: "The Ministry of Education",
    year: "2019",
    sort: 1,
    title: "StudyIt",
    menu: "work",
    thumbnail: "/work-media/studyit-phone.jpg",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Tech Lead", "Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["Vue", "GraphQL", "Discourse"],
      additional: [
        "RamdaJS",
        "SCSS",
        "SilverStripe",
        "PHP",
        "CircleCI",
        "JavaScript",
      ],
    },
    summary: "A Study platform for NCEA Students",
  },
  {
    link: "/work/aviation-ipad-app/",
    org: "MetService",
    year: 2013,
    sort: 5,
    title: "Aviation iPad App",
    published: false,
    thumbnail: "/work-media/aviationIpad1.png",
    thumbnailOrientation: "portrait",
    tasks: ["UX Design", "Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["Objective C", "Java"],
      additional: [],
    },
    summary: "A B2B aviation weather iPad app for commercial pilots.",
  },
  {
    link: "/work/channel-fireball-marketplace/",
    org: "CFB Group / BinderPOS",
    year: "2020-2022",
    sort: 1,
    title: "ChannelFireball Marketplace",
    menu: "work",
    thumbnail: "/work-media/cfb-marketplace-desktop.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev", "UX and UI design"],
    technologies: {
      top: ["React", "TypeScript", "Strapi"],
      additional: [
        "GraphQL (Apollo)",
        "RamdaJS",
        "SCSS",
        "React testing library",
        "Keycloak",
      ],
    },
    summary: "A marketplace for leading Trading Card Games",
  },
  {
    link: "/work/cite-this/",
    title: "CiteThis",
  },
  {
    link: "/work/community-matters/",
    title: "Community Matters",
  },
  {
    link: "/work/ecc/",
    org: "Solnet - for MBIE",
    year: "2014",
    sort: 5,
    title: "Employee cost calculator",
    menu: "work",
    thumbnail: "/work-media/ECC-Thumbnail2.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["AngularJS", "JavaScript", "SCSS"],
      additional: ["Java"],
    },
    summary: "An interactive tool for businesses.",
  },
  {
    link: "/work/farm-source/",
    org: "Solnet - for Fonterra",
    year: "2013-2015",
    sort: 5,
    title: "Farm Source",
    menu: "work",
    thumbnail: "/work-media/FarmSourceThumbnail.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev"],
    technologies: {
      top: ["AngularJS", "SilverStripe", "JavaScript"],
      additional: ["CSS", "PostgresSQL", "PHP", "Jasmine", "Jenkins"],
    },
    summary: "A complete rebuild of Fonterra's online farmer portal.",
  },
  {
    link: "/work/farm-source-jobs/",
    org: "Solnet - for Fonterra",
    year: "2014",
    sort: 2,
    title: "Farm Source Jobs",
    thumbnail: "/work-media/FSJobsThumbnail.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev"],
    technologies: {
      top: ["JavaScript", "CSS", "SilverStripe"],
      additional: ["PHP", "Jasmine", "JQuery"],
    },
    summary: "A digital employment platform for the dairy industry.",
  },
  {
    link: "/work/lux-toggle/",
    title: "Lux Toggle",
  },
  {
    link: "/work/meridian-energy/",
    title: "Meridian Energy",
  },
  {
    link: "/work/metconnect/",
    org: "MetService",
    year: "2012",
    sort: 5,
    title: "MetConnect International",
    menu: "work",
    thumbnail: "/work-media/metconnectThumbnail.jpg",
    thumbnailOrientation: "landscape",
    classNames: "work--met",
    published: true,
    tasks: ["UX Design", "Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["JQuery", "Java", "CSS"],
      additional: ["HTML", "MySQL", "Cucumber", "Jasmine"],
    },
    summary: "A commercial weather platform",
  },
  {
    link: "/work/school-leavers-toolkit/",
    org: "The Ministry of Education",
    year: "2018-2019",
    sort: 2,
    title: "School Leavers Toolkit",
    menu: "work",
    thumbnail: "/work-media/sltk-phone.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Tech Lead", "Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["Vue", "Algolia", "SilverStripe", "PHP"],
      additional: ["SCSS", "CircleCI", "JavaScript"],
    },
    summary: "A collection of resources for teachers",
  },
  {
    link: "/work/the-hub/",
    org: "SilverStripe - for Superu",
    year: "2017-2018",
    sort: 2,
    title: "The Hub",
    menu: "work",
    thumbnail: "/work-media/hub-phone.png",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["SilverStripe", "JavaScript", "Vue", "PHP"],
      additional: ["SCSS"],
    },
    summary:
      "A catalog of NZ Government funded social science research publications",
  },
  {
    link: "/work/trustees/",
    org: "Solnet - for Trustees Executors",
    year: "2017",
    sort: 5,
    title: "Trustees Webapp",
    menu: "work",
    thumbnail: "/work-media/Trustees-Account.jpg",
    thumbnailOrientation: "portrait",
    published: true,
    tasks: ["Frontend Dev", "Backend Dev"],
    technologies: {
      top: ["React", "Node", "TypeScript"],
      additional: [
        "Hapi",
        "RamdaJS",
        "PostCSS",
        "Relay",
        "SOAP",
        "SQL",
        "Jest",
      ],
    },
    summary: "A wealth management with a modern user experience.",
  },
] as WorkItems;

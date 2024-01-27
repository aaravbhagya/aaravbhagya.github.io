// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'aaravbhagya', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'My Engineering Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['aaravbhagya/gitprofile', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'EagleSway',
          description:
            'A wooden hand-crank "toy" with instructions to set up, pre-laser cut items, and a detailed project report. Utilized teamwork, contribution skills, organization, and proper time budgeting.',
          imageUrl:
            'https://i.ibb.co/2tfjg9f/Screenshot-2024-01-23-174258.png',
          link: 'https://docs.google.com/document/d/1dpc6S5n4N8c2u7tVVHLey5-790Vqvjbcw6wBiLUfR9o/edit?usp=sharing',
        },
        {
          title: 'Podcast on Smartphones',
          description:
            'An intuitive dive into the history of the smartphone, as well as brainstormed solutions on how to make it better. Built using time management, brainstorming sessions, organization, and research ethics.',
          imageUrl:
            'https://www.creativefabrica.com/wp-content/uploads/2022/04/20/Illustration-Graphic-of-Microphone-icon-Graphics-29305865-1.jpg',
          link: 'https://drive.google.com/drive/folders/18wVY_-C08EvvhEPoDI0C5niyLfXytu8k?usp=sharing',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aarav Bhagya',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '@aaravbhagya',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '@aaravbhagya',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '925-922-5756',
    email: 'aaravbhagya@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/14cJdf9sQb6Pn13kCgR3VQ6YdknIKDOix/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'cmd',
    'AutoDesk Inventor',
    'Node.js',
    'Git',
    'HTML',
    'TypeScript',
    'Laser Cutting',
    'Tutoring',
    'Model UN (1+ years)',
    'Tennis (11+ years)',
    'Swim Team (2+ years)',
    'Public Forum Debate (3+ years)',
    'Speech (2+ years)',
    'Spanish',
    'Hindi',
  ],
  experiences: [
    {
      company: 'Software engineering has been a dream career since childhood, sparked by the blend of creativity and problem-solving it offers to improve life. Growing up surrounded by family members who are software engineers has not only given me a firsthand look into the field but has also instilled in me a deep appreciation for the impact and innovation it brings.',
      position: 'Software',
      from: 'Interest Beginning: January 2015',
      to: 'Present',
      companyLink: 'https://www.coursera.org/articles/software-engineer',
    },
    {
      company: 'My debate experience has interested me in workplaces involving immense communication and critical thinking processes, and I like to stay around technical areas like corporations because of my previous familiarity with technology and software development.',
      position: 'Corporate Lawyer',
      from: 'Interest Beginning: May 2021',
      to: 'Present',
      companyLink: 'https://www.indeed.com/career-advice/finding-a-job/what-do-corporate-lawyers-do',
    },
    {
      company: 'I have been interested since childhood in the medical industry, specifically neurology. Becoming a surgeon like my relatives is an inspiration and motivation to compete in a saturated education that the health department requires. These surgeons are respectable people, with lots of wisdom and experience.',
      position: 'Neurosurgeon',
      from: 'Interest Beginning: July 2017',
      to: 'Present',
      companyLink: 'https://my.clevelandclinic.org/health/articles/22364-neurosurgeon',
    },
  ],
  certifications: [
    {
      name: 'Law School (A.K.A The Bar)',
      body: '3-4 years of schooling',
      year: 'Goal: 2042-2052',
      link: 'https://www.calbar.ca.gov/Admissions/Law-School-Regulation/Law-Schools',
    },
    {
      name: 'Med School',
      body: '3-7 years of schooling',
      year: 'Goal: 2045-2055',
      link: 'https://www.usnews.com/best-graduate-schools/top-medical-schools',
    },
  ],
  educations: [
    {
      institution: 'Foothill High School',
      degree: 'Diploma',
      from: 'Expected: 2023',
      to: '2027',
    },
    {
      institution: 'Pleasanton Middle School',
      degree: 'None',
      from: '2020',
      to: '2023',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'aaravbhagya', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3838081',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'black',
      'night',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

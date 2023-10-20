const resumeData = {
    name: 'Ibrahima Capo-Chichi',
    tagline: 'Web Developer',
    contact: {
      address: '1970 East Main Street | Bridgeport, CT 06610',
      phone: '203.508.3675',
      email: 'ibrajccc@gmail.com',
      github: 'https://github.com/icapochi',
    },
    education: [
      {
        degree: 'Bachelor of Science',
        institution: 'University of Connecticut',
        location: 'Storrs, CT',
        date: 'Jan ‘22 - May ‘25',
      },
      {
        degree: 'Associate of Arts',
        institution: 'Housatonic Community College',
        location: 'Bridgeport, CT',
        date: 'Jan ‘20 - Dec ‘21',
      },
    ],
    technicalSkills: [
      'Java', 'Javascript', 'Lua', 'Thymeleaf', 'ReactJS', 'Spring Boot', 'Bootstrap 5', 'JDBC', 'Git/GitHub',
      'Python3', 'HTML', 'CSS', 'JSX', 'SQL', 'MySQL', 'Chakra UI', 'Supabase', 'React Native', 'React-Bootstrap 5',
      'cvs2git', 'Tableau', 'Scheme',
    ],
    experience: [
      {
        company: 'ISO New England',
        location: 'Holyoke, MA',
        date: 'Jun ‘23 - Dec ‘23',
        position: 'Energy Management Systems Intern',
        description: 'Created on-call dashboard for staff to perform daily system checks through an internal SPA website, optimizing the process by at least 60%. Spring MVC, Spring Boot, and JDBC to establish backend connections to an Oracle Database and perform the needed SQL queries and operations with a layered design pattern. Thymeleaf and Bootstrap 5 were used to display information on the user’s end. Performed code migration from a CVS (Concurrent Versions System) repository to a Git/Bitbucket repository.',
      },
      {
        company: 'Google Computer Science Summer Institute',
        location: 'Bridgeport, CT',
        date: 'Jul ‘19 - Aug ‘19',
        position: 'CodeDiary - Developer',
        description: 'Worked in a team to create a website for coders to share code snippets. Website front and back end built with HTML, CSS, Python, App Engine, Command Line, MVC, and GitHub',
      },
      {
        company: 'Independent Study',
        location: 'Bridgeport, CT',
        date: 'Aug ‘18 - Jan ‘19',
        position: 'Student',
        description: 'Learned to create a mobile application to help students learn how to divide fractions using Lua and Corona SDK. Used Euclid’s method to find greatest common factor from a pair or group of numbers to allow the program to derive the solution faster and provide steps towards the solution per empty line submitted.',
      },
    ],
    projects: [
      {
        name: 'GoalTac',
        role: 'Developer',
        description: 'Working in a team to create a way to make incentivize completing goals by gamifying todo lists in a web app. Chakra UI, React, JSX, and Javascript were used to create a responsive and comfortable user interface. Supabase is used to prepare a relational database with Postgres and to authenticate users.',
      },
      {
        name: 'Trulia Realty Web Scraper',
        role: 'Developer',
        description: 'Gathered and sorted information from Trulia.com into a CSV file. Used Python 3 and BeautifulSoup to pull information on houses for sale and optimized code by creating a functional draft, then making adjustments based off page structure, duplicate information, and navigating mismatched data on Trulia.com allowing it to run 198% faster, without errors. Applied merge sort algorithm to sort houses based on their prices in a house collection class of house classes. This included using python’s underscore methods to give house objects a comparable value which were then stored in a csv file.',
      },
    ],
    competitions: [
      {
        name: 'OTIS Elevator Hackathon',
        location: 'Storrs, CT',
        date: 'Year',
        result: '2nd Place Winner',
        details: 'Worked in a team of 3 to create a robot design based on external research and data provided by preexisting APIs to improve the efficiency of maintenance processes for specific elevator models.',
      },
      {
        name: 'HackUConn 2022',
        location: 'Storrs, CT',
        date: 'Year',
        result: '1st Place Winner',
        details: 'Worked in a random team of 5 to create and present the idea of using VR, AI, and Data Science to improve behavioral and emotional therapy diagnosis and analysis practices.',
      },
    ],
    extracurricular: [
      {
        name: 'HackUConn 2023 Tech Team',
        location: 'Storrs, CT',
        date: 'Feb ‘23 - Mar ‘23',
        role: 'Team Member',
        details: 'Maintained and updated https://hackuconn.com/ with react-bootstrap v5. Assisted in HackUConn 2023 event hosting.',
      },
      {
        name: 'Husky Developers Club',
        location: 'Storrs, CT',
        date: 'Jan ‘22 - Present',
        role: 'Treasurer',
        details: 'Position focuses on requesting funding to support equipment and competitions, teaching web development and software engineering practices with weekly workshops teaching concepts such as React JS+Native frameworks, HTML, Javascript, Supabase, and other front/back end technologies.',
      },
    ],
    aboutMe: 'I am a passionate web developer with a strong background in computer science. I enjoy working on innovative projects and collaborating with a team to bring ideas to life. My skills include Java, JavaScript, ReactJS, Spring Boot, and more.',
    specialInterests: 'In addition to coding, I have a keen interest in exploring new technologies and participating in hackathons. I believe in continuous learning and staying updated with the latest trends in the tech industry.',
  };
  
  export default resumeData;
  
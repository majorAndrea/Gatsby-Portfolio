import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrea Marloni', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Andrea',
  subtitle: 'I am a Web Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I am a web developer and I'm proficient with both back-end and front-end technologies.",
  paragraphTwo:
    'I have one year of experience in back-end development and more than one year of experience in front-end development. I studied on Treehouse, Linkedin Learning, and some of the best courses on Udemy and I am a Zero To Mastery student. I have taken the famous CS50 course several times and also completed some of their problem sets.',
  paragraphThree:
    "I'm really passionate about this world of web development and I'm always hungry for learning new things. My strongest skill is learning by doing, I can grasp new concepts very quickly while working on projects, and I spend a lot of time doing practice.",
  resume: 'https://docdro.id/pVGc6BH', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_1.jpg',
    title: 'Blog Demo',
    info: 'This is my first full-stack web dev project.In this blog, users can publish their own posts and users can comment on posts. Once the post is created, the owner can then change everything: image, title, text, and can delete the post. Posts can optionally have a "Location" field and if the user writes some real-world place (like "New York") then on the Post show page will appear a mini-map displaying the geolocated position. Users have their own profiles and dashboard and they can edit their biography, avatar image, birth date, and username. And users can change their password if forgotten it via email API.',
    info2:
      'NOTE: Check the Github repository for more information about the Tech used in this project and to have testing credentials to test the WebApp.',
    url: 'https://am-blog-demo.herokuapp.com/',
    repo: 'https://github.com/majorAndrea/Blog-Demo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_2.jpg',
    title: 'E-Commerce',
    info: 'In this e-commerce WebApp users have two ways of doing the login, via Google or normal form registration. Then users can choose some product and also review them with a five stars system, add them to the cart and then review the order on a checkout page, after completing all the steps for the shipment details. And then completing the order via the PayPal payment method. Once the payment is successfully completed, the user will be redirected to a checkout confirmation page with the order summary and some other information. And the order details are stored on firestore db.',
    info2: '',
    url: 'https://am-ecommerce.netlify.app',
    repo: 'https://github.com/majorAndrea/E-Commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_4.jpg',
    title: 'Natours',
    info: 'A modern and responsive landing page for a fictional company called Natours. Built only with HTML, SASS, and following the BEM methodology for class names.',
    info2: 'This is one of the projects I made by following the Advanced CSS and SASS course on Udemy. I have learned some very useful tricks about both CSS and SASS by working on this project, and I have added some tweaks and improvements on my own.',
    url: 'https://majorandrea.github.io/Natours/',
    repo: 'https://github.com/majorAndrea/Natours', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_3.jpg',
    title: 'Landing Page',
    info: 'This is the first website I ever made, with only javascript, html5, and CSS. Is a pretty static website so there is not much functionality (and this is my first ever project after all). And I tried to make it very accessible.',
    info2: 'Developed 3-4 years ago.',
    url: 'https://majorandrea.github.io/Landing-Page/',
    repo: 'https://github.com/majorAndrea/landing-page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact me? Send me an Email!',
  btn: 'Email',
  email: 'majorandry@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/majorandry',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrea-marloni/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/majorAndrea',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

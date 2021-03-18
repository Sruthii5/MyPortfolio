// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import grocery from "./images/grocery.jpg"
import spotify from "./images/spotify.jpg"
import instagram from "./images/instagram.jpg"
import Java from "./images/java.svg"
import redux from "./images/redux.svg"
import disk from "./images/disk.jpg"
// Social Icon
import githubIcon from "./images/github.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"
import LinkedInIcon from "./images/LinkedIn.svg"
import Skills from "./components/skills"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Sruthii Reddi Thukkani",
  headerTagline: [
    //Line 1 For Header
    "I am a developer,",
    //Line 2 For Header
    "I love to build",
    //Line 3 For Header
    // "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "I can solve ",
  headerParagraph1:"all some one of your",
  headerParagraph2: "problems, Ok?",

  //Contact Emailom
  contactEmail: "sthukkani@hawk.iit.edu",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Instagram-Clone", //Project Title - Add Your Project Title Here
      para:
        "Cloned the features of popular social media app Instagram using React JS, Hooks, Material-UI, Firebase", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        instagram,
      //Project URL - Add Your Project Url Here
      url: "https://instagram-clone-38c5f.web.app/",
      giturl:"https://github.com/Sruthii5/Instagram-Clone",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Spotify-Clone", //Project Title - Add Your Project Title Here
      para:
        "Cloned the spotify app using React JS,Context API (Redux),Material Ui, Spotify API, User Authentication", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        spotify,
      //Project URL - Add Your Project Url Here
      url: "https://spotify-clone-3443f.firebaseapp.com",
      giturl:"https://github.com/Sruthii5/SPOTIFY_CLONE_APP",
    },
    
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "EAT-FRESH", //Project Title - Add Your Project Title Here
      para:
        "The application is an online grocery hub that recommends products to its users based on their food preference and their selected store. A customer can search for a product using the autocomplete search feature, view products on sale, view the top reviewed products, select products that are currently trending on twitter or filter products by category and subcategory.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:grocery,
        //Project URL - Add Your Project Url Here
      url: "https://github.com/Sruthii5/EAT-FRESH",
      giturl:"https://github.com/Sruthii5/EAT-FRESH",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "DISk-BENCHMARKING", //Project Title - Add Your Project Title Here
      para: 
        "Cloud Benchmarking tool is written in C and can be used to measure the disk throughput for sequential and random read/write operation.",
      //  Project Image - Add Your Project Image Here
      imageSrc: disk,
        // Project URL - Add Your Project Url Here
      url: "https://github.com/Sruthii5/Cloud-Benchmarking",
      giturl:"https://github.com/Sruthii5/Cloud-Benchmarking",
    },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am a Master's student in Computer Science at the Illinois Institute of Technology, Chicago with an insatiable hunger and passion for learning and working on new things in technology which have the potential of benefiting millions around the world.",
  aboutParaTwo:
    "I have a deep interest in Web, Cloud computing and applied Machine Learning. I have a Strong programming background and experience in Machine learning techniques, Object Oriented languages like Java & Python, AWS and full stack web technologies.",
  aboutParaThree:
    "I have a plethora of personal projects which attempts to bring benefits of generalization of Machine learning to the end users via Web, and pluggable libraries.This not only demonstrates my willingness to dive head first into unexplored things and challenge myself but also my ability to quickly adapt to any technology and environment. ",
  aboutParaFour:
    "Short-term goal: I am looking for full time opportunities which allow me to apply my experience and provide an environment for me to learn; I have a diverse profile and am open to pick up new technologies.",
  aboutParaFive:  
    "Long-term goal: Make technology more accessible, especially to women. I believe technology can be a game changer if it is accessible to all.",
  
  aboutParaSix:
    "All-time goal: Keep learning, always!",
    // aboutImage:
  //  "aboutme",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: Java,
      
    },
    
    {
      id: 2,
      img: htmlIcon,
      
    },
    {
      id: 3,
      img: cssIcon,

    },
    {
      id: 4,
      img: jsIcon,
    
    },
    {
      id: 5,
      img: reactIcon,
    },
    {
      id: 6,
      img: redux,
      
    },
  //   {
  //     id: 7,
  //     img: designIcon,
      
  //  },
  //   {
  //     id: 8,
  //     img: codeIcon,
  //     para: "I love to Code!",
    
  //   },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/Sruthii5" },
  
    {
      img: LinkedInIcon,
      url: "https://www.linkedin.com/in/sruthiithukkani/",
    }, 
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

import { MdLocalPhone, MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
const EnglishContent = {
  nav: {
    title: { title: "projectName", image: "/logo.svg", link: "/" },
    menu: [
      { title: "Home", link: "/" },
      { title: "Browse Jobs", link: "/jobs" },
      { title: "Canditates", link: "/canditates" },
      { title: "Contact US", link: "/contact" },
      { title: "Blog", link: "/blog" },
      { title: "Sign In", link: "/signin" },
      { title: "Sign Up", link: "/login" },
    ],
  },
  footer: {
    Employers: [
      { title: "Browse Candidates", link: "/" },
      { title: "Post a job", link: "/" },
      { title: "Employer Listing", link: "/" },
      { title: "Resume Page", link: "/" },
      { title: "Dashboard", link: "/" },
      { title: "Job Packages", link: "/" },
    ],
    Jobs: [
      { title: "Submit Resume", link: "/" },
      { title: "Dashboard", link: "/" },
      { title: "Browse Categories", link: "/" },
      { title: "My Bookmarks", link: "/" },
      { title: "Candidate Listing", link: "/" },
    ],
    Account:[
      {title:"My Account",link:"/"},
      {title:"Create Account",link:"/"},
      {title:"Checkout",link:"/"},
      {title:"Sign In",link:"/"},
    ],
    question:[
      {icon:<GiPositionMarker/>,title:"203 Fake St. Mountain View, San Francisco, California, USA",link:"/"},
      {icon:<MdLocalPhone/>,title:"+93765853016",link:"/"},
      {icon:<MdEmail/>,title:"Rohullah.sarabi313@gmail.com",link:"/"}
    ]
  },
};

export default EnglishContent;

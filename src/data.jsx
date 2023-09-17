import vanlife from './assets/images/vanlife.png'
import quizzical from './assets/images/quizzical.png'
import travelJournal from './assets/images/travelJournal.png'
import watchlist from './assets/images/watchlist.png'
import dogsTinder from './assets/images/dogsTinder.png'
import restaurant from './assets/images/restaurant.png'
import {FaGraduationCap, FaGlobeEurope} from "react-icons/fa"
import { SiScrimba } from "react-icons/si"

export const certificates = [
    {
        icon: <FaGraduationCap className="cert-icon"/>,
        title: "Bachelor in Software Engineering",
        content: "With a full scholarship, I graduated in February 2023 with a 3.1/4 GPA, after completing five years of college.",
        num: "01"
    },
    {
        icon: <FaGlobeEurope className="cert-icon"/>,
        title: "Erasmus+ student exchange certificate",
        content: "In February 2020, I enrolled in the Erasmus+ student exchange program to study for a semester in Poland.",
        num: "02"
    },
    {
        icon: <SiScrimba className="cert-icon"/>,
        title: "'Frontend career path' certificate",
        content: "by September 2023, I completed a six-month online course on the Scrimba platorm to learn and excell in web development.",
        num: "03"
    }
]

export const reactApps = [
    {
        name: "#VANLIFE",
        description: "Vanlife was my first big project, I had a LOT of practice with react router 6 with it, as well as some other nice features.",
        link: "https://vanlife-laila19t.netlify.app/",
        image: vanlife
    },
    {
        name: "Quizzical",
        description: "Quizzical was a big learning curve for me, I got to practice several React hooks that were alot of fun.",
        link: "https://quizzical-laila19t.netlify.app/",
        image: quizzical
    },
    {
        name: "Travel Journal",
        description: "Travel journal was a big help in learning how to use react components, and the concepts of composability and reusability.",
        link: "https://travel-journal-laila19t.netlify.app/",
        image: travelJournal
    },
]

export const vanillaJSApps = [
    {
        name: "Movie Watchlist",
        description: "Movie watch is a project that made me practice local storage, third party API calls, promises, and data manupilation.",
        link: "https://movie-watchlist-laila19t.netlify.app/",
        image: watchlist
    },
    {
        name: "Tinder for dogs",
        description: "I had a lot of laughs while making this project, but overall it really helped me understand the concept of classes and objects in JavaScript.",
        link: "https://tindog-laila19t.netlify.app/",
        image: dogsTinder
    },
    {
        name: "Restaurant ordering app",
        description: "Working with this small web app helped me learn all about event.target, dealing with forms, and having multiple reactive components on the screen.",
        link: "https://restaurant-laila19t.netlify.app/",
        image: restaurant
    },
]

export const skills =["React", "JavaScript", "HTML", "CSS", "Firebase", "Flutter/Dart","Python","UI/UX Design"]
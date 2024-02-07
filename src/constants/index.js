import { map, alert, assessment, facebook, instagram, twitter } from '../assets/icons'



export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/solutions", label: "Solution" },
    { href: "/contact-us", label: "Contact Us" },
];

export const services = [
    {
        imgURL: map,
        label: "Report Incident",
        subtext: "A user-friendly form enabling the reporting of incidents, with options to select incident types (e.g., pollution, fire)."
    },
    {
        imgURL: alert,
        label: "Incident Map",
        subtext: "Interactive map displaying reported incidents"
    },
    {
        imgURL: assessment,
        label: "Community Alerts",
        subtext: "Get instant alerts on ongoing incidents with customizable settings based on your preferences and location."
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "About Us",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },

        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Dina Iyanuloluwa", link: "iyanudina@gmail.com" },
            { name: "Donate to the founder", link: "/" },
        ],
    },
];
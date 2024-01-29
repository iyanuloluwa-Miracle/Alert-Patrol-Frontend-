import { map,alert, assessment } from '../assets/icons'



export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#solutions", label: "Solution" },
    { href: "#contact-us", label: "Contact Us" },
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
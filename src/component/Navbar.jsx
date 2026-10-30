import { useState, useEffect } from "react";
function Navbar(){
    const [activeSection, setActiveSection] = useState("home");

     useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
                }
            });
            },
            {
            threshold: 0.3,
            }
        );

        const sections = document.querySelectorAll(
            "#home, #about, #projects, #opensource, #contact"
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
        }, []);

    return(
        
        <section className="navbar">
            <h2 className="logo">Extreem.Dev</h2>
            <div>
                <ul className="links">
                    <li><a  className={activeSection === "home"?"active" : ""} href="#home">Home</a></li>
                    <li><a className={activeSection === "about" ? "active" : ""} href="#about">About</a></li>
                    <li><a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a></li>
                    <li><a className={activeSection === "opensource" ? "active" : ""} href="#opensource">OSC</a></li>
                    <li><a  className={activeSection === "contact" ? "active" : ""} href="#contact">Contact</a></li>
                </ul>
            </div>
        </section>
    )
}
export default Navbar;
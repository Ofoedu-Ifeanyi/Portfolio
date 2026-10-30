function Projects(){

    const myProject = [
        {
            id: 1,
            name: "Weather App",
            description:"A weather application that fetches weather data from an API and displays temperature, humidity, and wind speed",
            technology: "Technologies: React, JavaScript, CSS, API",
            liveLink: "https://weather-app-omega-blond-78.vercel.app/",
            repository: "https://github.com/Ofoedu-Ifeanyi/Weather-App"
        },
        {
            id: 2,
            name: "Nexus-saas-Dishboard",
            description : "A web-based analytics application built using React and TypeScript. It provides a centralized interface for monitoring business performance, analyzing revenue, managing customers, and configuring application settings.",
            technology: "Technologies:  CSS3, React, TypeScript, vite, React Router, Recharts, React Icons, Git and GitHub, vercel",
            liveLink: "https://vercel.com/extreem/nexus-saa-s-dashboard",
            repository: "https://github.com/Ofoedu-Ifeanyi/Nexus-SaaS-Dashboard"
        },
        {
            
            id: 3,
            name: "TodoList App",
            description : "A task management application built using React and JavaScript. It helps users organize daily activities by adding tasks, marking them as completed, deleting tasks, and assigning due dates.",
            technology: "Technologies: React · JavaScript · Vite · CSS3 · HTML5 · Browser localStorage · Git · GitHub",
            liveLink: "https://vercel.com/extreem/todo-list",
            repository: "https://github.com/Ofoedu-Ifeanyi/Todo-list"
        }
    ]
    return(
        <section id="projects" className="projects">
            <h2 className="projects__title">My Projects</h2>

            <p className="projects__description">
                Here are some projects i built while improving my frontend
                development skills.
            </p>

            <div className="projects__list">
                {myProject.map((Project) =>(
                <div className="projects__item" key={Project.id}>
                    {/* <img
                        src=""
                        alt="Screenshot of my Weather App"
                        className="projects__image"
                    /> */}
                    <h3>{Project.name}</h3>
                    <p>
                       {Project.description}
                    </p>
                    <p>{Project.technology}</p>
                    <a 
                    className="project_link"
                    href={Project.repository}
                    target="_blank"
                    rel="noreferrer"
                    >view-code</a>
                    <a 
                    className="github-view" 
                    href={Project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    >Live-link</a>
                </div>
                ))}
            </div>
        </section>
    )
}
export default Projects;
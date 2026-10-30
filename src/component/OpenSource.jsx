import { ExternalLink } from "lucide-react";
function OpenSource() {
    
    const openSourceProjects = [
    {
        id: 1,
        name: "Meridian",
        description:
        "Redesign wallet picker to always open on click",
        technologies: "TypeScript, Rust, HTML, javaScript, css, Shell, Vue",
        repository: "https://github.com/drydocs/meridian",
        liveLink: "https://usemeridian.vercel.app/",
    },
    {
        id: 2,
        name: "Hamplard-Hub/Hamplard-frontend",
        description: "Implemented the signup/registration page.",
        technologies: "TypeScript, css, JavaScript",
        repository: "https://github.com/Hamplard-Hub/Hamplard-frontend",
    },
    ];

  return (
    <section id="opensource" className="opensource">
      <h2 className="opensource__title">
        Open-Source Contributions
      </h2>

      <p className="opensource__description">
        I contribute to open-source projects, collaborate with
        developers, and work on improving real-world applications.
      </p>
        <div className="opensource__list">
            {openSourceProjects.map((project) => (
            <div className="opensource__item" key={project.id}>
                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <p className="opensource__technologies">
                {project.technologies}
                </p>

                <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="opensource__link"
                    >
                    View Repository
                </a>
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="opensource__lifelink"
                    >
                    <ExternalLink size={15}/>
                </a>
            </div>
            ))}
        </div>
    </section>
  );
}

export default OpenSource;


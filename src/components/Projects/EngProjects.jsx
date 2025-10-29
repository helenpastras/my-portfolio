import './Projects.css'

const projects = [
  { name: 'RippleSearch', description: 'Filterable external API search with bookmarking.' },
  { name: 'SkillSwap', description: 'Modular React app for community skill trading.' },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects h2">Projects</h2>
      <div className="project-grid">
        {projects.map(({ name, description }) => (
          <div key={name} className="project-card">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import './Spotlight.css'

const highlights = [
  {
    title: 'Truss',
    description: 'Led multi-department civic tech collaborations with the US Government.',
  },
  {
    title: 'Shopify',
    description: 'Recovered $4.2M+ in potential losses by solving retention weaknesses.',
  },
];

export default function Spotlight() {
  return (
    <section className="spotlight">
      <h2 className="spotlight-heading">Spotlight Experience</h2>
      <div className="spotlight-grid">
        {highlights.map(({ title, description }) => (
          <div key={title} className="spotlight-card">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
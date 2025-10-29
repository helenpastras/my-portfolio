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
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Spotlight Experience</h2>
      <div className="grid gap-6">
        {highlights.map(({ title, description }) => (
          <div key={title} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
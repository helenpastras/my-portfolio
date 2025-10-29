import './About.css';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-heading">Product Evangelist & Innovator</h1>
        <p className="hero-subtext">
          Remote-first, people-first product leader with 12+ years of experience across B2C/B2B, SaaS, IaaS, and PaaS. I build joyful, strategic products and empower teams to thrive.
        </p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="about-heading">TL;DR Summary of My Career</h2>
        <ul className="about-list">
          <li>
            <strong>Versatile Experience:</strong> Extensive background in growing products and creating new experiences for users, from pre-product/market fit to hyper-growth and integration with sales-led environments.
          </li>
          <li>
            <strong>Sample Highlights:</strong>
            <ul>
              <li>At Truss: Led multi-month civic tech pilots with the U.S. Government, expanded contracts, and helped grow the business.</li>
              <li>At Shopkick: Improved product discovery with ML and UX, boosting conversions by 30–40%.</li>
              <li>At Shopkick: Directed launch of new Trax revenue stream, projected to boost 2024 revenue by $4.2M+ with 15% YoY growth.</li>
            </ul>
          </li>
          <li>
            <strong>Empowered Teams:</strong> Committed to inclusive, healthy software development processes that help teams do their best work.
          </li>
        </ul>
      </section>
    </>
  );
}
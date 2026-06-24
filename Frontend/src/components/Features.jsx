function Features() {
  const features = [
    "Salary Analysis",
    "Email Verification",
    "Keyword Detection",
    "Risk Scoring"
  ];

  return (
    <section className="features">
      <h2>Key Features</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
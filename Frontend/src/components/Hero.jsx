import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Fake Job Detection System</h1>

      <p>
        Detect fraudulent job postings before you apply.
        Analyze salary, recruiter email, company details,
        and suspicious keywords.
      </p>

      <div className="hero-buttons ">
        <Link to="/analyze">
          <button className="primary-btn ">
            Analyze Job
          </button>
        </Link>

        <Link to="/about">
          <button className="secondary-btn ms-2">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
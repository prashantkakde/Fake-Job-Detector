import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <h2>Ready to Verify a Job Posting?</h2>

      <p>
        Protect yourself from recruitment scams.
      </p>

      <Link to="/analyze">
        <button className="primary-btn">
          Start Analysis
        </button>
      </Link>

    </section>
  );
}

export default CTA;
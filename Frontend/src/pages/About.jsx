import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import {
  FaBullseye,
  FaSearch,
  FaChartBar,
  FaDatabase
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />
 <br></br>
      <div className="about-page">

        <section className="about-hero">
          <h1>About JobShield AI</h1>

          <p>
            An intelligent Fake Job Detection System
            that helps job seekers identify suspicious
            job postings before applying.
          </p>
        </section>

        <section className="about-grid">

          <div className="about-card">
            <h2><FaBullseye style={{ color: "#ef4444" }} /> Mission</h2>

            <p>
              Protect job seekers from recruitment
              fraud and online employment scams.
            </p>
          </div>

          <div className="about-card">
         <h2><FaSearch style={{ color: "#3b82f6" }} /> Detection Engine</h2>

            <p>
              The system analyzes salary patterns,
              recruiter emails, suspicious keywords,
              and experience requirements.
            </p>
          </div>

          <div className="about-card">
           <h2><FaChartBar /> Risk Analysis</h2>
            <p>
              Generates a risk score and classifies
              jobs as Safe, Medium Risk, or High Risk.
            </p>
          </div>

          <div className="about-card">
          <h2><FaDatabase /> Data Storage</h2>

            <p>
              Every analysis is stored securely in
              MySQL for future reference.
            </p>
          </div>

        </section>

        <section className="tech-stack">

          <h2>Technology Stack</h2>

          <div className="stack-container">

            <div className="stack-box">React.js</div>
            <div className="stack-box">Node.js</div>
            <div className="stack-box">Express.js</div>
            <div className="stack-box">MySQL</div>
            <div className="stack-box">Axios</div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;
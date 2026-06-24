import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";
import "../styles/AnalyzeJob.css";
import Footer from "../components/Footer";

function AnalyzeJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    salary: "",
    experience: "",
    email: "",
    description: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const analyzeJob = async (e) => {
  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:5000/analyze",
      formData
    );

    setResult(response.data);

  } catch (error) {
    console.log(error);
  }
  
  };

  return (
    <>
      <Navbar />
      <br></br><br></br><br></br><br></br><br></br>
    <div className="analyze-container">

      <div className="form-section">

        <h1>Analyze Job Posting</h1>

        <form onSubmit={analyzeJob}>

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary Offered"
            value={formData.salary}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="experience"
            placeholder="Experience Required (Years)"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Recruiter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Paste Job Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Analyze Job
          </button>

        </form>

      </div>

      {result && (
        <div className="result-section">

          <h2>Analysis Report</h2>

          <div className="score-circle">
            {result.score}%
          </div>

          <h3>{result.status}</h3>

          <h4>Reasons:</h4>

          <ul>
            {result.reasons.length > 0 ? (
              result.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))
            ) : (
              <li>No major red flags found.</li>
            )}
          </ul>

        </div>
      )}

    </div>
    <Footer/>
    </>
  );
}

export default AnalyzeJob;
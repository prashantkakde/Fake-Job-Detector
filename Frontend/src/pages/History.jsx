import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";
import "../styles/History.css";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/history")
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const deleteRecord = async (id) => {

  try {

    await axios.delete(
      `http://localhost:5000/history/${id}`
    );

    setHistory(
      history.filter((job) => job.id !== id)
    );

  } catch (error) {
    console.log(error);
  }

};

const filteredHistory = history.filter((job) =>
  (job.company_name || "")
    .toLowerCase()
    .includes(search.toLowerCase()) ||
  (job.job_title || "")
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <>
      <Navbar />
    
      <div className="history-page">

        <div className="history-header">
          <h1>Analysis History</h1>

          <input
            type="text"
            placeholder="Search Company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />
          <p>
            View all previously analyzed job postings and
            their fraud risk assessments.
          </p>
        </div>

        <div className="history-card">

          {history.length === 0 ? (
            <h2>No Records Found</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.job_title}</td>
                    <td>{job.company_name}</td>
                    <td>{job.risk_score}%</td>
                    <td>
                      <span
                        className={
                          job.risk_status === "High Risk"
                            ? "high"
                            : job.risk_status === "Medium Risk"
                            ? "medium"
                            : "safe"
                        }
                      >
                        {job.risk_status}
                      </span>
                    </td>
                    <td>
                      {new Date(
                        job.analyzed_at
                      ).toLocaleDateString()}
                    </td>
                    <td>
                   <FaTrash
                      className="delete-icon"
                       onClick={() => deleteRecord(job.id)}
                    />
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default History;
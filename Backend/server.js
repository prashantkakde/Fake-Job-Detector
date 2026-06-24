const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {

  const {
    title,
    company,
    salary,
    experience,
    email,
    description,
  } = req.body;

  let score = 0;
  let reasons = [];

const jobDescription = description.toLowerCase();

// High Salary + Fresher
if (Number(salary) >= 1000000 && Number(experience) === 0) {
  score += 30;
  reasons.push("Unusually high salary for a fresher");
}

// Personal Email Domain
if (
  email.includes("gmail.com") ||
  email.includes("yahoo.com") ||
  email.includes("outlook.com")
) {
  score += 20;
  reasons.push("Personal email domain detected");
}

// Scam Keywords
const scamKeywords = [
  "registration fee",
  "processing fee",
  "training fee",
  "security deposit",
  "easy money",
  "urgent hiring",
  "guaranteed job",
  "pay before joining",
  "earn money quickly",
  "work from home earn",
  "limited seats",
  "instant joining",
  "100% placement",
  "investment required",
  "no interview required",
];

scamKeywords.forEach((keyword) => {
  if (jobDescription.includes(keyword)) {
    score += 10;
    reasons.push(`Suspicious keyword detected: "${keyword}"`);
  }
});

// No Company Name
if (!company || company.trim() === "") {
  score += 20;
  reasons.push("Company name missing");
}

// Very Short Description
if (description.length < 50) {
  score += 10;
  reasons.push("Job description is too short");
}

let status = "Safe";

if (score >= 60) {
  status = "High Risk";
} else if (score >= 30) {
  status = "Medium Risk";
}

  const sql = `
    INSERT INTO job_analysis (
      job_title,
      company_name,
      salary,
      experience_required,
      recruiter_email,
      description,
      risk_score,
      risk_status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      title,
      company,
      salary,
      experience,
      email,
      description,
      score,
      status
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Database Error"
        });
      }

      res.json({
        score,
        status,
        reasons,
        message: "Analysis Saved Successfully"
      });

    }
  );

});

app.get("/history", (req, res) => {

  const sql = `
  SELECT *
  FROM job_analysis
  ORDER BY id ASC
`;

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

app.delete("/history/:id", (req, res) => {

  const id = req.params.id;

  const sql = `
    DELETE FROM job_analysis
    WHERE id = ?
  `;

  db.query(sql, [id], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Record Deleted Successfully"
    });

  });

});


app.listen(5000, () => {
  console.log("Server running");
});
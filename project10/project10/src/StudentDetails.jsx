import React, { useState } from "react";

function StudentDetails() {

  const [showForm, setShowForm] = useState(false);

  const [students, setStudents] = useState([
    {
      reg: "411625190010",
      name: "Swetha Priya",
      className: "A",
      tamil: 90,
      english: 88,
      maths: 95,
      science: 90,
      social: 80
    },
    {
      reg: "411625190013",
      name: "Ayisha S",
      className: "A",
      tamil: 95,
      english: 77,
      maths: 89,
      science: 95,
      social: 84
    },
    {
      reg: "411625190023",
      name: "Dharun S",
      className: "B",
      tamil: 95,
      english: 99,
      maths: 100,
      science: 93,
      social: 94
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    reg: "",
    className: "",
    tamil: "",
    english: "",
    maths: "",
    science: "",
    social: ""
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const addStudent = (e) => {

    e.preventDefault();

    setStudents([
      ...students,
      {
        ...form,
        tamil: Number(form.tamil),
        english: Number(form.english),
        maths: Number(form.maths),
        science: Number(form.science),
        social: Number(form.social)
      }
    ]);

    setForm({
      name: "",
      reg: "",
      className: "",
      tamil: "",
      english: "",
      maths: "",
      science: "",
      social: ""
    });

    setShowForm(false);
  };


  const getGrade = (percentage) => {

    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";

    return "F";
  };


  return (

    <div className="page">

      <div className="student-container">

        {/* TITLE */}

        <div className="page-title">

          <div>
            <span className="title-icon">👥</span>

            <h1>
              All Students - Marks & Details
            </h1>
          </div>

          <button
            className="add-button"
            onClick={() => setShowForm(!showForm)}
          >
            ＋ Add Student
          </button>

        </div>


        {/* ADD FORM */}

        {showForm && (

          <div className="add-card">

            <h2>
              <span>＋</span> Add New Student
            </h2>

            <form onSubmit={addStudent}>

              <div className="input-row">

                <div className="input-group">
                  <label>👤 Student Name</label>

                  <input
                    name="name"
                    placeholder="Enter student name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="input-group">
                  <label># Roll No</label>

                  <input
                    name="reg"
                    placeholder="Enter roll number"
                    value={form.reg}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <div className="input-group full">
                <label>🎓 Class / Section</label>

                <input
                  name="className"
                  placeholder="e.g. 10 A"
                  value={form.className}
                  onChange={handleChange}
                  required
                />
              </div>


              <h3>📚 Marks (out of 100)</h3>


              <div className="marks-grid">

                <input
                  name="tamil"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="📖 Tamil - Enter marks"
                  value={form.tamil}
                  onChange={handleChange}
                  required
                />

                <input
                  name="english"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="📖 English - Enter marks"
                  value={form.english}
                  onChange={handleChange}
                  required
                />

                <input
                  name="maths"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="📖 Maths - Enter marks"
                  value={form.maths}
                  onChange={handleChange}
                  required
                />

                <input
                  name="science"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="📖 Science - Enter marks"
                  value={form.science}
                  onChange={handleChange}
                  required
                />

                <input
                  name="social"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="📖 Social - Enter marks"
                  value={form.social}
                  onChange={handleChange}
                  required
                />

              </div>


              <button className="save-button">
                💾 Add Student
              </button>

            </form>

          </div>

        )}


        {/* TABLE */}

        <div className="table-card">

          <table>

            <thead>

              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Class</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Science</th>
                <th>Social</th>
                <th>Total</th>
                <th>%</th>
                <th>Grade</th>
                <th>Result</th>
              </tr>

            </thead>


            <tbody>

              {students.map((student, index) => {

                const total =
                  student.tamil +
                  student.english +
                  student.maths +
                  student.science +
                  student.social;

                const percentage =
                  (total / 500) * 100;

                const grade =
                  getGrade(percentage);

                const result =
                  percentage >= 40 ? "Pass" : "Fail";


                return (

                  <tr key={index}>

                    <td>{student.reg}</td>

                    <td className="student-name">
                      {student.name}
                    </td>

                    <td>
                      <span className="class-badge">
                        {student.className}
                      </span>
                    </td>

                    <td>{student.tamil}</td>

                    <td>{student.english}</td>

                    <td>{student.maths}</td>

                    <td>{student.science}</td>

                    <td>{student.social}</td>

                    <td className="total">
                      {total}
                    </td>

                    <td className="percentage">
                      {percentage.toFixed(2)}%
                    </td>

                    <td>
                      <span
                        className={
                          grade === "A+"
                            ? "grade aplus"
                            : "grade"
                        }
                      >
                        {grade}
                      </span>
                    </td>

                    <td>
                      <span
                        className={
                          result === "Pass"
                            ? "result pass"
                            : "result fail"
                        }
                      >
                        {result}
                      </span>
                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default StudentDetails;
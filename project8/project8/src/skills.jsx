function Skills() {
  const skills = [
    "Python",
    "Java",
    "React",
    "JavaScript",
    "HTML & CSS",
    "SQL",
    "UI/UX",
    "AI Tools"
  ];

  return (
    <section className="page">
      <p className="small">WHAT I KNOW</p>
      <h1>My <span>Skills</span></h1>

      <div className="cards">
        {skills.map((skill) => (
          <div className="card" key={skill}>
            <h2>{skill}</h2>
            <p>Learning & building projects</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
function Projects() {
  return (
    <section className="page">
      <p className="small">MY WORK</p>
      <h1>Featured <span>Projects</span></h1>

      <div className="cards">

        <div className="card">
          <h2>TaskFlow</h2>
          <p>Smart task management application using React.</p>
          <button>React Project</button>
        </div>

        <div className="card">
          <h2>Restaurant Website</h2>
          <p>Responsive restaurant website with modern UI.</p>
          <button>Web Project</button>
        </div>

        <div className="card">
          <h2>Attendance Tracker</h2>
          <p>Student attendance management application.</p>
          <button>React Project</button>
        </div>

        <div className="card">
          <h2>Blood Donation Locator</h2>
          <p>Application for finding blood donors by location.</p>
          <button>Web Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;
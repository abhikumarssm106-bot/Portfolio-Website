import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Previous Employer</h5>
              </div>
              <h3>Experience</h3>
            </div>
            <p>
              Analyzed problems and worked with teams to develop solutions.
              Contributed to a positive team environment by collaborating with fellow interns on group projects and presentations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical And Scientific Communication</h4>
                <h5>GURU KASHI UNIVERSITY Bathinda, India</h5>
              </div>
              <h3>Expected July 2027</h3>
            </div>
            <p>
              Pursuing Technical And Scientific Communication with a focus on problem-solving, public speaking, and teamwork.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

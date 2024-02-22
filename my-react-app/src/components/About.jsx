import React from 'react';
import './About.css';
import AsavelaImage from '../components/Asavela.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="AboutContainer">
        <h2 className="title-left">About Me</h2>
        <h4 className="learn">Learn more...</h4>
        <div className="row">
            <div className="about-img">
              <img src={AsavelaImage} className="img-fluid rounded b-shadow-a" alt="Asavela" />
          </div>
          <div className="col-md-6">
            <div className="box-shadow-full">
              <div className="about-me pt-4 pt-md-0">
                <div>
                  <p className="lead">
                    I'm Asavela Mgidi, a dedicated software developer that strives for excellence.
                    I began my career in the exciting field of software development,
                    which enabled me to pick up knowledge of various programming languages,
                    including HTML, CSS, JavaScript, Python, and Java.
                    I view coding as a creative outlet as much as a job, with each line of code telling a tale.
                    Throughout my career, I've had the privilege of contributing to projects where we were tasked to design construction websites.
                    My capacity to take on obstacles, work with diverse teams,
                    and provide solutions that have an impact has improved as a result of these experiences.
                    The thrill of using code to transform concepts into reality keeps me going.
                  </p>
                </div>
              </div>
              <div className="skill-mf">
                <p className="title-s">Skills</p>
                <div className="skill">
                  <span className="skill-title">HTML</span> <span className="pull-right">75%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }} data-progress="75%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">CSS</span> <span className="pull-right">65%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '75%' }} data-progress="65%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">JavaScript</span> <span className="pull-right">60%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '60%' }} data-progress="60%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">Java</span> <span className="pull-right">60%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '60%' }} data-progress="60%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">Python</span> <span className="pull-right">65%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '65%' }} data-progress="65%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">Figma</span> <span className="pull-right">75%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '75%' }} data-progress="75%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

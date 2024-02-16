import React from 'react';
import './About.css';
import AsavelaImage from '../components/Asavela.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <h2 className="title-left">About</h2>
        <h2 className="learn">Learn more about me</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="about-img">
              <img src={AsavelaImage} className="img-fluid rounded b-shadow-a" alt="Asavela" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="box-shadow-full">
              <div className="about-me pt-4 pt-md-0">
                <div className="container2">
                  <div className="about-info">
                    <p><span className="title-s">Name:</span> Asavela Mgidi</p>
                    <p><span className="title-s">Profile:</span> Full Stack Developer</p>
                    <p><span className="title-s">Email:</span> asavelamgidi00@gmail.com</p>
                    <p><span className="title-s">Phone:</span> +27793459109</p>
                  </div>
                </div>
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
                  <span className="skill-title">HTML</span> <span className="pull-right">85%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }} data-progress="85%"></div>
                  </div>
                </div>

                <div className="skill">
                  <span className="skill-title">CSS</span> <span className="pull-right">75%</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '75%' }} data-progress="75%"></div>
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

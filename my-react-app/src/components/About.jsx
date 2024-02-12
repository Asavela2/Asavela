import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <h5 className="title-left">
                        About me
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="components/Asavela2.jpeg" className="img-fluid rounded b-shadow-a" alt="Asavela2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                    
                    </div>
                    <div className="container">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Asavela Mgidi</span></p>
                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span className="title-s">Email: </span> <span>asavelamgidi00@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>+27793459109</span></p>
                      </div>
                    </div>
                    <p className="lead">
                      I'm Asavela Mgidi, a dedicated software developer that strives for excellence<br/>
                      I began my career in the exciting field of software development,
                      which enabled me to pick up knowledge of various programming languages,
                      including HTML, CSS, JavaScript, Python, and Java. I view coding as
                      a creative outlet as much as a job, with each line of code telling a tale.
                      Throughout my career, I've had the privilege of contributing to projects
                      where we were tasked to design construction websites.
                      My capacity to take on obstacles, work with diverse teams,
                      and provide solutions that have an impact has improved as a result of these experiences.
                      The thrill of using code to transform concepts into reality keeps me going.
                    </p>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span className="skill-title">HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '50%' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">CSS</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '45%' }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">JavaScript</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '30%' }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">Python</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '30%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">JAVA</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '30%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">Figma</span> <span className="pull-right">65%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '35%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span className="skill-title">Balsamiq</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '30%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    
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

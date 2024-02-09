import React from 'react';
import './about.css'

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        {/*<img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt="" />*/}
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>Asavela Mgidi</span></p>
                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span className="title-s">Email: </span> <span>asavelamgidi00@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>+27793459109</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>PYTHON</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVA</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>FIGMA</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>BALSAMIQ</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      CI'm Asavela Mgidi, a dedicated software developer that strives for excellence. 
                      I began my career in the exciting field of software development, 
                      which enabled me to pick up knowledge of various programming languages,
                       including HTML, CSS, JavaScript, Python, and Java. I view coding as a creative outlet as much as a job,
                        with each line of code telling a tale.
                    </p>
                    <p className="lead">
                         I view coding as a creative outlet as much as a job,
                        with each line of code telling a tale. Throughout my career, 
                        I've had the privilege of contributing to project where we were tasked to design a construction website.
                    </p>
                    <p className="lead">
                    Throughout my career, 
                        I've had the privilege of contributing to project where we were tasked to design a construction website. 
                        My capacity to take on obstacles, work with diverse teams, 
                        and provide solutions that have an impact has improved as a result of these experiences.
                       The thrill of using code to transform concepts into reality keeps me going.
                    </p>
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


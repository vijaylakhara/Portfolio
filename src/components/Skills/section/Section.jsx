import React, { useState } from 'react'
import './Section.css'

const Section = () => {
  const [Front, setFront] = useState(true)
  let front = () => {
    setFront(Front ? false : true)
    setProg(true)
    setBack(true)
  }
  const [Back, setBack] = useState(true)
  let back = () => {
    setBack(Back ? false : true)
    setFront(true)
    setProg(true)
  }
  const [Prog, setProg] = useState(true)
  let prog = () => {
    setProg(Prog ? false : true)
    setFront(true)
    setBack(true)
  }
  return (
    <>
      <div className="content_skill">
        <div className="heading">
          <h1>Skills</h1>
          <h6>My technical level</h6>
        </div>
        <div className="skill_part">
          <div className="front_skill">
            <div className="head_part">
              <div className="head_item">
                <i className='fas fa-code' ></i>
                <div>
                  <h5>Front-end Developer</h5>
                  <span>More than 0.1 years</span>
                </div>
              </div>
              <div className="bar_fab">
                <i className={Front ? 'fas fa-angle-down' : "fas fa-angle-up "} onClick={front}></i>
              </div>
            </div>
            <div className={Front ? "items_list open" : "items_list"}>
              <div className="data_skills">
                <h6>HTML</h6>
                <span>90%</span>
              </div>
              <div className="parcentage ">
                <h1 className='html_skill'></h1>

              </div>
              <div className="data_skills">
                <h6>CSS</h6> 
                <span>80%</span>
              </div>
              <div className="parcentage ">
                <h1 className='css_skill'></h1>
              </div>
              <div className="data_skills"> 
                <h6>JavaScript</h6>
                <span>60%</span>
              </div>
              <div className="parcentage ">
                <h1 className='javascript_skill'></h1>
              </div>
              <div className="data_skills">
                <h6>React js</h6>
                <span>70%</span>
              </div>
              <div className="parcentage ">
                <h1 className='react_skill'></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="skill_part">
          <div className="front_skill">
            <div className="head_part">
              <div className="head_item">
                <i className='fas fa-code-fork' ></i>
                <div>
                  <h5>Back-end Developer</h5>
                  <span>More than 0.1 years</span>
                </div>
              </div>
              <div className="bar_fab">
                <i className={Back ? 'fas fa-angle-down' : "fas fa-angle-up "} onClick={back}></i>
              </div>
            </div>
            <div className={Back ? "items_list open" : "items_list"}>
              <div className="data_skills">
                <h6>Nodejs</h6>
                <span>70%</span>
              </div>
              <div className="parcentage">
                <h1 className='node_skill'></h1>
              </div>
              <div className="data_skills">
                <h6>php</h6>
                <span>70%</span>
              </div>
              <div className="parcentage">
                <h1 className='php_skill'></h1>
              </div>
              {/* <div className="data_skills">
                <h5>django</h5>
                <span>60%</span>
              </div> */}
              {/* <div className="parcentage">
                <h1 className='django_skill'></h1>
              </div> */}
            </div>
          </div>
        </div>
        <div className="skill_part">
          <div className="front_skill">
            <div className="head_part">
              <div className="head_item">
                <i className='fas fa-code' ></i>
                <div>
                  <h5>Programming Language</h5>
                  <span>More than 0.1 years</span>
                </div>
              </div>
              <div className="bar_fab">
                <i className={Prog ? 'fas fa-angle-down' : "fas fa-angle-up "} onClick={prog}></i>
              </div>
            </div>
            <div className={Prog ? "items_list open" : "items_list"}>
              <div className="data_skills">
                <h6>C/C++</h6>
                <span>75%</span>
              </div>
              <div className="parcentage">
                <h1 className='c_skill'></h1>
              </div>
              <div className="data_skills">
                <h6>Java</h6>
                <span>68%</span>
              </div>
              <div className="parcentage">
                <h1 className='java_skill'></h1>
              </div>
              <div className="data_skills">
                <h6>Python</h6>
                <span>60%</span>
              </div>
              <div className="parcentage">
                <h1 className='python_skill'></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section

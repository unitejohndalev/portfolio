import React from 'react'


function Home() {
  return (
    <div className="home-container">
      <div className="home--container">
        <section className="section1-container">
          <img src="./images/home-images/shadow1.svg" className="shadow1" />
          <img src="./images/home-images/shadow2.svg" className="shadow2" />
        </section>
        <section className="section2-container">
          <img src="./images/home-images/shadow3.svg" className="shadow3" />
          <img src="./images/home-images/shadow4.svg" className="shadow4" />
        </section>

        <section className="section3-container">
          <img src="./images/home-images/shadow5.svg" className="shadow5" />
          <img src="./images/home-images/shadow6.svg" className="shadow6" />
        </section>
        <div className="greeting-container">
          <p className="greeting">Hi, I'am <span>Dale</span> a front-end developer.</p>
        </div>
      </div>
      <div class="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home
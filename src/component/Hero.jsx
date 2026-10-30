function Hero(){
    return(
        <section className="hero" >
             <p className="hero_intro">Hello, I'm Extreem</p>
            <h1 className="hero_title">Frontend  Developer</h1>
            <p className="hero_description">i build modern, responsive web experiences.</p>
           <div className="hero_buttons">
                <a className="hero__button hero__button--primary" href="#projects">View My Projects</a>
                <a className="hero__button hero__button--secondary" href="#contact">Contact Me</a>
                
                <a
                href="/Ofoedu_Ifeanyi_Frontend_Developer_CV_fixed.pdf"
                download="Ofoedu_Ifeanyi_Frontend_Developer_CV_fixed.pdf"
                className="hero__button hero__button--secondary"
                >
                Download CV
                </a>

           </div>
        </section>
    )
}
export default Hero;
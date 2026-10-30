function Contact(){
    return(
        <section id="contact" className="contact">
        <h2 className="contact__title">Get In Touch</h2>

        <p className="contact__description">
            Have a project in mind or want to collaborate?
            Feel free to reach out. I'd love to hear from you.
        </p>

        <div className="contact__details">
        <a
        className="contact__link"
        href="ofoeduifeanyi2000@gmail.com"
        >
        Email Me
        </a>

        <a
        className="contact__link"
        href="https://github.com/Ofoedu-Ifeanyi"
        target="_blank"
        rel="noreferrer"
        >
        GitHub
        </a>

        <a
        className="contact__link"
        href="https://www.facebook.com/share/1BsLkvVUMj/"
        target="_blank"
        rel="noreferrer"
        >
        FaceBook
        </a>
        
        <a
        className="contact__link"
        href="https://x.com/IfeanyOfoedu"
        target="_blank"
        rel="noreferrer"
        >
        X
        </a>

        <a
        className="contact__link"
        href="https://www.linkedin.com/in/godswill-ofoedu-39bb242bb?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noreferrer"
        >
        LinkedIn
        </a>
        </div>
        </section>
    )
}
export default Contact;
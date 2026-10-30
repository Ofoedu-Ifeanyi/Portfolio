
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">Extreem</p>

      <p className="footer__text">
        Building modern, responsive web experiences.
      </p>

      <div className="footer__links">
        <a
          href="https://github.com/Ofoedu-Ifeanyi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Extreem. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

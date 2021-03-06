import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, ctb, ctc } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is '}
            <span className="text-color-main">{name || 'Andrea'}</span>
            <br />
            {subtitle || 'I am a Web Developer.'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta d-flex flex-column flex-sm-row">
            <span className="cta-btn cta-btn--hero mt-5 mt-sm-0">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero mt-5 mt-sm-0 ml-0 mx-sm-5">
              <Link to="projects" smooth duration={1000}>
                {ctb || 'Projects'}
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero mt-5 mt-sm-0 ml-0">
              <Link to="contact" smooth duration={1000}>
                {ctc || 'Contacts'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

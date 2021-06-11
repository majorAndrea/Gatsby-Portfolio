import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper pb-5">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <div className="pt-5 pb-5">
          <Title title="Main Skills" />
          <Row className="about-wrapper">
            <Col md={12} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <div className="about-wrapper__info d-flex flex-column flex-sm-row justify-content-around">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'css3-alt']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'sass']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'bootstrap']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'js']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <FontAwesomeIcon
                    icon={['fab', 'react']}
                    color="white"
                    size="3x"
                    className="mb-3 mb-sm-0"
                  />
                  <span style={{ fontSize: '2.25em' }}>ExpressJS</span>
                  <span style={{ fontSize: '2.25em' }}>MongoDB</span>
                  <span style={{ fontSize: '2.25em' }}>SQL</span>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;

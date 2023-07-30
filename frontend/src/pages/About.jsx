import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/about.css'
import CommonSection from '../shared/CommonSection'
import Newsletter from '../shared/Newsletter'

const About = () => {
  return (
    <>
      <CommonSection title={
        <div className="about__us-title">
          <h3 className="mb-4">Travel Agency</h3>
          <h1 className="mb-3 fw-semibold">Wanderlust</h1>
          <h3 className="mb-4">Wonderful Tour</h3>
        </div>
      }/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='pt-5 text-center'>
              <div class="about__us-infor">
                <div class="about__us-card"> 
                  <p class="about__us-heading">Traveller Tours</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Uiverse</p>
                </div>
                <div class="about__us-card"> 
                  <p class="about__us-heading">Explore the world</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p>Uiverse</p>
                </div>
                <div class="about__us-card">
                  <p class="about__us-heading">Adventure Vacations</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem!</p>
                  <p>Uiverse</p>
                </div>
                <div class="about__us-card">
                  <p class="about__us-heading">Luxurious Hotels</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, sunt?.</p>
                  <p>Uiverse</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default About
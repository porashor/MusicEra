import React from 'react'
import Identity from '../Components/Identity'
import Container from '../Components/Container'
import img from "../assets/image3.jpg"
import Map from '../Components/Map'
const About = () => {
  const text = `818 Media is a company specialized in providing all types of creative solutions in the fields of media and corporate gifts, which contribute to the transformation of our clients’ ideas into reality.
With the unique and creative imprint of 818 Media, this transformation is accomplished by our team of creative arts experts whose experience, dedication and creativity have crystallized to form a tangible and concrete reality. All of which is proportional to your trust in us to reach the extents of satisfaction and creativity with your campaign through our work.z` ;
  return (
    <div>
      <Container>
        <Identity header={"Who we are?"} para={text} img={img} />
        <Identity header={"Our mission and vision"} para={text} img={img} order/>
        <Map/>
      </Container>
    </div>
  )
}

export default About

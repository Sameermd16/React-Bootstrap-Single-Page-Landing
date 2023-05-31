import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import desert from '../assets/images/desert.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


function Main() {
  return (
    <div>
        <Container>
            <Row className='my-5 px-4'>
                <Col sm={7} >
                    {/* <Image src='../assets/images/desert.jpg' fluid /> */}
                    <img src= {desert} fluid rounded width="100%" />
                </Col>
                <Col sm={5} >
                    <h1>Welcome to the desert</h1>
                    <p className='mt-3'>A desert is a region of land that is very dry because it receives low amounts of precipitation (usually in the form of rain, but it may be snow, mist or fog), often has little coverage by plants, and in which streams dry up unless they are supplied by water from outside the area.</p>
                    <Button variant='outline-primary'>Click here for more</Button>
                </Col>
            </Row>
            <Row>
                <Card className='bg-secondary text-white text-center'>
                    <Card.Body>A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. </Card.Body>
                </Card>
            </Row>
            <Row className="my-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* image from source folder is not working */}
                        <Card.Img variant="top" src="https://www.thoughtco.com/thmb/l0Ei2qSYEp6vtU6a1o0FtphhV4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SaharaDesert-58c1a5603df78c353c3d525d.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.inside-egypt.com/img/thumbs/w1200h800q85/news/48ad90f964fde5c40c45.jpeg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mybestplace.com/uploads/2022/01/Huacachina-Peru-COVER.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <footer className='py-3 my-5 bg-dark'>
            <p className='text-center text-white'>Copyright &copy; your website 2023</p>
        </footer>
    </div>
  )
}

export default Main;


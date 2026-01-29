import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid  img-height"
                    src={img1} alt="First slide" />
                <Carousel.Caption>
                    <h3>UI Web Designer</h3>
                    <p>Web Design focuses on creating visually attractive, user-friendly, and responsive website layouts.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid  img-height"
                    src={img2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>React Front-End Developer</h3>
                    <p>A React Front-End Developer builds fast, responsive, and interactive user interfaces using React.js and modern JavaScript.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid  img-height"
                    src={img3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Network & Cyber Security Engineer</h3>
                    <p>
                        Cyber Security focuses on protecting computer systems, networks, and data from cyber attacks and unauthorized access.                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels

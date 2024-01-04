import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function Bootstrap(){
    return (
        <div>
            <h3>Bootstrap Test</h3>
            <Button>Buton</Button>
            <Button variant="info">Info</Button>

            <div className="d-flex justify-content-around container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://localhost:3000/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://localhost:3000/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" />
                    <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Bootstrap;
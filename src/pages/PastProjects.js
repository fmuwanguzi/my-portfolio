import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PastProjects = () => {
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Snake Head Game</Card.Title>
                <Card.Text>
                Project built with HTML canvas and javscript.
                </Card.Text>
                <Button variant="primary">Deployed Link</Button>
                <Button variant="primary">Github Link</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>My Simple weather app</Card.Title>
                <Card.Text>
                Project built with node.js, express and the openweathermap API
                </Card.Text>
                <Button variant="primary">Deployed Link</Button>
                <Button variant="primary">Github Link</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Deployed Link</Button>
                <Button variant="primary">Github Link</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Deployed Link</Button>
                <Button variant="primary">Github Link</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default PastProjects;
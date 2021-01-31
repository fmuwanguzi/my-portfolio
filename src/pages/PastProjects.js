import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'

const PastProjects = () => {
    return(
        
            <CardGroup>
            <Card  bg={'info'}style={{ width: '18rem' }}>
            <Card.Img width={171} height={280} variant="top" src="/images/snake.png" />
            <Card.Body>
                <Card.Title>Snake Head Game</Card.Title>
                <Card.Text>
                Project built with HTML canvas and javscript.
                </Card.Text>
                <a href="https://fmuwanguzi.github.io/"><Button variant="dark">Deployed Link</Button> </a> 
                <a href="https://github.com/fmuwanguzi/Snake-game"><Button variant="dark">Github Link</Button> </a>
            </Card.Body>
            </Card>


            <Card  bg={'info'}style={{ width: '18rem' }}>
            <Card.Img width={171} height={280} variant="top" src="/images/weather.png" />
            <Card.Body>
                <Card.Title>My Simple weather app</Card.Title>
                <Card.Text>
                Project built with authentication, node.js, express and the openweathermap API
                </Card.Text>
                <a href="https://my-weather-app.herokuapp.com/"><Button variant="dark">Deployed Link</Button> </a> 
                <a href="https://github.com/fmuwanguzi/weather-app"><Button variant="dark">Github Link</Button> </a>
            </Card.Body>
            </Card>


            <Card  bg={'info'}style={{ width: '18rem' }}>
            <Card.Img width={171} height={280} variant="top" src="/images/fit.png" />
            <Card.Body>
                <Card.Title>Workout and nutrition</Card.Title>
                <Card.Text>
                Front end built with React.js and backend built with mongoose(hosted on mongoDB)
                </Card.Text>
                <a href="https://generalfit.herokuapp.com/"><Button variant="dark">Deployed Link</Button> </a> 
                <a href="https://github.com/fmuwanguzi/fitness_app_client"><Button variant="dark">Github Link</Button> </a>
            </Card.Body>
            </Card>


            <Card  bg={'info'}style={{ width: '18rem' }}>
            <Card.Img width={171} height={280} variant="top" src="/images/ikick.png" />
            <Card.Body>
                <Card.Title>Kick it(My social app)</Card.Title>
                <Card.Text>
                Front end built with React.js and backend built with mongoose(hosted on mongoDB)
                </Card.Text>
                <a href="https://ikick.herokuapp.com/"><Button variant="dark">Deployed Link</Button> </a> 
                <a href="https://github.com/fmuwanguzi/social_app_client"><Button variant="dark">Github Link</Button> </a>
            </Card.Body>
            </Card>


            </CardGroup>
        
    )
}

export default PastProjects;
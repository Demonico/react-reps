import React from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'

import RepProvider from './context/RepContext'
import SearchForm from './components/SearchForm'
import RepList from './components/RepList'
import RepInfo from './components/RepInfo'

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Who's My Representative?</h1>
      </Jumbotron>
      <RepProvider>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <RepList />
          </Col>
          <Col>
            <RepInfo />
          </Col>
        </Row>
      </RepProvider>
    </Container>
  )
}

export default App

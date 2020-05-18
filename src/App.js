import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import SearchForm from './components/SearchForm'

function App() {
  return (
    <Container>
      <h1>Who's My Representative?</h1>
      <Row>
        <Col>
          <SearchForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App

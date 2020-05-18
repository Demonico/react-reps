import React, { Fragment, useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Col, FormGroup, Label, Row } from 'reactstrap'

import { useRepContext } from '../context/RepContext'

function splitName(name) {
  const splitArr = name.split(' ')
  const firstName = splitArr.shift()
  const lastName = splitArr.join(' ')
  return { firstName, lastName }
}

const blankRep = {
  firstName: '',
  lastName: '',
  district: '',
  phone: '',
  office: '',
}

export default function RepInfo() {
  const [repInfo, setRepInfo] = useState(blankRep)
  const { repState } = useRepContext()

  useEffect(() => {
    if (repState.rep && Object.keys(repState.rep).length !== 0) {
      const { name } = repState.rep
      const sepName = splitName(name)
      setRepInfo({ ...repState.rep, ...sepName })
    } else {
      setRepInfo(blankRep)
    }
  }, [repState])

  return (
    <Fragment>
      <h2 className="display-4">Info</h2>
      <Formik enableReinitialize initialValues={repInfo}>
        {() => (
          <Form>
            <FormGroup row>
              <Label for="repType" sm={3}>
                First Name
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="firstName" disabled />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Last Name
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="lastName" disabled />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                District
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="district" disabled />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Phone
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="phone" disabled />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Office
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="office" disabled />
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <Row>
        <Col>Website</Col>
        <Col className="text-right">
          <a href={repInfo.link} target="_blank" rel="noopener noreferrer">
            {repInfo.link}
          </a>
        </Col>
      </Row>
    </Fragment>
  )
}

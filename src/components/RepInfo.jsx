import React, { Fragment, useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Col, FormGroup, Label } from 'reactstrap'

import { useRepContext } from '../context/RepContext'

function splitName(name) {
  const splitArr = name.split(' ')
  const firstName = splitArr.shift()
  const lastName = splitArr.join(' ')
  return { firstName, lastName }
}

export default function RepInfo() {
  const [repInfo, setRepInfo] = useState({})
  const { repState } = useRepContext()

  useEffect(() => {
    if (repState.rep && Object.keys(repState.rep).length !== 0) {
      const { name } = repState.rep
      const sepName = splitName(name)
      setRepInfo({ ...repState.rep, ...sepName })
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
                <Field className="form-control" name="firstName" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Last Name
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="lastName" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                District
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="district" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Phone
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="phone" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="repType" sm={3}>
                Office
              </Label>
              <Col sm={9}>
                <Field className="form-control" name="office" />
              </Col>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

import React, { Fragment, useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, useFormikContext } from 'formik'
import { Alert, Button, Col, FormGroup, Label, Row } from 'reactstrap'

import states from '../../utils/states'

export default function SearchFields() {
  const [isDisabled, setIsDisabled] = useState(true)
  const { errors = {} } = useFormikContext()

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [errors])

  return (
    <Fragment>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label for="repType">Representative Type</Label>
              <Field className="form-control" name="repType" as="select">
                <option value=""></option>
                <option value="rep">Representative</option>
                <option value="sen">Senator</option>
              </Field>
              <ErrorMessage
                name="repType"
                render={(msg) => <Alert color="danger">{msg}</Alert>}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="stateCode">State</Label>
              <Field className="form-control" name="stateCode" as="select">
                <Fragment>
                  <option value=""></option>
                  {states.stateList.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </Fragment>
              </Field>
              <ErrorMessage
                name="stateCode"
                render={(msg) => <Alert color="danger">{msg}</Alert>}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-right">
            <Button color="primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

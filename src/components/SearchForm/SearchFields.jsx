/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, useFormikContext } from 'formik'
import { Alert, Button, Col, FormGroup, Label, Row } from 'reactstrap'

import { useRepContext } from '../../context/RepContext'

import states from '../../utils/states'

export default function SearchFields() {
  const [isDisabled, setIsDisabled] = useState(true)
  const { errors = {}, values } = useFormikContext()
  const { repState, setListType } = useRepContext()

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [errors])

  useEffect(() => {
    if (repState.listType !== values.repType) {
      setListType(values.repType)
    }
  }, [values, repState])

  return (
    <Fragment>
      <Form>
        <Row>
          <Col md="5">
            <FormGroup row>
              <Label md="6" for="repType">
                Representative Type
              </Label>
              <Col md="6">
                <Field className="form-control" name="repType" as="select">
                  <option value=""></option>
                  <option value="rep">Representative</option>
                  <option value="sen">Senator</option>
                </Field>
                <ErrorMessage
                  name="repType"
                  render={(msg) => <Alert color="danger">{msg}</Alert>}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup row>
              <Label md="4" for="stateCode">
                State
              </Label>
              <Col md="8">
                <Field className="form-control" name="stateCode" as="select">
                  <Fragment>
                    <option value=""></option>
                    {states.stateList.map((state) => (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
                      </option>
                    ))}
                  </Fragment>
                </Field>
                <ErrorMessage
                  name="stateCode"
                  render={(msg) => <Alert color="danger">{msg}</Alert>}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md="2" className="text-right ml-auto">
            <Button color="primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

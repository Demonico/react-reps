import React, { Fragment, useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { useRepContext } from '../context/RepContext'

export default function RepInfo() {
  const { repInfo, setRepInfo } = useState({})
  const { repState } = useRepContext()

  useEffect(() => {}, [repState])

  return (
    <Fragment>
      <h2 className="display-4">Info</h2>
      <Formik enableReinitialize initialValues={repInfo}>
        {() => (
          <Form>
            <Field name="firstName" />
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

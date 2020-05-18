import React, { Fragment } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { useRepContext } from '../../context/RepContext'

import SearchFields from './SearchFields'

const initialValues = {
  repType: '',
  stateCode: '',
}

const initialErrors = {
  repType: 'Please select a Representative Type.',
  stateCode: 'Please select a State.',
}

const searchSchema = Yup.object().shape({
  repType: Yup.string().required('Please select a Representative Type.'),
  stateCode: Yup.string().required('Please select a State.'),
})

export default function SearchForm() {
  const { fetchReps, fetchSens } = useRepContext()

  const submitHandler = (vals) => {
    if (vals.type === 'rep') {
      fetchReps(vals.stateCode)
    } else {
      fetchSens(vals.stateCode)
    }
  }

  return (
    <Fragment>
      <Formik
        initialErrors={initialErrors}
        initialValues={initialValues}
        onSubmit={(values) => submitHandler(values)}
        validationSchema={searchSchema}
      >
        {() => <SearchFields />}
      </Formik>
    </Fragment>
  )
}

import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

import { useRepContext } from '../context/RepContext'

const buildTableRows = (rows) => {
  if (rows.length === 0) {
    return <Fragment />
  }
  return rows.map((row, clickHandler) => (
    <tr key={row.id}>
      <td onClick={() => clickHandler(row.id)}>{row.name}</td>
      <td>{row.party}</td>
    </tr>
  ))
}

export default function RepList() {
  const [rows, setRows] = useState([])
  const [listName, setListName] = useState('')
  const { repState } = useRepContext()

  useEffect(() => {
    if (repState) {
      const { listType, reps, sens } = repState

      switch (listType) {
        case 'rep':
          setListName('Representatives')
          setRows(reps)
          break
        case 'sen':
          setListName('Senators')
          setRows(sens)
          break
        default:
          setListName('')
      }
    }
  }, [repState])

  return (
    <Fragment>
      <h2 className="display-4">List: {listName}</h2>
      <Table striped>
        <tbody>{buildTableRows(rows)}</tbody>
      </Table>
    </Fragment>
  )
}

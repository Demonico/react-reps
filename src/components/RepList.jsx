import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

import { useRepContext } from '../context/RepContext'

const buildTableRows = (rows, clickHandler) => {
  if (rows.length === 0) {
    return <Fragment />
  }
  return rows.map((row) => {
    const partyInitial = row.party.charAt(0)
    return (
      <tr key={row.id}>
        <td onClick={() => clickHandler(row)}>{row.name}</td>
        <td>{partyInitial}</td>
      </tr>
    )
  })
}

export default function RepList() {
  const [rows, setRows] = useState([])
  const [listName, setListName] = useState('')
  const { repState, setRep } = useRepContext()

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
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>{buildTableRows(rows, setRep)}</tbody>
      </Table>
    </Fragment>
  )
}

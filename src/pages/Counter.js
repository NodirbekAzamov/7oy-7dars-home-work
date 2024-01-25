import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { search, editOpen, editOpen2, openModal, remove } from '../features/counter/counterSlice'
import ModalApp from '../Components/ModalApp'
export default function Counter() {
  const search_arr = useSelector((state) => state.users.search_arr)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(search())
  }, [])


  const editItem = (item, index) => {
    dispatch(editOpen(item))
    dispatch(editOpen2(index))
  }

  return (
    <div className='container'>
      <ModalApp />
      <div className="row ">
        <div className=" d-flex align-items-center gap-5">
          <div className="col-2 offset-2  my-2">
            <input type="text" placeholder='Seach' onChange={(e) => dispatch(search(e.target.value))} className='form-control' />
          </div>
          <div className="col-2 ">
            <button onClick={() => dispatch(openModal())} className='btn btn-primary '>Add user</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>№</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                search_arr.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => editItem(item, index)} className='btn btn-info'>edit</button>
                      <button onClick={() => dispatch(remove(index))} className='btn btn-danger mx-2'>delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

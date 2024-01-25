import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../features/posts/Users'
import ModalForm from '../Modals/ModalForm'
export default function UserForm() {
    const users = useSelector((state) => state.user_form.tasks)
    const [modal, setModal] = useState(false)
    const [item, setItem] = useState("")
    const dispatch = useDispatch()
    const openModal = () => {
        setModal(true)
        setItem("")
    }
    const edit = (item) => {
        setModal(true)
        setItem(item)
    }

    return (
        <div className=' container'>
            <ModalForm open={modal} toggle={() => setModal(false)} item={item} />
            <div className="row my-5">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>open</h2>
                        </div>
                        <div>
                            {
                                users.filter(item => item.status === "open").map((items, index) => {
                                    return <div className="card-body d-flex justify-content-between" key={index}>
                                        <h2>{items.title}</h2>
                                        <button onClick={() => edit(items)} className='btn btn-info'>edit</button>
                                        <button onClick={()=> dispatch(removeTask(items))} className='btn btn-danger'>delete</button>
                                    </div>
                                })
                            }
                        </div>
                        <div className="card footer ">
                            <button onClick={openModal} className='btn btn-success'>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>pending</h2>
                        </div>
                        <div>
                            {
                                users.filter(item => item.status === "pending").map((items, index) => {
                                    return <div className="card-body d-flex justify-content-between" key={index}>
                                        <h2>{items.title}</h2>
                                        <button onClick={() => edit(items)} className='btn btn-info'>edit</button>
                                        <button onClick={()=> dispatch(removeTask(items))} className='btn btn-danger'>delete</button>
                                    </div>
                                })
                            }
                        </div>
                        <div className="card footer text-center">
                            <button onClick={openModal} className='btn btn-success'>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>payload</h2>
                        </div>
                        <div>
                            {
                                users.filter(item => item.status === "payload").map((item, index) => {
                                    return <div className="card-body d-flex justify-content-between" key={index}>
                                        <h2>{item.title}</h2>
                                        <button onClick={() => edit(item)} className='btn btn-info'>edit</button>
                                        <button onClick={()=> dispatch(removeTask(item))} className='btn btn-danger'>delete</button>
                                    </div>
                                })
                            }
                        </div>
                        <div className="card footer text-center">
                            <button onClick={openModal} className='btn btn-success'>add user</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>progress</h2>
                        </div>
                        <div>
                            {
                                users.filter(item => item.status === "progress").map((item, index) => {
                                    return <div className="card-body d-flex justify-content-between" key={index}>
                                        <h2>{item.title}</h2>
                                        <button onClick={() => edit(item)} className='btn btn-info'>edit</button>
                                        <button onClick={()=> dispatch(removeTask(item))} className='btn btn-danger'>delete</button>
                                    </div>
                                })
                            }
                        </div>
                        <div className="card footer text-center">
                            <button onClick={openModal} className='btn btn-success'>add user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

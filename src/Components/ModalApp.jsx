import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { toggle, addUser } from '../features/counter/counterSlice';
export default function ModalApp() {
    const modal = useSelector((state) => state.users.modal)
    const defualtValue = useSelector((state) => state.users.defualtValue)
    const dispatch = useDispatch()
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            id: defualtValue ? defualtValue.id : nanoid(),
            first_name: first_name ? first_name : defualtValue.first_name,
            last_name: last_name ? last_name : defualtValue.last_name,
            age: age ? age : defualtValue.age,
            email: email ? email : defualtValue.email,
        }
        dispatch(addUser({ ...payload }))
    }
    let active = null
    if (defualtValue) {
        active = true
    } else {
        active = Boolean(first_name) && Boolean(last_name) && Boolean(age) && Boolean(email)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={() => dispatch(toggle(false))}>
                <ModalHeader>
                    <h3>Add User</h3>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit} id='form'>
                        <input type="text" placeholder='first name' onChange={(e) => setFirstName(e.target.value)} defaultValue={defualtValue.first_name} className='form-control my-1' />
                        <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)} defaultValue={defualtValue.last_name} className='form-control my-1' />
                        <input type="number" placeholder='age' onChange={(e) => setAge(e.target.value)} defaultValue={defualtValue.age} className='form-control my-1' />
                        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} defaultValue={defualtValue.email} className='form-control my-1' />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button type='submit' form='form' disabled={!active} className='btn btn-info'>save</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

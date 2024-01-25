import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { userAdded, userUpdate } from '../features/posts/Users';
export default function ModalForm({ open, toggle, item }) {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target[0].value
        let status = e.target[1].value
        if (item) {
            dispatch(userUpdate({ title: title, status: status, id: item.id }))
        } else {
            dispatch(userAdded({ title: title, status: status }))
        }
        toggle()
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h4>vrsgrwbg</h4>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" defaultValue={item.title} placeholder='text...' className='form-control my-1' />
                    <select defaultValue={item.status} className='form-control'>
                        <option value="" hidden>Tanlash</option>
                        <option value="open">open</option>
                        <option value="pending">pending</option>
                        <option value="payload">payload</option>
                        <option value="progress">progress</option>
                    </select>
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-success'>save</button>
            </ModalFooter>
        </Modal>
    )
}

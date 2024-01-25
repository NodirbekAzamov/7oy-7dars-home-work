import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, first_name: 'John', last_name: 'Doe', age: 15, email: 'john@example' },
        { id: 2, first_name: 'Javlon', last_name: 'Dostonov', age: 29, email: 'john@example' },
        { id: 3, first_name: 'Palonchi', last_name: 'Pistonchiyiv', age: 56, email: 'john@example' },
    ],
    search_arr: [],
    modal: false,
    defualtValue: "",
    index: "",
    detele: []
}

const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        users(state) {
            state.users = users
        },

        search(state, action) {
            if (action.payload) {
                let filtered = action.payload ? state.users.filter(item => item.first_name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())) : state.users
                state.search_arr = filtered
            } else {
                state.search_arr = state.users
            }
        },

        openModal(state,) {
            state.modal = true
        },

        toggle(state) {
            state.modal = false
            state.defualtValue = ""
        },

        addUser(state, action) {
            if (state.defualtValue === "") {
                state.search_arr.push(action.payload)
            } else {
                const { first_name, last_name, age, email, id } = action.payload
                let single_user = state.search_arr.find(item => item.id === id)
                single_user.first_name = first_name
                single_user.last_name_name = last_name
                single_user.age = age
                single_user.email = email
            }
            state.modal = false
        },

        editOpen(state, action) {
            state.modal = true
            state.defualtValue = action.payload
        },

        editOpen2(state, action) {
            state.index = action.payload
        },

        remove(state, action) {
            state.search_arr.splice(action.payload, 1)


        }
    }
})

export const { increment, increment1, decrement_index, increment_index, increment_arr, users, search, addUser, openModal, toggle, editOpen, editOpen2, remove } = countSlice.actions
export default countSlice.reducer
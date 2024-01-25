import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: 1, text: "Open", title: "text1", status: "open" },
        { id: 2, text: "Pending", title: "text2", status: "pending" },
        { id: 3, text: "Payload", title: "text3", status: "payload" },
        { id: 4, text: "Progress", title: "text4", status: "progress" },
    ]
    
}

const Users = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.tasks.push(action.payload)

            },
            prepare({ title, status }) {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        status: status,
                    }
                }
            }
        },

        userUpdate: {
            reducer(state, action) {
                const { id, title, status } = action.payload
                let find = state.tasks.find(item => item.id === id)
                find.id = id
                find.title = title
                find.status = status
            },
            prepare({ title, status, id }) {
                return {
                    payload: {
                        id: id,
                        title: title,
                        status: status,
                    }
                }
            }
        },

        removeTask(state, action) {
            let {id} = action.payload
            let filtered = state.tasks.filter((item) => item.id !== id)
            state.tasks = filtered
            
        }
    }
})
export const { userAdded, edit, userUpdate, removeTask } = Users.actions
export default Users.reducer
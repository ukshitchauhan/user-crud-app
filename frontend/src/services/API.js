import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:5000/',
})

export const createUser = (data) =>{
    return API.post('/addUser',data)
}

export const getUser = () =>{
    return API.get('/allUser')
}

export const updateUser = (data) =>{
    return API.put('/updateUser',data)
}

export const deleteUser = (userId) =>{
    return API.delete(`/deleteUser/${userId}`)
}


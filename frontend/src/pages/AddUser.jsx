import React, { useState } from 'react'
import { createUser } from '../services/API'

const AddUser = () => {
    
    const [fullname, setfullname] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit =async (e) =>{
        try{
            e.preventDefault()
            const response = await createUser({fullname,role,bio,image})
            alert(response.data.message)
            setfullname('')
            setRole('')
            setBio('')
            setImage('')
        }
        catch(err){
            alert(err.response.data.message)
        }
    }
  
    return (
    <div className="add-user-page">
      <div className="form-container">
        <h2>Create New Profile</h2>

        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={(e)=>{setfullname(e.target.value)}}
            required
            />

            <input
            type="text"
            name="role"
            placeholder="Role (e.g. Designer)"
            value={role}
            onChange={(e)=>{setRole(e.target.value)}}
            required
            />

            <textarea
            name="bio"
            placeholder="Short Bio..."
            value={bio}
            onChange={(e)=>{setBio(e.target.value)}}
            rows="3"
            ></textarea>

            <input
            type="text"
            name="image"
            placeholder="Profile Image URL"
            value={image}
            onChange={(e)=>{setImage(e.target.value)}}
            required
            />

            <button type="submit" className="btn-primary">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
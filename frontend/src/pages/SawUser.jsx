import React, { useEffect, useState } from 'react'
import { deleteUser, getUser, updateUser } from '../services/API'

const SawUser = () => {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)
    const [fullname, setfullname] = useState('')
    const [role, setRole] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState('')
    const [id, setId] = useState('')


    const fetchUser =async ()=>{
        try{
            const res =await getUser()
            setUsers(res.data.user)
        }
        catch(err){
            console.log('Something Went Wrong');
        }
    }

    useEffect(() => {
        fetchUser()
    }, [users])

    const handleUpdate = async()=>{
        try{
            const res =await updateUser({id,fullname,role,bio,image})
            alert(res.data.message)
            setEditUser(null)
        }
        catch(err){
          alert(err)
        }
    }
    
    const handleDelete = async(userId)=>{
        try{
        const res = await deleteUser(userId)
        alert(res.data.message)
        
        }
        catch(err){
        alert(err)
        }
    }

    return (
    <div className="users-container">
      <h2 className="page-title">Team Members</h2>
      
        <div className="grid-layout">
            {users.length === 0 ? (
                <h1>No user Found</h1>
            ) : (
                users.map((e) => (
                <div key={e._id} className="user-card">
                    {/* Image Wrapper for Perfect Circle */}
                    <div className="img-wrapper">
                        <img src={e.image} alt="User" />
                    </div>

                    <div className="user-info">
                        <h3>{e.fullname}</h3>
                        <span className="role">{e.role}</span>
                        <p>{e.bio}</p>
                    </div>

                    <div className="card-actions">
                        <button className="btn-edit" onClick={()=>{
                            setEditUser(e)
                            setId(e._id)
                            setfullname(e.fullname)
                            setRole(e.role)
                            setBio(e.bio)
                            setImage(e.image)
                        }}>Edit</button>
                        
                        <button className="btn-delete" onClick={()=>{
                            handleDelete(e._id)
                        }}>Delete</button>
                    </div>
                </div>
                ))
            )}
        </div>

      {/* Modal Popup for Edit */}
      {editUser && (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Update Profile</h2>

                <div className='update-form'>
                    <input 
                        type="text" 
                        placeholder="Full name"
                        value={fullname}
                        onChange={(e)=>setfullname(e.target.value)} 
                    />

                    <input 
                        type="text" 
                        placeholder="Role"
                        value={role}
                        onChange={(e)=>setRole(e.target.value)} 
                    />

                    <textarea 
                        placeholder="Bio"
                        value={bio}
                        onChange={(e)=>setBio(e.target.value)}
                        rows="3"
                    ></textarea>

                    <input 
                        type="text" 
                        placeholder="Image URL" 
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />

                    <div className="modal-actions">
                        <button className="btn-primary" onClick={handleUpdate}>Save Changes</button>
                        <button className="btn-cancel" onClick={()=>setEditUser(null)}>Cancel</button>
                    </div>
                </div>  
            </div>
        </div>
      )}

    </div>
  )
}

export default SawUser
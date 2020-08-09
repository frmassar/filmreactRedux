import React from 'react'

export default function ListUsers(props) {
    
   const {users,selectUsers,deleteUser} = props
    return (
        <div className="container-fluid w-100  d-flex justify-content-center flex-row flex-wrap">
            {
                (users && users.length)?
                users.map((u, index)=>(
                    <div key={u.id} className="card m-5 " style={{width:'200px'}} onClick={()=>selectUsers(index)}>
                        <div className="card-header">{u.name}</div>
                        <div className="card-body">
                            <p>{u.email}</p>
                            <p>{u.username}</p>
                        </div>
                        <button onClick={()=>deleteUser(u.id)}>Delete</button>
                    </div>
                    )
                ):<div>nO Users...</div>

                
            }
        </div>
    )
}

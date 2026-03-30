function User({Name, Age, email}){
    return(
        <div>
            <h1 style={{color:"blue"}}>Name:{Name}</h1>
            <h1 style={{fontWeight:"bold"}}>Age:{Age}</h1>
            <h1 style={{fontStyle:"italic"}}>email:{email}</h1>
        </div>
    )
}

export default User;
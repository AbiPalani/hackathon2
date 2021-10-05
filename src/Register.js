import "./Form.css";

function Register(){
    return(
        <>
        <form align="center">
           <div className="form">
           <p><label className="label">Email Id</label><input className="text" name="id" type="text" required/><br/></p>
           <p><label className="label">First Name</label><input className="text" name="first" type="text" required/><br/></p>
           <p><label className="label">Last Name</label><input className="text" name="last name" type="text" required/><br/></p>
           <p><label className="label">Password</label><input className="text" name="pwd" type="text" required/><br/></p>
           <p><input name="Submit" type="submit"></input></p>
            </div>
            </form> 
        </>
    );
}

export default Register;
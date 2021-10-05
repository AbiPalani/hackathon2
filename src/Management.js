import React from "react";
import axios from "axios";
import Employee from "./Employee";

const userApi="http://localhost:3001/user";


class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            email_id:"",
            username:"",
            contact:"",
        
        };
    }


    createUser= async () =>{
        try{
            const {email_id,username,contact} =this.state;
            const {data:user} = await axios.post(userApi,{email_id,username,contact});
            let users =[...this.state.users];
            users.push(user);
            this.setState({users,email_id:"",username:"",contact:""});
            console.log(users);
        }catch(err){
            console.log(err,"Creating error");
        }
    }; 
    
      
    readUser = async()=>{
        try{
            const {data} = await axios.get(userApi);
            this.setState({users:data});
            console.log(data);
        }catch(err){
            console.log(err,"Fetching error");
        }
    
    };
    
    
    updateUser= async()=>{
        try{
            const {email_id,username,contact} =this.state;
            const {data:user} = await axios.put(`${userApi}/${email_id}`,{email_id,username,contact});
            let users= [...this.state.users];
            const index = users.findIndex((user)=>user.email_id === email_id);
            users[index]=user;
            this.setState({users,email_id:"",username:"",contact:""});
        }catch(err){
            console.log(err,"updating error");
        }
    };
    
    
    deleteUser= async(email_id)=>{
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${email_id}`);
            let users =[...this.state.users];
            users=users.filter((user)=>user.email_id!== email_id);
            this.setState({users}) ;       
            console.log(`${email_id}`, "Deleted");
        }catch(err){
            console.log(err,"Deleting error");
        }
    
    };
    
    componentDidMount(){
        this.readUser();
    }

    handleChange = ({target:{name,value}})=> {
        this.setState({ [name]:value });
    };
    
    handleSubmit =(event)=>{
        event.preventDefault();
        if(this.state.id){
            this.updateUser();
        }
        else{
        this.createUser();
        }    
    };
    
    setUpdate = (user)=>{
        this.setState({...user});
    }
    
    render(){
        return(
           <>
           <Employee/>
           <form align="center" onSubmit={this.handleSubmit}>
           <div className="form">
               <p><label className="label">Email_Id</label><input className="text" name="email_id" type="text" value={this.state.email_id} onChange={this.handleChange} required/><br/></p>
               <p><label className="label">UserName</label><input className="text" name="username" type="text" value={this.state.username} onChange={this.handleChange} required/><br/></p>
               <p><label className="label">Contact</label><input className="text" name="contact" type="text" value={this.state.contact} onChange={this.handleChange} required/><br/></p>
               <p><input name="Submit" type="submit"></input></p>
            </div>
           </form>
            <table>
                <tbody>
                <tr>
                    <th>Email_Id</th>
                    <th>UserName</th>
                    <th>Contact</th>
                    <th>Actions</th>
                </tr>
                {this.state.users.map((user)=>{
                return (            
                <tr>
                    <td>{user.email_id}</td>
                    <td>{user.username}</td>
                    <td>{user.contact}</td>
                    <td>
                        <button onClick={()=>this.setUpdate(user)}>Update</button>
                        <button onClick={()=>this.deletePost(user.id)}>Delete</button>
                    </td>
                </tr>
                );
                })}
                </tbody>
            </table>
            </>
        );
    }

}
export default Admin;
import React from "react";
import axios from "axios";


const userApi="http://localhost:3001/user";


class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            leads:[],
            contacts:[],
            serviceReq:[],
            leads_status:"",
            serviceReq_status:"",
            req_id:"",
            id:"",
            name:"",
            phone:"",
            email:"",
        };
    }


    createLeads= async () =>{
        try{
            const {id,name,email,leads_status} =this.state;
            const {data:lead} = await axios.post(userApi,{id,name,email,leads_status});
            let leads =[...this.state.leads];
            leads.push(lead);
            this.setState({leads,id:"",name:"",email:"",leads_status:""});
            console.log(leads);
        }catch(err){
            console.log(err,"Creating error");
        }
    }; 
    
      
    readLeads = async()=>{
        try{
            const {data} = await axios.get(userApi);
            this.setState({leads:data});
            console.log(data);
        }catch(err){
            console.log(err,"Fetching error");
        }
    
    };
    
    
    updateLeads= async()=>{
        try{
            const {id,name,email,leads_status} =this.state;
            const {data:lead} = await axios.put(`${userApi}/${id}`,{id,name,email,leads_status});
            let leads= [...this.state.leads];
            const index = leads.findIndex((lead)=>lead.id === id);
            leads[index]=lead;
            this.setState({leads, id:"",name:"",email:"",leads_status:""});
        }catch(err){
            console.log(err,"updating error");
        }
    };
    
      
    createContacts= async () =>{
        try{
            const {id,name,phone,email} =this.state;
            const {data:contact} = await axios.post(userApi,{id,name,phone,email});
            let contacts =[...this.state.contacts];
            contacts.push(contact);
            this.setState({contacts,id:"",name:"",phone:"",email:""});
            console.log(contacts);
        }catch(err){
            console.log(err,"Creating error");
        }
    }; 
    
      
    readContacts = async()=>{
        try{
            const {data} = await axios.get(userApi);
            this.setState({contacts:data});
            console.log(data);
        }catch(err){
            console.log(err,"Fetching error");
        }
    
    };
    
    
    updateContacts= async()=>{
        try{
            const {id,name,phone,email} =this.state;
            const {data:contact} = await axios.put(`${userApi}/${id}`,{id,name,phone,email});
            let contacts= [...this.state.contacts];
            const index = contacts.findIndex((contact)=>contact.id === id);
            contacts[index]=contact;
            this.setState({contacts, id:"",name:"",phone:"",email:""});
        }catch(err){
            console.log(err,"updating error");
        }
    };



    createServiceReq= async () =>{
        try{
            const {id,name,serviceReq_status} =this.state;
            const {data:service} = await axios.post(userApi,{id,name,serviceReq_status});
            let serviceReq =[...this.state.serviceReq];
            serviceReq.push(service);
            this.setState({serviceReq,id:"",name:"",serviceReq_status:""});
            console.log(serviceReq);
        }catch(err){
            console.log(err,"Creating error");
        }
    }; 
    
      
    readServiceReq = async()=>{
        try{
            const {data} = await axios.get(userApi);
            this.setState({serviceReq:data});
            console.log(data);
        }catch(err){
            console.log(err,"Fetching error");
        }
    
    };


    componentDidMount(){
        this.readLeads();
        this.readContacts();
        this.readServiceReq();
    }

    handleChange = ({target:{name,value}})=> {
        this.setState({ [name]:value });
    };
    
    handleSubmit =(event)=>{
        event.preventDefault();
        if(this.state.id){
            this.updateLeads();
            this.updateContacts();
        }
        else{
        this.createLeads();
        this.createContacts();
        }    
    };
    
    setUpdateLead = (lead)=>{
        this.setState({...lead});
    }
    
    render(){
        return(
           <>
           <form align="center" onSubmit={this.handleSubmit}>
           <div className="form">
               <p><label className="label">Id</label><input className="text" name="id" type="text" value={this.state.id} onChange={this.handleChange} required/><br/></p>
               <p><label className="label">Name</label><input className="text" name="name" type="text" value={this.state.name} onChange={this.handleChange} required/><br/></p>
               <p><label className="label">Email</label><input className="text" name="email" type="text" value={this.state.email} onChange={this.handleChange} required/><br/></p>
               <p><label className="label">Status</label><input className="text" name="leads_staus" type="text" value={this.state.leads_status} onChange={this.handleChange} required/><br/></p>
               <p><input name="Submit" type="submit"></input></p>
            </div>
           </form>
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Leads_status</th>
                    <th>Actions</th>
                </tr>
                {this.state.leads.map((lead)=>{
                return (            
                <tr>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.leads_status}</td>
                    <td>
                        <button onClick={()=>this.setUpdateLead(lead)}>Update</button>
                     </td>
                </tr>
                );
                })}
                </tbody>
            </table>

            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                {this.state.contacts.map((contact)=>{
                return (            
                <tr>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>
                        <button onClick={()=>this.setUpdateContact(contact)}>Update</button>
                     </td>
                </tr>
                );
                })}
                </tbody>
            </table>


            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>serviceReq_status</th>
                </tr>
                {this.state.serviceReq.map((service)=>{
                return (            
                <tr>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.serviceReq_status}</td>
                </tr>
                );
                })}
                </tbody>
            </table>
            </>
        );
    }

}
export default Employee;
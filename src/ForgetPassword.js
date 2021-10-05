class ForgetPassword extends React.Component{
    constructor(props){
        super();
        this.state={
            input:{},
        }        
    }

    validateEmail=(e)=>{
        

    }

    handleForgetPassword=()=>{
        this.validateEmail();
    }


    render(){
        return(
        <>
        <input type="text"/>
        <button onClick={}>Forget Password</button>
        </>
    )
}
}

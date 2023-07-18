import React from "react"
class ProfileClass extends React.Component{
   constructor(props){
    // 1st call
    super(props);
    this.state={
        user:""
    }
    

   }
    
   
   // api fetching
   async componentDidMount(){
    //3rd call
    //api calls
    const data= await fetch("https://api.github.com/users/mohitrawat17")
    const json=await data.json();
    console.log(json);
    this.setState({
        user:json
    })
    
   }

    render(){
        //2nd call
        return(
            <>
           <h1>
           Name is :  {this.state?.user?.name}
           </h1>
           <img src={this.state?.user?.avatar_url} alt="image"/>
           <h2>
            location is : {this.state?.user?.location}
           </h2>
           </>
        )
        }
}

export default ProfileClass
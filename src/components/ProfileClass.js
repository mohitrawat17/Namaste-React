import React from "react"
class ProfileClass extends React.Component{
    render(){
        return(
            <>
           <h1>
            this is class based profile section
           </h1>
           <h2>
            {this.props.name}
           </h2>
           </>
        )
        }
}

export default ProfileClass
import React from 'react'
//import InstagramIcon = from "@material-ui/icons/Instagram";
export const Footer = () => {
  let footerStyle= {

    position: "relative", 
    left: "0",
    bottom: "0" ,
    width: "100 %" ,
    //color: "white" ,
    //top : "100vh" ,
    padding: "48px 0" ,
    width : "100%" 
  }

    return (
      <footer className="bg-dark text-light py-3" style={footerStyle}>
           <p className="text-center">  
           Copyright &copy; TherapySession.com 
           </p>
            
      </footer>
    )
  
}

//export default Footer

/*<div className="socialMedia">
  <InstagramIcon />
</div>*/
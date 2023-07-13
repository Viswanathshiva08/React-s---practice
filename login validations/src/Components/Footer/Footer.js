import React from "react";
import PropTypes from "react";

const Footer =({end})=> {
    return(
       <footer className='footer'>
       <h2 >{end}</h2>
       </footer>
    )
}

Footer.defaultProps={
    end:'Footer'
}

Footer.propTypes= {
    end:PropTypes.string
}

export default Footer
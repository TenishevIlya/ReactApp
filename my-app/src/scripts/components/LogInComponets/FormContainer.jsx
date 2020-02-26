import React from 'react';

const FormContainer = ({children}) => {
    return <form className="log-in-form">
               {children}
           </form>
}

export default FormContainer;
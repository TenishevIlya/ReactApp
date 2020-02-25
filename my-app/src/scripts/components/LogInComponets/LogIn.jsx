import React from 'react';
import Logo from './Logo';
import FormField from './FormField';
import {Fragment} from 'react';


class LogInForm extends React.Component {

    render() {
        return <Fragment>
                   <Logo />
                   <FormField />
               </Fragment>
    }
}

export default LogInForm;


import React, {Component} from 'react';
import SubmitBtn from './SubmitBtn';
import Input from './LogInInput';
import HideEye from '../../../images/hide-eye.svg';

class LogInFormField extends Component {


    render() {
        return <form className="log-in-form">
                   <Input name="Логин"/>
                   <Input name="Пароль"/>
                   <img src={HideEye} className="input-hide-eye"></img>
                   <SubmitBtn />      
               </form>
    }
}

export default LogInFormField;
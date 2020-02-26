import React, {Component} from 'react';
import FormContainer from './FormContainer';
import SubmitBtn from './SubmitBtn';
import Input from './LogInInput';
import HideEye from '../../../images/hide-eye.svg';

class LogInFormField extends Component {


    render() {
        return <FormContainer>
                   <Input type="text" class="log-in-input" name="Логин"/>
                   <Input type="password" class="log-in-input" name="Пароль"/>
                   <img src={HideEye} className="input-hide-eye"></img>
                   <SubmitBtn name="Войти в систему"/>      
               </FormContainer>
    }
}

export default LogInFormField;
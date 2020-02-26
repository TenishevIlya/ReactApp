import React, {Component, Fragment} from 'react';
import FormContainer from '../LogInComponets/FormContainer';
import Logo from '../LogInComponets/Logo';
import Input from '../LogInComponets/LogInInput';
import classNames from 'classnames';
import SubmitBtn from '../LogInComponets/SubmitBtn';

class RegistrateForm extends Component {

    render() {
        return <Fragment>
                   <Logo />
                   <FormContainer>
                       <Input type="text" class="log-in-input" name="Роль"/>
                       <Input type="text" class={classNames("log-in-input","registrate-input")} name="Электронная почта"/>
                       <Input type="password" class={classNames("log-in-input","registrate-input")} name="Введите пароль"/>
                       <Input type="password" class={classNames("log-in-input","registrate-input")} name="Повторите пароль"/>
                       <SubmitBtn name="Применить и войти"/>
                   </FormContainer>
               </Fragment>
    }
}

export default RegistrateForm;
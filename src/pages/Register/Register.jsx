import { useForm } from "react-hook-form";

import './Register.css'
import { useCreateUser } from "../../services/useCreateUser";

const parseErrors = (clienteError, serverErrors) => {
    const parsedServerErrors = (serverErrors || []).reduce((acc, item) => {
        acc[item.path] = item.msg
    
        return acc
    }, {})

    const parsedClientErrors = Object.keys(clienteError).reduce((acc, key) => {
        acc[key] = clienteError[key].message || 'Campo inválido'

        return acc
    }, {})

    return {
        ...parsedServerErrors,
        ...parsedClientErrors,
    }
}


export const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, errors: serverErrors, loading } = useCreateUser();

    const formErrors = parseErrors(errors, serverErrors)

    console.log({formErrors})

    return (
        <form className="register-form" onSubmit={handleSubmit(createUser)}>
            <h4>Informações Pessoais</h4>
            {formErrors.general ? <p className="error">{formErrors.general}</p> : ''}
            <fieldset>
                <label htmlFor="">Nome</label>
                <input type="text" {...register('name', { required: true })}/>
                {formErrors.name ? <p className="error">{formErrors.name}</p> : ''}
            </fieldset>
            <fieldset>
                <label htmlFor="">E-mail</label>
                <input type="text" {...register('email')}/>
                {formErrors.email ? <p className="error">{formErrors.email}</p> : ''}
            </fieldset>
            
            <fieldset>
                <label htmlFor="">CPF</label>
                {/* <input type="text" {...register('cpf', {  pattern: /(\d{3}.\d{3}.\d{3}-\d{2}$|\d{11})/})}/> */}
                <input type="text" {...register('cpf')}/>
                {formErrors.cpf ? <p className="error">{formErrors.cpf}</p> : ''}

            </fieldset>
            
            <fieldset>
                <label htmlFor="">Telefone</label>
                <input type="text" {...register('phone')}/>
                {formErrors.phone ? <p className="error">{formErrors.phone}</p> : ''}
            </fieldset>
            
            <fieldset>
                <label htmlFor="">Senha</label>
                <input type="password" {...register('password')}/>
                {formErrors.password ? <p className="error">{formErrors.password}</p> : ''}
            </fieldset>


            <button disabled={loading}>
                {loading ? '...' : 'Criar Conta'}
            </button>
        </form>

    ) 
}
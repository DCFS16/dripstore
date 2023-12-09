import { useForm } from "react-hook-form";

import './Register.css'
import { useCreateUser } from "../../services/useCreateUser";

export const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser, errors: serverErrors } = useCreateUser();

    console.log({ errors, serverErrors })

    return (
        <form className="register-form" onSubmit={handleSubmit(createUser)}>
            <h4>Informações Pessoais</h4>
            <fieldset>
                <label htmlFor="">Nome</label>
                <input type="text" {...register('name', { required: true })}/>
                {errors.name ? <p className="error">Nome inválido</p> : ''}
            </fieldset>
            <fieldset>
                <label htmlFor="">E-mail</label>
                <input type="text" {...register('email')}/>
            </fieldset>
            
            <fieldset>
                <label htmlFor="">CPF</label>
                {/* <input type="text" {...register('cpf', {  pattern: /(\d{3}.\d{3}.\d{3}-\d{2}$|\d{11})/})}/> */}
                <input type="text" {...register('cpf')}/>
                {errors.cpf ? <p className="error">Nome inválido</p> : ''}
            </fieldset>
            
            <fieldset>
                <label htmlFor="">Telefone</label>
                <input type="text" {...register('phone')}/>
            </fieldset>
            
            <fieldset>
                <label htmlFor="">Senha</label>
                <input type="password" {...register('password')}/>
            </fieldset>

            <button>Criar Conta</button>
        </form>

    ) 
}
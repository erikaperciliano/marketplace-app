import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterFormData, registerSchema } from './register.schema'

export const useRegisterViewModel = () => {
    const {control, handleSubmit, formState: { errors }} = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            phone: '',
            confirmPassword: '',
            email: '',
            name: '',
            password: '',
        }
    })

    const onSubmit = handleSubmit(({}) => {})
        
    return {
        control,
        erros,
        onSubmit,
    }
}
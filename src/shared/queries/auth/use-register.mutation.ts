import { useMutation } from "@tanstack/react-query";
import { RegisterHttpParams } from "../../interfaces/http/register";
import * as authService from '../../services/auths.service'

export const register = async () => {
    const mutation = useMutation({
        mutationFn: (useData: RegisterHttpParams) => authService.register(useData),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return mutation
}
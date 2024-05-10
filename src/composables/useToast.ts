import {toast} from "vue3-toastify";


export const useToast = () => {
    const success = (message: string) => {
        toast.success(message, {transition: "flip", autoClose: 3000});
    }

    const error = (message: string) => {
        toast.success(message, {transition: "bounce", autoClose: 3000});
    }

    return {success, error}
}
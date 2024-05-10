import {Ref, ref, toValue} from "vue";
import axios from "axios";

export function useFetch<T>(url: string | Ref<string>): { data: Ref<T>, loading: Ref<boolean>, error: Ref<any> } {
    const data = ref<T | null>(null) as Ref<T>;
    const error = ref(null)
    const loading = ref(false)

    const fetchData = async () => {
        data.value = {} as T;
        error.value = null;
        loading.value = true;

        try {
            const response = await axios.get<T>(toValue(url));
            data.value = response.data;
        } catch (err: any) {
            error.value = err.message || "Something went wrong...";
        } finally {
            loading.value = false;
        }
    }

    fetchData();

    return {data, error, loading}
}
import { useQuery } from "@tanstack/react-query";

const useEasyColleges = () => {
    const { data: colleges = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/colleges');
            const data = await res.json();

            console.log(data)
            return data;
        }
    });

    return [colleges, loading, refetch];
}

export default useEasyColleges;

import { useQuery } from "@tanstack/react-query";

const useEasyColleges = () => {
    const { data: colleges = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await fetch('https://easy-college-bookings-server.vercel.app/colleges');
            const data = await res.json();

            console.log(data)
            return data;
        }
    });

    return [colleges, loading, refetch];
}

export default useEasyColleges;

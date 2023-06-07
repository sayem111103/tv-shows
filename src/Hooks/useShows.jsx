import axios from "axios";
import { useQuery } from "react-query"

const useShows = () => {
    const {data: shows=[], refetch} = useQuery(['shows'], async () => {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
        return response.data
      });

    return [shows, refetch]
};

export default useShows;
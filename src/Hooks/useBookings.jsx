import { useQuery } from "react-query";

const useBookings = () => {
    const {data: bookings=[], refetch} = useQuery(['bookings'], async () => {
        const bookData = JSON.parse(localStorage.getItem('bookings'));
        return bookData;
      });

    return [bookings, refetch]
};

export default useBookings;
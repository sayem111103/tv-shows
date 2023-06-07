import { Container, Table } from "react-bootstrap";
import useBookings from "../../Hooks/useBookings";

const Bookings = () => {
    const [bookings] = useBookings();
    return (
        <Container>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Show Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((bd, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{bd.name}</td>
                            <td>{bd.email}</td>
                            <td>{bd.showName}</td>
                            <td>{bd.date}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Bookings;
import { Container, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './Summary.css'
import useBookings from '../../Hooks/useBookings';

const Summary = () => {
    const { data } = useLoaderData();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [bookings, refetch] = useBookings();
    let bookArray = [];

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const showName = form.showname.value;
        const date = form.date.value;
        const bookInfo = { name, email, showName, date };
        if (!bookings) {
            localStorage.setItem('bookings', JSON.stringify([bookInfo]))
        }
        else {
            bookArray = [...bookings, bookInfo];
            localStorage.setItem('bookings', JSON.stringify(bookArray));
            refetch()
            form.reset()
        }
    }
    return (
        <div>
            <h1 className="mb-4 text-center my-4">{data.name} Summary</h1>
            <Container>
                <div>
                    {data.summary}
                </div>
                <div className={`text-center my-2 ${data?.status === 'Running'? '':'fw-bold text-capitalize'}`}>
                    {data?.status === 'Running' ? <Button variant="primary" onClick={handleShow}>
                        Book Show
                    </Button> : 'Show ended!!'}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Booking Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name='name' required placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' required placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Shows Name</Form.Label>
                                    <Form.Control type="text" name='showname' required defaultValue={data.name} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Date</Form.Label>
                                    <div className='position-relative'>
                                        <Form.Control name='date' type="date" required />
                                        <span className="open-button">
                                            <button type="button">📅</button>
                                        </span>
                                    </div>
                                </Form.Group>

                                <Form.Control className='bg-success text-white' type='submit' value='Book Now' />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Container>
        </div>
    );
};

export default Summary;
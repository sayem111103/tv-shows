import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ShowCard = (props) => {   
    return (
        <div className='cards'>
                <Card className='text-center' style={{ margin:'0 auto', height:'100%', overflow:'hidden'}}>
                <div className='image'>
                <Card.Img variant="top" style={{height:'250px'}} src={props.data.image.original} />
                <div className="overlay"></div>
                </div>
                <p className='star'><AiFillStar style={{color:'yellow'}}></AiFillStar>{props.data.rating.average}</p>
                <Card.Body>
                    <Card.Title className='fs-3'>{props.data.name}</Card.Title>
                    <div className='d-flex flex-wrap justify-content-between'>
                       <p className='fw-lighter'><span className='fw-bold'>Runtime :</span> {props.data.runtime? props.data.runtime: 'N/A'} min</p>
                       <p className='fw-lighter'><span className='fw-bold'>Schedule :</span> {props.data.schedule.time? props.data.schedule.time: 'N/A'} </p>
                       <p className='fw-lighter'><span className='fw-bold'>Premiered :</span> {props.data.premiered? props.data.premiered: 'N/A'} </p>
                       <p className='fw-lighter'><span className='fw-bold'>Status :</span> {props.data.status? props.data.status: 'N/A'} </p>
                    </div>
                    <Link to={`/summary/${props.data.id}`}><Button className='mx-auto d-block' variant="primary">Summary</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;
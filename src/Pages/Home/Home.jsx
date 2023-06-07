import { Container, Row } from "react-bootstrap";
import useShows from "../../Hooks/useShows";
import ShowCard from "../../components/ShowCard/ShowCard";
import './Home.css'
import { useState } from "react";

const Home = () => {
    const [shows,] = useShows();
    const [show, setShow] = useState(false)
    return (
       <>
       <div className="home">
        <h1 className="mb-4">Famous Tv Shows</h1>
         <Container>
            <div className="shows">
                {shows.slice(0,show? 7:6).map(sd => <ShowCard key={sd.show.id} data={sd.show}></ShowCard>)}
            </div>
            <button onClick={()=>setShow(!show)} className="btn btn-success mt-3">{show?'see less':'see more'}</button>
        </Container>
       </div>
       </>
    );
};

export default Home;
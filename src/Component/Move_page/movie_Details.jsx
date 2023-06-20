import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../footer";


export default function Details() {
    const [data, setData] = useState(null);

    const params = useParams()

    const [fetchData, setFetchData] = useState(true)

    function fetchDataDetails() {

        const URL = `https://www.episodate.com/api/show-details?q=${params.id}`
        fetch(URL).then(response => response.json()).then(movieDetails => {
            setData(movieDetails)
            setFetchData(false);
            console.log(movieDetails);
        });
    }

    useEffect(() => {

        fetchDataDetails()

    }, [])

    let images = null

    if (fetchData == false) {
        data.tvShow.pictures.map((url) => console.log(url))

        images = data.tvShow.pictures.map((url) => ({
            src: url
        }));

    }

    return (
        <>
            {!fetchData && <div>
                <>

                    <div>
                        <Row>
                            <Col xs={12} md={7}><h1 className="movieName">{data.tvShow.name}</h1></Col>
                            <Col className="nextEpisodeAirDate" xs={6} md={2}><h6>{data.tvShow.name}<br /><span>Next Episode Air Date</span></h6></Col>
                            <Col xs={6} md={3} style={{color:"#800000"}}><h2>-TV Show{data.tvShow.status}</h2></Col>
                        </Row>
                        
                    </div>

                    <div>
                        <div className="movieBodyCenter">
                            <div className="movieBody">
                                <div>
                                    <Carousel images={images} style={{ height: 420, width: 330 }} />
                                </div>
                                <div className="movieDescription">
                                    <h6>When will be {data.tvShow.name} next episode air date? Is {data.tvShow.name} renewed or cancelled? Where to countdown {data.tvShow.name} air dates? Is {data.tvShow.name} worth watching?</h6>
                                    <p>{data.tvShow.description}</p>

                                    <Container>
                                        <Row>
                                            <Col>
                                                <h6>
                                                    Genres: {data.tvShow.genres[0]}| {data.tvShow.genres[1]}|{data.tvShow.genres[2]}
                                                </h6>
                                                <h6>
                                                    Station: {data.tvShow.network}({data.tvShow.country})
                                                </h6>
                                                <h6>
                                                    Rating: {data.tvShow.rating} from {data.tvShow.rating_count}
                                                </h6>
                                            </Col>
                                            <Col>
                                                <h6>Status: {data.tvShow.status}</h6>
                                                <h6>Start: {data.tvShow.start_date}</h6>

                                            </Col>
                                        </Row>


                                    </Container>
                                </div>

                            </div>
                        </div>



                    </div>
                </>
            </div>}
            <Footer />
        </>
    )


    // useEffect(() => {
    //     fetchDataDetails();

    // }, [])


    // const thumbnails = data.tvShow.pictures.map((_, index) => (
    //     <span style={{ fontSize: 200, fontWeight: 'bold' }} key={index}>
    //         {index + 1}
    //     </span>
    // ));
    // const imageElements = data.tvShow.pictures.map((image, index) => (
    //     <img
    //         src={image.pictures}
    //         // alt={image.alt}
    //         className='image-responsive'
    //         key={index}
    //     />
    // ));

    // return (
    //     <section className='section' aria-labelledby='example6'>
    //         <header className='section-header'>
    //             <h2 id='example6'>
    //                 Example 6: Carousel with custom children and custom thumbnails{' '}
    //                 <a href='https://yifanai.com/rgc6'>code</a>
    //             </h2>
    //         </header>
    //         <div className='carousel-container'>
    //             <Carousel thumbnails={thumbnails}>{imageElements}</Carousel>
    //         </div>
    //     </section>
    // )

}
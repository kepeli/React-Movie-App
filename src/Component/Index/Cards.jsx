import Card from 'react-bootstrap/Card';
// import Details from '../Move_page/movie_Details';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Footer from '../footer';

import { useEffect, useState } from "react";
import { SearchBox } from './NavBar';

export default function Cards({ data, setData, search, setSearch }) {
    
    // const [data, setData] = useState(null)
    const [fetching, setFetching] = useState(true)
    // const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    

    
    // https://www.episodate.com/api/search?q=arrow&page=1
    
    function fetchData(search, currentPage) {
        console.log(search, "yh")
        if(search == undefined) {
            const URL = `https://www.episodate.com/api/most-popular?page=1`
            fetch(URL).then(response => response.json()).then(finalData => {
            setData(finalData)
            setFetching(false);
            console.log(finalData);
            });
        }
        else {
            console.log(search, currentPage);
            const URL = `https://www.episodate.com/api/search?q=${search}&page=${currentPage}`
            fetch(URL).then(response => response.json()).then(finalData => {
                setData(finalData)
                setFetching(false);
                console.log(finalData);
            });

        }
    }

    useEffect(() => {
        fetchData();

    }, [])

    function nextPage() {
        setCurrentPage(currentPage + 1)
        fetchData(search, currentPage + 1)
    }
    function prevPage() {
        setCurrentPage(currentPage - 1)
        fetchData(search, currentPage - 1)
    }


    return (
        <>
            <Form className='searchForm' style={{ width: "25%", float: "right", margin: "0 4% 15px 0", padding: "0" }}>
                <InputGroup>
                {/* <SearchBox /> */}
                    <Form.Control
                        onChange={(e) => {
                            if(e.target.value == '') {
                                setCurrentPage(1)
                                setSearch(e.target.value)
                                fetchData(e.target.value, 1);
                            }
                            else {
                                setSearch(e.target.value)
                                fetchData(e.target.value, currentPage);
                            }
                        }}
                        placeholder='Search movies'
                    />
                </InputGroup>
            </Form>
            {/* <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search'/> */}
            <div className='cardDisplay'>
                <div className='cardDisplayBorder'>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

                        {
                            !fetching && data.tv_shows.filter((movieData) => {
                                return search.toLowerCase() === "" ? movieData : movieData.name.toLowerCase().includes(search)
                            }).map((movieData, index) => {
                                return <>
                                    <div key={index} className='cardBody'>
                                        <Card key={index} className="box" style={{ width: "240px" }}>
                                            <Card.Img variant="top" src={movieData.image_thumbnail_path} style={{ width: "100%", height: "250px" }} />
                                            <Card.Body>
                                                <Link to={`/details/${movieData.id}`}>
                                                    <Card.Title className='movieTitle'>{movieData.name}</Card.Title>

                                                </Link>
                                                <Card.Text>{movieData.country}</Card.Text>
                                                <Card.Text>Network: {movieData.network}</Card.Text>
                                                <Card.Text>Movie Start Date: {movieData.start_date}</Card.Text>
                                                <Card.Text>Movie Status: {movieData.status}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </>
                            })
                        }
                    </div>
                </div>
            </div >
            <div className='buttons'>
                <div className='pageButtons'>
                <button className='btn leftButton' onClick={prevPage}>Prev←</button>
                <button className='btn rightButton' onClick={nextPage}>Next→</button>

                </div>
            </div>

            <Footer />

        </>
    )

}
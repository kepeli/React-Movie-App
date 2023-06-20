import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function SearchModal({data}) {
  return (
    <>
      <section style={{position: 'absolute', top: '45px', width: '190px', color:"black", height:"100px"}}>
        <div style={{backgroundColor: "white", height:"150px"}}>
          <div>
          {data.tv_shows.map(show => <div key={show.id}><Link style={{display:"flex", flexWrap:"wrap"}}  to={`/details/${show.id}`} key={show.id}><span><img style={{width:"30px"}} src={show.image_thumbnail_path} alt="" /></span><span style={{color:"black", whiteSpace:"nowrap", width: "150px", overflow: 'hidden', textOverflow:"ellipsis", }}>{show.name}</span></Link></div>)}
            {/* <img src=''/> */}
          </div>
          <div>
            {/* <p>Joker</p> */}
            {/* {data.tv_shows.map(show => <div key={show.id}><Link style={{color:"black"}} to={`/details/${show.id}`} key={show.id}>{show.name}</Link></div>)} */}
          </div>
        </div>
      </section>
    </>
  )
}

export function SearchBox() {
  const [search, setSearch] = useState("")
  const [fetching, setFetching] = useState(true)
  const [data, setData] = useState(null)

  // console.log(data);

  function handleOnChange(e) {
    setFetching(true)
    // console.log("Working");
    setSearch(e.target.value)

    fetch(`https://www.episodate.com/api/search?q=${e.target.value}`)
    .then(response => response.json())
    .then(finalData => {
      setData(finalData)
      setFetching(false)
    })

  }

  return (
    <>
      <input onChange={handleOnChange} type="text" placeholder='Search'/>
      {search == "" ? null : (!fetching && <SearchModal data={data} />)}
    
    </>
  )
}

export default function NavBar() {
  const [searchParams, setSearchParams] = useSearchParams()  

  console.log(searchParams.get('name'));

  // const [search, setSearch] = useState("")
  // const [fetching, setFetching] = useState(true)
  // const [data, setData] = useState(null)

  // console.log(data);

  // function handleOnChange(e) {
  //   setFetching(true)
  //   console.log("Working");
  //   setSearch(e.target.value)

  //   fetch(`https://www.episodate.com/api/search?q=${e.target.value}`)
  //   .then(response => response.json())
  //   .then(finalData => {
  //     setData(finalData)
  //     setFetching(false)
  //   })


  // }

  return (
    <>
    {/* <div className='navContainer'> */}
      <Navbar bg expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">KEPELI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            /> */}
            {/* <input onChange={handleOnChange} type="text" placeholder='Search'/>
            {search == "" ? null : (!fetching && <SearchModal data={data} />)} */}
            <SearchBox />
            <Link to={"/login"}>
              {
                searchParams.get('name') ? 
                  <span className='loginName'>{searchParams.get('name')}</span>
                :
                  <Button className='logInBtn'>LOGIN IN</Button>
              }
            </Link>
            {/* <Link to={"/SignUp"}>
            <Button className='signUpBtn'>SIGN UP</Button>
            </Link> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <h1 className='movies'>MOVIES</h1> */}
    {/* </div> */}
    </>
  );
}

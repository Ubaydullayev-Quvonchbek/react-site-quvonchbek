import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import NavbarPage from "./Components/Navbar/NavbarPage";
import CardPage from "./Components/Cards/card";
import axios from "axios";

function App() {
  const [data, setData] = useState()
  const GetData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setData(res.data)
    })
  }
  useEffect(() => {
    GetData()
  }, [])
  console.log(data);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <NavbarPage />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={4}>
            <CardPage />
          </Col>
          <Col lg={4}>
            <CardPage />
          </Col>
          <Col lg={8} className="mt-5">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(item => {
                  return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
"use client";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function Bootstrap() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-size-small"
            label="Enter Frist Name"
            size="small"
          />
          <TextField
            id="outlined-size-small"
            label="Enter Last Name"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Enter Your Email"
            size="small"
          />
          <TextField
            id="outlined-size-small"
            label="Enter Your Number"
            size="small"
          />
        </div>
        <div>
        <Button variant="contained" color="success">
            Success
          </Button>
        </div>
      </Box>
    </div>
  );
}

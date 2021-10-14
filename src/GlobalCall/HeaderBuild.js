import React from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlineBusiness } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "./img/dev.gif";
import logo from "./img/4.png";
import { useDispatch, useSelector } from "react-redux";
import { removeBusiness } from "./Global";

export const HeaderBuild = () => {
  const data = useSelector((state) => state.myReducer.friend);

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav to="/">
            <Icon>
              {" "}
              <AiFillHome />{" "}
            </Icon>
            <span>Home</span>
          </Nav>
          <Nav to="/friend">
            <Icon>
              {" "}
              <FaUserFriends />{" "}
            </Icon>

            <span>Friends</span>
            <a>{data.length}</a>
          </Nav>
          <Nav to="/business">
            <Icon>
              {" "}
              <MdOutlineBusiness />{" "}
            </Icon>

            <span>Business</span>
            <a>0</a>
          </Nav>
          <Nav to="/add">
            <Icon>
              {" "}
              <BiBookAdd />{" "}
            </Icon>

            <span>Add Contact</span>
          </Nav>
        </Navigation>

        <Image src={avatar} />
      </Wrapper>
    </Container>
  );
};

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-color: black;
  border-radius: 50%;
  margin-right: 30px;
`;

const Logo = styled.img`
  width: 180px;
  height: 60px;
  object-fit: contain;
  margin: 0 30px;
`;
const Navigation = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all 350ms;
  margin: 0 20px;
  text-decoration: none;
  color: black;

  span {
    margin: 0;
  }
  a {
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 5px;
  }

  :hover {
    color: black;
    cursor: pointer;
    color: blue;
  }
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  object-fit: contain;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  color: black;
`;

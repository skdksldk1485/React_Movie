import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.3s;
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Home</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">tv</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">search</Slink>
      </Item>
    </List>
  </Header>
));

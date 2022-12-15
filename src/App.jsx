import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";

export default function App ()
{
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Home</Logo>
        </Nav>
        <Search />
        <Category />

        <Pages />

      </BrowserRouter>
    </div>
  );
};

const Nav = styled.nav`
  width: 80%;
  height : 3rem;
  margin: 0 auto 2rem;
  display: flex;
  align-items:center;
  svg{
    font-size: 2rem;
    color: #313131;
    margin-right: 0.5rem;
  }
`;
const Logo = styled(Link)`
text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two',cursive;
  color: #313131;
`;
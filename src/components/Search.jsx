import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Search ()
{
   const [ search, setSearch ] = useState( "" );
   const navigate = useNavigate();

   return (
      <FormStyle onSubmit={( e ) => { e.preventDefault();navigate(`/search/${search}`) }}>
         <FaSearch onClick={( e ) => { navigate(`/search/${search}`) }} />
         <input type="text" value={search} onChange={( e ) => { setSearch( e.target.value ); }} />
      </FormStyle>
   );
}

const FormStyle = styled.form`
   margin: 0 20rem;
   position: relative;
   input {
      width: 100%;
      border: none;
      outline: none;
      color: white;
      background: linear-gradient(35deg,#494949,#313131);
      font-size: 1.5rem;
      padding: 1rem 3rem;
      border-radius: 1rem;
   }
   svg{
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(100%,-50%);
      color:white;
   }
`;

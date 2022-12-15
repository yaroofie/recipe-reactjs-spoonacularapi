import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Category(){
   return (
      <List>
         <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <p>Italian</p>
         </SLink>
         <SLink to={'/cuisine/american'}>
            <FaHamburger />
            <p>American</p>
         </SLink>
         <SLink to={'/cuisine/thai'}>
            <GiNoodles />
            <p>Thai</p>
         </SLink>
         <SLink to={'/cuisine/japanese'}>
            <GiChopsticks />
            <p>Japanese</p>
         </SLink>
      </List>
   );
}

const List = styled.div`
   display: flex;
   justify-content: center;
   margin:2rem 0;
`;

const SLink = styled( NavLink )`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   border-radius:50%;
   margin-right:2rem;
   text-decoration:none;
   background:linear-gradient(35deg,#494949,#313131);
   width: 6rem;
   height: 6rem;
   transform: scale(0.8);
   p{
      color:white;
      font-size:0.8rem;
   }
   svg{
      color:white;
      font-size:1.5rem;
   }
   &.active{
      background:linear-gradient(to right,#f27121,#e94057);
      p{
         color:white;
      }
      svg{
         color:white;
      }
   }
`;
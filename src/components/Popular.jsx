import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";

export default function Popular ()
{
   const [ data, setData ] = useState( [] );

   const getData = async () =>
   {
      const check = localStorage.getItem( "popular" );
      if ( check )
      {
         setData( JSON.parse( check ) );
      }
      else
      {
         const api = await fetch( `https://api.spoonacular.com/recipes/random?apiKey=${ process.env.REACT_APP_API_KEY }&number=9` );
         const json = await api.json();
         setData( json.recipes );
         localStorage.setItem( "popular", JSON.stringify(json.recipes) );
      }
   };

   useEffect( () =>
   {
      getData();
   }, [] );
   return (
      <Wrapper>
         <h1>Popular</h1>
         <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "4rem"
         }}>
            {data.map( d =>
            {
               return (
                  <SplideSlide key={d.id}>
                     <Link to={`/recipe/${d.id}`}>
                        <Card>
                           <p>{d.title}</p>
                           <img src={d.image} alt={d.title} />
                           <Gradient />
                        </Card>
                     </Link>
                  </SplideSlide>
               );
            } )}
         </Splide>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   margin: 4rem 0rem;
   h1{
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;
   }
`;

const Card = styled.div`
   min-height: 25rem;
   border-radius: 2rem;
   overflow:hidden;
   position: relative;
   img{
      border-radius: 2rem;
      position:absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      color: white;
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const Gradient = styled.div`
   z-index: 3;
   width: 100%;
   height: 100%;
   position: absolute;
   background : linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;
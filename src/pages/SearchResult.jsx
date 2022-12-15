import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
export default function SearchResult ()
{
   const [ data, setData ] = useState( [] );
   const params = useParams();

   const getData = async ( name ) =>
   {
      const api = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ process.env.REACT_APP_API_KEY }&number=9&query=${ name }` );
      const json = await api.json();
      setData( json.results );
   };
   useEffect( () =>
   {
      getData( params.search );
   }, [ params.search ] );
   return (
      <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
         {data.map( d =>
         {
            return (
               <Link to={`/recipe/${ d.id }`} key={d.id} >
                  <Card>
                     <p>{d.title}</p>
                     <img src={d.image} alt={d.title} />
                  </Card>
               </Link>
            );
         } )}
      </Grid>
   );
}
const Grid = styled( motion.div )`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
   grid-gap: 3rem;
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
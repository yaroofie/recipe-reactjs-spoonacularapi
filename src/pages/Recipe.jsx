import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
export default function Recipe ()
{
   const [ data, setData ] = useState( [] );
   const [ tab, setTab ] = useState( "instruction" );
   const params = useParams();

   const getData = async () =>
   {
      let cached = localStorage.getItem( `recipe${ params.id }` );
      if ( cached )
      {
         let data = JSON.parse( cached );
         setData( data );
         console.log( data );
      }
      else
      {
         const api = await fetch( `https://api.spoonacular.com/recipes/${ params.id }/information?apiKey=${ process.env.REACT_APP_API_KEY }` );
         const json = await api.json();
         setData( json );
         localStorage.setItem( `recipe${ params.id }`, JSON.stringify( json ) );
      }
   };
   useEffect( () =>
   {
      getData();
   }, [] );
   return (
      <Wrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
         <div>
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
         </div>
         <div>
            <Button className={tab == 'instruction' ? 'active' : ''} onClick={() => setTab( 'instruction' )}>Instruction</Button>
            <Button className={tab == 'ingredient' ? 'active' : ''} onClick={() => setTab( 'ingredient' )}>Ingredients</Button>
            <Info>
               {
                  tab == 'instruction' ? (
                     <div dangerouslySetInnerHTML={{__html: data.instructions}}></div>
                  ) : (
                     <ul>
                        {
                           data.extendedIngredients.map( ing =>
                              <li key={ing.id}>
                                 <p>{ing.original}</p>
                              </li>
                           )
                        }
                     </ul>
                  )
               }
            </Info>
         </div>
      </Wrapper>
   );
}

const Wrapper = styled(motion.div)`
   margin-top: 10rem;
   margin-bottom: 5rem;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 2rem;

   >div{
      width: 45%;
      overflow: hidden;

      div{
         width: 100%;
      }
   }
   img{
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 100%;
   }
   h1 {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2rem;
   }
   h2 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
   p {
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5rem;
   }
   ul{
      margin-top: 2rem;
   }
   li{
      font-size: 1.2rem;
      line-height: 2.5rem;
      p{
         font-weight: 500;
      }
   }
   .active{
      background: linear-gradient(35deg,#494949,#313131);
      color: white;
   }
`;

const Button = styled.button`
   padding: 1rem 2rem;
   color : #313131;
   background: white;
   border: 2px solid #313131;
   margin-right: 2rem;
   font-weight : 600;
`;

const Info = styled.div`
   margin-top: 2rem;
`;
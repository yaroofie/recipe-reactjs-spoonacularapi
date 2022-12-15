import { Route, Routes, useLocation } from "react-router-dom"

import { AnimatePresence } from "framer-motion";
import Cuisine from "./Cuisine";
import Home from "./Home";
import SearchResult from "./SearchResult";
import Recipe from "./Recipe";

export default function Pages ()
{
   const location = useLocation();
  return (
     <AnimatePresence mode="wait">
        <Routes Location={location} key={location.pathname}>
           <Route path="/" element={<Home />} />
           <Route path="/cuisine/:type" element={<Cuisine />} />
           <Route path="/search/:search" element={<SearchResult />} />
           <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>

     </AnimatePresence>
  )
}

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import { Home } from './Pages/Home';
import { MyFacts } from './Pages/MyFacts';
import { Date } from './Pages/Date';
import { Math } from './Pages/Math';
import { Trivia } from './Pages/Trivia';
import { Year } from './Pages/Year';

import { Layout } from './layout';


 /*
  npm install framer-motion react-icons react-router-dom styled-components
  npm install @splide.js/react-splide
  background: linear-gradient(60deg, rgb(33, 199, 199), rgb(7, 236, 7));
 */

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home page="random"/>} />
          <Route path="myFacts" element={<MyFacts />} />
          <Route path="date" element={<Date page="date"/>} />
          <Route path="year" element={<Year page="year"/>} />
          <Route path="math" element={<Math page="math"/>} />
          <Route path="trivia" element={<Trivia page="trivia"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import { Random } from './Pages/Random';
import { MyFacts } from './Pages/MyFacts';
import { Date } from './Pages/Date';
import { Math } from './Pages/Math';
import { Trivia } from './Pages/Trivia';
import { Year } from './Pages/Year';

import { Layout } from './layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyFacts />} />
          <Route path='random' element={<Random page="random"/>} />
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

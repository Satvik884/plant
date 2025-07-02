// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './front-page';
import Shopping from './shopping';
import Payment from './Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/plant" element={<Frontpage />} />
        <Route path="/plant/shopping" element={<Shopping />} />
        <Route path="/plant/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;

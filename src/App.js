import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
// import Demo from './Pages/Demo';
import Demo from "./Pages/Demo";
import Proposal from "./Pages/Proposal";
import NewProposal from "./Pages/NewProposal";


const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F]
  text-white select-none flex-col justify-between`
}

function App() {

  return (
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/new-proposal" element={<NewProposal />} />
        {/* <Route path="/proposal" element={<Proposal />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Question from "./components/Question";


function App() {
  if(localStorage.getItem("ques")==null){
    localStorage.setItem("ques",0);
  }
  if(localStorage.getItem("score")==null){
    localStorage.setItem("score",0);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="quiz" element={<Quiz />}></Route>
        <Route path="quiz/:id" element={<Question />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

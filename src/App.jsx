import "./App.css";
import { Select } from "@chakra-ui/react";
import backImages1 from "./img/backImages1.png";

function App() {
  return (
    <div className="App">
      <div className="backgroundSchemas">
        {/* <iframe src='https://view.genial.ly/62432a8d9bdb220018f33271'/>
  <iframe src='https://view.genial.ly/62432a8d9bdb220018f33271'/>
  <iframe src='https://view.genial.ly/62432a8d9bdb220018f33271'/>
  <iframe src='https://view.genial.ly/62432a8d9bdb220018f33271'/> */}
        <div className="backcontainer">
          <img className="backImg1" src={backImages1} alt="" />
        </div>
        <div className="backcontainer">
          <img className="backImg1" src={backImages1} alt="" />
        </div>
        <div className="backcontainer">
          <img className="backImg1" src={backImages1} alt="" />
        </div>
        <div className="backcontainer">
          <img className="backImg1" src={backImages1} alt="" />
        </div>
      </div>
      <div className="choose">
        <h1>
          Интерактивный плакат для подготовки по специальности "Оператор
          технологических установок"
        </h1>

        <Select variant="outline" placeholder="Выберите схему">
          <option value="option1">Option 1</option>
          <option value="option1">Option 1</option>
          <option value="option1">Option 1</option>
          <option value="option1">Option 1</option>
        </Select>
      </div>
    </div>
  );
}

export default App;

import "./App.scss";
import { Select } from "@chakra-ui/react";
import backImages1 from "./img/backImages1.png";
import backImages2 from "./img/backImages2.png";
import backImages3 from "./img/backImages3.png";
import backImages4 from "./img/backImages4.png";
import MyModal from "./components/Modal/MyModal";
import React, { useState, useRef } from "react";
import ActiveModal from "./components/ActiveModal";

function App() {
  const data = [
    {
      src:
        "https://view.genial.ly/63d0cd3bd9cd0c00198e181f/interactive-image-tatorej-izomerizaciya",
      text: 'Таторей '
    },
    {
      src:
        "https://view.genial.ly/63a09167beb20c0012ff5826/interactive-image-vakuumnaya-kolonna-vt-1",
        text: 'Вакуумная колонна ВТ-1'
    },
    {
      src:
        "https://view.genial.ly/63aa8e6e12e4fc0018bbc3b0/interactive-image-shema-podogreva-syrya-vt-1",
        text:'Подогрев сырья ВТ-1'
    },
    {
      src:
        "https://view.genial.ly/625ea251d05c83001818866b/interactive-image-blok-regeneracii-mea",
        text:'Блок регенерации МЭА '
    },
    {
      src:
        "https://view.genial.ly/625ea29d271fd60011653002/interactive-image-blok-ochistki-vsg",
        text:'Блок очистки ВСГ'
    },
    {
      src:
        "https://view.genial.ly/625ea2a0bf830200180763c0/interactive-image-shema-bloka-stabilizacii",
        text:'Блок стабилизации'
    },
    {
      src:
        "https://view.genial.ly/62432a8d9bdb220018f33271/interactive-image-shema-reaktornogo-bloka",
        text:'Реакторный блок '
    },
  ];
  const selectRef = useRef("Modal");
  const value = selectRef.current.value;

  console.log(value);

  return (
    <div className="App">
      {  function handleModal(e) {
    console.log(e.target.value);

    return (<ActiveModal src={e.target.value} />)
  }}
      {/* <ActiveModal src="https://view.genial.ly/63d0cd3bd9cd0c00198e181f" /> */}
      <div className="backgroundSchemas">
        <MyModal src="https://view.genial.ly/63d0cd3bd9cd0c00198e181f/">
          <div className="backcontainer">
            <img className="backImg1" src={backImages1} alt="" />
          </div>
        </MyModal>
        <MyModal src="https://view.genial.ly/63a09167beb20c0012ff5826/">
          <div className="backcontainer">
            <img className="backImg1" src={backImages2} alt="" />
          </div>
        </MyModal>
        <MyModal src="https://view.genial.ly/625ea29d271fd60011653002/">
          <div className="backcontainer">
            <img className="backImg1" src={backImages3} alt="" />
          </div>
        </MyModal>
        <MyModal src="https://view.genial.ly/62432a8d9bdb220018f33271/">
          <div className="backcontainer">
            <img className="backImg1" src={backImages4} alt="" />
          </div>
        </MyModal>
      </div>
      <div className="choose">
        <h1>
          Электронный учебник для подготовки по специальности "Оператор
          технологических установок"
        </h1>
        {data.map((item)=>(
          <ActiveModal src={item.src} text={item.text}/>
          
        ))}
        {/* <Select
          ref={selectRef}
          onChange={(e) => handleModal(e)}
          variant="outline"
          placeholder="Установки"
        >
          <optgroup label="Таторей">
            <option
              value="https://view.genial.ly/63d0cd3bd9cd0c00198e181f/"
              color="#000"
            >
              Таторей
            </option>
          </optgroup>

          <optgroup label="ВТ-1">
            <option value="https://view.genial.ly/63a09167beb20c0012ff5826/">
              Вакуумная колонна ВТ-1
            </option>
            <option value="option3">Подогрев сырья ВТ-1</option>
          </optgroup>
          <optgroup label="Гидроочистка">
            <option value="option4" color="#000">
              Блок регенерации МЭА
            </option>
            <option value="option5">Блок очистки ВСГ</option>
            <option value="option6">Блок стабилизации</option>
            <option value="option7">Реакторный блок</option>
          </optgroup>
        </Select> */}
      </div>
      <div className="footer">
        <span></span>
        <a href="https://eor-neft.sava.site/" target="_eblank">
          <span>eor-neft.sava.site</span>
        </a>
        <a href="https://github.com/YuriAndreevich" target="_eblank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="gt"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
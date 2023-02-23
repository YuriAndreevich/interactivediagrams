import React from "react";
import "./dropdown.scss";

import MyModal from "../Modal/MyModal";

function Dropdown() {
  // {data.map((item)=>(
  //     <ActiveModal src={item.src}>{item.text}</ActiveModal>

  //   ))}
  return (
    <nav>
      <menu>
        <div className="menuitem" id="demo1">
          <a>Установки</a>
          
          <menu>
          <div className="menuitem" id="demo2">
              <a>Гидроочистка</a>
              <menu>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/625ea251d05c83001818866b/"
                >
                  <a>Блок регенерации МЭА</a>
                </MyModal>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/625ea29d271fd60011653002/"
                >
                  <a>Блок очистки ВСГ</a>
                </MyModal>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/625ea2a0bf830200180763c0/"
                >
                  <a>Блок стабилизации </a>
                </MyModal>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/62432a8d9bdb220018f33271/"
                >
                  <a>Реакторный блок</a>
                </MyModal>
              </menu>
            </div>

            <div className="menuitem">
              <a>ВТ-1</a>
              <menu>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/63a09167beb20c0012ff5826/"
                >
                  <a>Вакуумная колонна ВТ-1</a>
                </MyModal>
                <MyModal
                  classname="menuitem"
                  src="https://view.genial.ly/63aa8e6e12e4fc0018bbc3b0/"
                >
                  <a>Подогрев сырья ВТ-1</a>
                </MyModal>
              </menu>
            </div>
            <MyModal
              classname="menuitem"
              src="https://view.genial.ly/63d0cd3bd9cd0c00198e181f/"
            >
              <a>Татарей</a>
            </MyModal>
          </menu>
        </div>
      </menu>
    </nav>
  );
}

export default Dropdown;

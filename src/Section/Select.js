import React from "react";

const Select = ({ onGetSectionData, onChangeSize, customTableSize }) => {
  const [smallTableSize, middleTableSize] = [100, 200];

  return (
    <div className="section-select">
      <div className="section-select__title">Выберите набор данных: </div>
      <ol>
        <li className="section-select__row">
          <span>Малый: ({smallTableSize} шт)</span>
          <button
            className="section-select__btn"
            onClick={() => onGetSectionData(smallTableSize)}
          >
            Выбрать
          </button>
        </li>
        <li className="section-select__row">
          <span>Средний ({middleTableSize} шт):</span>
          <button
            className="section-select__btn"
            onClick={() => onGetSectionData(middleTableSize)}
          >
            Выбрать
          </button>
        </li>
        <li className="section-select__row">
          <span>Свой от 1 до {customTableSize} шт:</span>
          <input
            type="text"
            onChange={e => onChangeSize(e.target.value)}
            value={customTableSize}
          />
          <button
            className="section-select__btn"
            onClick={() => onGetSectionData(customTableSize)}
          >
            Выбрать
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Select;

import React from "react";

const Select = ({ onGetSectionData, onChangeSize, customTableSize }) => {
  const [smallTableSize, middleTableSize] = [100, 200];

  return (
    <div>
      <span>Выберите набор данных: </span>
      <button onClick={() => onGetSectionData(smallTableSize)}>
        Малый ({smallTableSize} шт)
      </button>
      <button onClick={() => onGetSectionData(middleTableSize)}>
        Средний ({middleTableSize} шт)
      </button>
      <span>Свой от 1 до {customTableSize} шт:</span>
      <input
        type="text"
        onChange={e => onChangeSize(e.target.value)}
        value={customTableSize}
      />
      <button onClick={() => onGetSectionData(customTableSize)}>Выбрать</button>
    </div>
  );
};

export default Select;

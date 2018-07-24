import data from "./data.json";

export const getTableData = (size = data.length - 1) => {
  return mapData(data, Number(size));
};

const mapData = (data, count) => {
  const headers = data.slice(0, 1)[0];

  const products = data.slice(1, count + 1).map(product => {
    const result = {};
    Object.keys(headers).forEach((key, index) => {
      result[key] = product[index];
    });
    return result;
  });
  return { headers, products };
};

export const getDataCount = () => data.length - 1;

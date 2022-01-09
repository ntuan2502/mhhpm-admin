import format from "date-format";
export const currencyFormat = (string) => {
  return parseInt(string).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

export const dateFormat = (string) => {
  return format.parse(format.ISO8601_FORMAT, string).toLocaleString();
  // return format.asString("hh:mm:ss dd/MM/yyyy", string);
};

export default function getDateArrayInterval (start, end) {
  let
    arr = [],
    dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
}

import { string, arrayOf, number } from "prop-types";

function Items({ items, text }) {
  const renderFunc = () => {
    return items.map(({ id, message }) => <li key={id}>{message}</li>);
  };

  const ref = items.toReversed().map(({ id, message }) => <li key={id}>{message}</li>);

  return (
    <div>
      {text}
      <p>함수 실행 결과 값 반환</p>
      <ul>{renderFunc()}</ul>
      <p>함수 몸체의 변수 참조</p>
      <ul>{ref}</ul>
      <p>인라인 코드 로직 삽입</p>
      <ul></ul>
    </div>
  );
}
export default Items;

Items.propTypes = {
  items: arrayOf(string),
  text: string,
};

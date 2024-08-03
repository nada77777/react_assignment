import { favoriteFoodType } from "@/@types/types.d";

function StringItem({ favoriteFood }) {
  return (
    <>
      <dt>String type data 랜더링</dt>
      <dd>
        <p>선호 음식을 String type의 data로 랜더링</p>
        <span>나의 선호 음식은 {favoriteFood}.</span>
      </dd>
    </>
  );
}

export default StringItem;

StringItem.propTypes = {
  favoriteFood: favoriteFoodType.isRequired,
};

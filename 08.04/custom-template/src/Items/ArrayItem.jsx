import { plansType } from "@/@types/types.d";

function ArrayItem({ plans }) {
  const planItem = plans.map(({ id, plan }) => <li key={id}>나의 계획은 {plan}</li>);

  return (
    <>
      <dt>Array type data 랜더링</dt>
      <dd>
        <p>자신의 계획을 Array type의 data로 랜더링</p>
        <ul>{planItem}</ul>
      </dd>
    </>
  );
}

export default ArrayItem;

ArrayItem.propTypes = {
  plans: plansType.isRequired,
};

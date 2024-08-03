import { profileDataType } from "@/@types/types.d";
import { Fragment } from "react";

function ObjectItem({ profileData }) {
  const renderProfileData = Object.entries(profileData).map(([key, value]) => (
    <Fragment key={key}>
      <dt>{key}</dt>
      <dd className="profileValue">{value}</dd>
    </Fragment>
  ));

  return (
    <>
      <dt>Object type data 랜더링</dt>
      <dd>
        <p>자신의 프로필을 Object type의 data로 랜더링</p>
        {renderProfileData}
      </dd>
    </>
  );
}

export default ObjectItem;

ObjectItem.propTypes = {
  profileData: profileDataType.isRequired,
};

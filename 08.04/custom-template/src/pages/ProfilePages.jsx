import ArrayItem from "@/Items/ArrayItem";
import ObjectItem from "@/Items/ObjectItem";
import StringItem from "@/Items/StringItem";
import * as data from "@/data/profileData";
function ProfilePages() {
  const { favoriteFood, plans, profileData } = data;
  return (
    <dl className="myInfoList">
      <StringItem favoriteFood={favoriteFood} />
      <ArrayItem plans={plans} />
      <ObjectItem profileData={profileData} />
    </dl>
  );
}

export default ProfilePages;

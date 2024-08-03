import Items from "@/components/Items";
import { Fragment } from "react";
import * as learnData from "@/data/learn";
import RenderObject from "@/components/RenderObject";

function MainPage() {
  const { statusMessagesWithID, reactLibrary } = learnData;
  console.log(statusMessagesWithID, reactLibrary);

  return (
    <Fragment>
      <h1>main page</h1>
      <RenderObject jordan={reactLibrary} />
      <Items items={statusMessagesWithID} text={"타입 검사 임시"} />
    </Fragment>
  );
}

export default MainPage;

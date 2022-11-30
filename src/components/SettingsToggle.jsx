import { useEffect, useState } from "react";
import BookinSwitch from "./BookinSwitch";

export default function SettingsToggle({
  title,
  subTitle,
  rightValue,
  leftValue,
  checked,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "left", paddingRight: "50px" }}>
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
        <BookinSwitch
          title={title}
          checked={checked}
          rightValue={rightValue}
          leftValue={leftValue}
        />
      </div>
    </>
  );
}

import BookinSwitch from "./BookinSwitch";

export default function SettingsToggle({
  name,
  subTitle,
  rightValue,
  leftValue,
  checked,
  id,
  activeUser,
  setActiveUser
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
          <h4>{name}</h4>
          <p>{subTitle}</p>
        </div>
        <BookinSwitch
          setActiveUser={setActiveUser}
          activeUser={activeUser}
          id={id}
          name={name}
          checked={checked}
          rightValue={rightValue}
          leftValue={leftValue}
        />
      </div>
    </>
  );
}

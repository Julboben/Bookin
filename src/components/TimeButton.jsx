export default function TimeButton({ title, value, setChoosenTime }) {

  const handleClick = (event) => {
    setChoosenTime(event.target.value);
  };

  /* Keeps the focus on time-button, with only being able to choose ONE */
  const buttons = document.querySelectorAll(".time-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => button.classList.remove("active"));
      button.classList.add("active");
    });
  });

  return (
    <>
      <button className="time-button" value={value} onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

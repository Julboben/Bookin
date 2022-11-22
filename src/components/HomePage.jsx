import MultiActionAreaCard from "./MultiActionAreaCard";
import profilepic from "./profilepic.jpg";

export default function HomePage() {
  return (
    <>
      <h1>God formiddag, User!</h1>
      <div className="container">
        <MultiActionAreaCard alt="Hej" img={profilepic} />
        <MultiActionAreaCard alt="Hej" img={profilepic} />
      </div>
    </>
  );
}

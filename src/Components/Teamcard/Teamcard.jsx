import "./Teamcard.css";

export default function Teamcard({ img, name, title }) {
  return (
    <>
      <div>
        <div className="teamimg">
          <img src={img} alt="" />
        </div>
        <div className="cardbackground">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

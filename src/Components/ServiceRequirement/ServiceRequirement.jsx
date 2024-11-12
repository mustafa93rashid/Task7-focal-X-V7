import "./ServiceRequirement.css";

export default function ServiceRequirement({ number, mtitle, mpargraph }) {
  return (
    <section>
      <div className="MR-service-req-card-content">
        <span>{number}</span>
        <h4>{mtitle}</h4>
        <p>{mpargraph}</p>
      </div>
    </section>
  );
}

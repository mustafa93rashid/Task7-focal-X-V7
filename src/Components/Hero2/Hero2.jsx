import "./Hero2.css";

export default function Hero2({ title, Section }) {
  return (
    <>
      <div class="about-section">
        <div class="overlay">
          <h2>{title}</h2>
          <p>
            <a href="#home">Home</a> &gt; <span>{Section}</span>
          </p>
        </div>
      </div>
    </>
  );
}

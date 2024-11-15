import { FaRegStar } from "react-icons/fa";
import "./TestimonilsCard.css";
import { TiStarFullOutline } from "react-icons/ti";

export default function TestimonilsCard({ paragraph, img, name, position }) {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <div className="MR-testimonials-card">
        {/* Star Ratings */}
        <div className="MR-stars">
          <TiStarFullOutline className="MR-FilledStar" />
          <TiStarFullOutline className="MR-FilledStar" />
          <TiStarFullOutline className="MR-FilledStar" />
          <TiStarFullOutline className="MR-FilledStar" />
          <FaRegStar className="MR-OutlinedStar" />
        </div>
        <p>{paragraph}</p>

        {/* Client Info */}
        <div className="MR-testimonials-card-info">
          <div className="MR-picture-and-title">
            <img src={img} alt={name} className="MR-testimonials-card-img" />
            <div>
              <h3>{name}</h3>
              <span>{position}</span>
            </div>
          </div>
          <img
            src="./image/right-quotation-sign-svgrepo-com.svg"
            className="MR-testimonials-card-quotation"
            alt="Quotation Mark"
          />
        </div>
      </div>
    </div>
  );
}

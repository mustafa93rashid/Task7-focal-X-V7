import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import BlogCard from "../BlogCard/BlogCard";
import "./Blog.css";
import Blogimg1 from "/image/blogThumb1_2.webp";
import Blogadminimg1 from "/image/blogProfile1_2.webp";
import Blogimg2 from "/image/blogThumb1_3.webp";
import Blogadminimg2 from "/image/blogProfile1_3.webp";
import Blogimg3 from "/image/blogThumb1_1.webp";
import Blogadminimg3 from "/image/blogProfile1_3.webp";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export default function Blog() {
  return (
    <section className="MR-Blog">
      <div className="MR-BlogTitle">
        <p>
          <HiOutlineArrowLongLeft /> BLOG & NEWS <HiOutlineArrowLongRight />
        </p>
        <div className="MR-BlogDescrption-Icon">
          <div>
            <h3>Featured News And Insights</h3>
          </div>

          <div className="MR-SectionSubtitleButton">
            <button>
              <IoMdArrowRoundBack />
            </button>
            <button>
              <IoMdArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
      <div className="blogcard-flex">
        {[
          {
            img: Blogimg1,
            adminImg: Blogadminimg1,
            text: "Best And Fastest Data Server Ever",
            date: "MARCH 14,2024",
            button: "Uncategorized",
          },
          {
            img: Blogimg2,
            adminImg: Blogadminimg2,
            text: "Life Wont One Beast Air Over Above All",
            date: "MARCH 29,2024",
            button: "Technology",
          },
          {
            img: Blogimg3,
            adminImg: Blogadminimg3,
            text: "Attentive Was Born in 2015 Help Sales Teams",
            date: "MARCH 24,2024",
            button: "Shared Hosting",
          },
        ].map((data, index) => (
          <BlogCard
            key={index}
            Blogimg={data.img}
            Blogbutton={data.button}
            Blogdate={data.date}
            Blogtitle={data.text}
            Blogadminimg={data.adminImg}
          />
        ))}
      </div>
      <div className="blogcard-flex-none">
        {[
          {
            img: Blogimg1,
            adminImg: Blogadminimg1,
            text: "Best And Fastest Data Server Ever",
            date: "MARCH 14,2024",
            button: "Uncategorized",
          },
        ].map((data, index) => (
          <BlogCard
            key={index}
            Blogimg={data.img}
            Blogbutton={data.button}
            Blogdate={data.date}
            Blogtitle={data.text}
            Blogadminimg={data.adminImg}
          />
        ))}
      </div>
    </section>
  );
}

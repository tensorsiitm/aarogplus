import img1 from "/src/assets/images/Domain/image 1.png";
import img2 from "/src/assets/images/Domain/corporate-health-and-wellness-1 1.png";
import img3 from "/src/assets/images/Domain/image.png";
import img4 from "/src/assets/images/Domain/education-technology-trends-scaled.png";
import img5 from "/src/assets/images/Domain/OIP (53).png";
import img6 from "/src/assets/images/Domain/OIP (54).png";
import img7 from "/src/assets/images/Domain/scheduled growth graph.png";

function Domain() {
  const row1 = [
    {
      image: img1,
      heading: "Nutrition Technology",
      text: "We invest in companies that leverage cutting-edge technology to make nutrition accessible to all.",
    },
    {
      image: img2,
      heading: "Health & Wellness Startups",
      text: "Our focus is on innovative ventures that promote sustainable and balanced living",
    },
    {
      image: img3,
      heading: "Food & Agri-Tech",
      text: "Supporting businesses that are rethinking the way we produce and consume food for a healthier future",
    },
  ];
  return (
    <div className="domain">
      <h1>Domain of Interest</h1>
      <div className="row1">
        {row1.map((item, index) => {
          return (
            <div key={index} className="item1">
              <img src={item.image} />
              <div className="content">
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row2">
        <div className="item2">
          <div className="content">
            <h2>Educational Platforms</h2>
            <p>We are interested in initiatives that educate the public about nutrition and healthy living.</p>
          </div>
          <div className="img-wrapper">
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
          </div>
        </div>
        <div className="item2">
          <div className="content">
            <h2>Sustainable Food Systems</h2>
            <p>We support innovations that focus on creating environmentally friendly and sustainable ways of producing, distributing, and consuming nutritious food, ensuring long-term food security for all.</p>
          </div>
          <img id="img7" src={img7}/>
        </div>
      </div>
    </div>
  );
}

export default Domain;

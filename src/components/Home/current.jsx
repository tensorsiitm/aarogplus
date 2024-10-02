import img1 from "/src/assets/images/Current/OIP (59).png";
import img2 from "/src/assets/images/Current/Screenshot 2024-07-22 150622.png";
import img3 from "/src/assets/images/Current/Screenshot 2024-07-21 105230.png";
import img4 from "/src/assets/images/Current/Screenshot 2024-07-21 105251.png";
import img5 from "/src/assets/images/Current/OIP (59) cut.png";

function Current() {
  const currentList = [
    {
      image: img2,
      head: "XYLIVE",
      text: "Started on January 12 , 2024",
    },
    {
      image: img5,
      head: "XYLIVE",
      text: "Started on October 1 , 2024",
    },
    {
      image: img3,
      head: "XYLIVE",
      text: "Started on January 12 , 2024",
    },
    {
      image: img4,
      head: "XYLIVE",
      text: "Started on January 12 , 2024",
    },
  ];
  return (
    <div className="current" id="current">
      <h1>Current Pursuits</h1>

      <div className="current-wrapper">
        <div className="content-wrapper">
          <img src={img1} />
          <div className="content">
            <h1>XYLIVE</h1>
            <p className="text">
              XYLIVE is an innovative health and wellness platform designed to
              provide personalized nutrition and lifestyle solutions. It offers
              users tailored diet plans, real-time consultations with certified
              nutritionists, and holistic wellness coaching. Beyond nutrition,
              XYLIVE integrates fitness tracking and mental well-being support,
              creating a comprehensive approach to health management. Our goal
              is to empower individuals to take control of their health journey
              with advanced tools, expert guidance, and a focus on sustainable,
              long-term results.
            </p>
          </div>
        </div>
        <div className="current-list">
          {currentList.map((item, index) => {
            return (
              <div key={index} className="list-item" title={item.head + "\n" + item.text}>
                <img src={item.image} />
                <div className="item-wrapper">
                  <h1>{item.head}</h1>
                  <div>{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Current;

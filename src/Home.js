import "reactjs-navbar/dist/index.css";
import faker from "faker";
import Draggable from "react-draggable";
import { SocialIcon } from "react-social-icons";
import SearchField from "react-search-field";
import { useState } from "react";
export default function Home() {
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);

  const addVideos = () => {
    let urls = [];
    for (let i = 0; i < 12; i++) {
      urls.push({
        url: `${faker.image.sports()}?random=${i}`,
        title: faker.lorem.sentence(),
        date: faker.date.past().toISOString().split("T")[0],
      });
    }
    setVideos(urls);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useState(() => {
    addVideos();
  }, []);

  return (
    <div className="home">
      <div className="navbar">
        <img
          src="https://www.socialboat.live/images/logo.svg"
          alt="logo"
          width="55px"
          height="55px"
        />
        <div className="heading-2">
          <img
            src="https://www.socialboat.live/images/SocialBoat.png"
            alt="logo"
            width="250px"
            height="50px"
          />
          <br />
        </div>
      </div>
      <div className="home-content">
        <div className="heading">
          Fitness Videos
          <div>
            <SearchField
              placeholder="Search..."
              onChange={handleSearch}
              classNames="test-class"
            />
          </div>
        </div>
        <div className="video-container">
          {videos.map((val) => {
            if (val.title.includes(search)) {
              return (
                <Draggable>
                  <div className="video-card">
                    <div>
                      <img
                        src={val.url}
                        width="290px"
                        height="200px"
                        alt="random"
                      />
                    </div>
                    <div>
                      <strong>{val.title}</strong>
                    </div>
                    <div className="date">{val.date}</div>
                  </div>
                </Draggable>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url="https://linkedin.com/" />
          <SocialIcon url="https://instagram.com/" />
          <SocialIcon url="https://facebook.com/" />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

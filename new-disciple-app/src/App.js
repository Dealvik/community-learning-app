import "./App.css";
import Video from "./Video";
import { useEffect, useState } from "react";
import { db, getVideos } from "./firebase";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Person2Icon from "@mui/icons-material/Person2";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LanguageIcon from "@mui/icons-material/Language";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(0);
  // tesitng

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // useEffect(() => {
  //   // fires once when the component loads AND when videos change
  //   db.collection("videos").onSnapshot((snapshot) => {
  //     setVideos(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, [videos]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoList = await getVideos(db); // Fetch videos using the getVideos function
        setVideos(videoList);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="app">
      {/* SIDE BAR OF THE WEB APP */}
      <div className="side-bar">
        <div className="side-logo">
          <a href="./" className="logo">
            Disciple
          </a>
        </div>
        <div className="list-items">
          <div className="item-group">
            <a
              className="item"
              href="/practice-hub"
              style={{ textDecoration: "none" }}
            >
              <span className="item-span">
                <div className="image-logo">
                  <div className="item-icon">
                    <LocalLibraryIcon style={{ color: "white" }} />
                  </div>
                  <span>Learn</span>
                </div>
              </span>
            </a>
          </div>
          <div className="item-group">
            <a
              className="item"
              href="/practice-hub"
              style={{ textDecoration: "none" }}
            >
              <span className="item-span">
                <div className="image-logo">
                  <div className="item-icon">
                    <Person2Icon style={{ color: "white" }} />
                  </div>
                  <span>Profile</span>
                </div>
              </span>
            </a>
          </div>
          <div className="item-group">
            <a
              className="item"
              href="/practice-hub"
              style={{ textDecoration: "none" }}
            >
              <span className="item-span">
                <div className="image-logo">
                  <div className="item-icon">
                    <MoreHorizIcon style={{ color: "white" }} />
                  </div>
                  <span>More</span>
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION OF THE WEB APP */}
      <div className="main-content">
        <div className="inner-content">
          <div className="right-content">
            <div className="inside-right-content">
              <div className="top-info">
                <div className="course">
                  <span className="" role="button" tabIndex={0}>
                    <LanguageIcon className="course-icon" color="white" />
                  </span>
                  {/* <span className="course-name">
                    History 101 By - David Kofman
                  </span> */}
                </div>
                <div className="streak"></div>
                <div className="gold">
                  <span className="" role="button" tabIndex={0}>
                    <img
                      src="https://www.svgrepo.com/show/232293/gold-ingots-gold.svg"
                      alt="gold icon"
                      className="gold-icon"
                    />
                    <span className="gold-number">4205</span>
                  </span>
                </div>
                <div className="lives"></div>
              </div>
              <div className="ad-info">
                <div class="Ekspr _3ug7_ _20Ytt">
                  <img
                    height="20.620689655172413"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2e50c3e8358914df5285dc8cf45d0b4c.svg"
                    width="78"
                    data-test="plus-offer-logo"
                  />
                  <img
                    class="_3kftQ"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/super/fb7130289a205fadd2e196b9cc866555.svg"
                  />
                  <div class="_2KHBK">
                    <h2 class="_2O1b2 _3ydVq _3HNwo">Try Super for free</h2>
                    <div class="adwZa _1LpFA">
                      No ads, personalized practice, and unlimited Legendary!
                    </div>
                    <button class="_3XvZO _3HhhB _2NolF _275sd _1ZefG t77s_ _1w9CW _1SeBB">
                      <span class="_13HXc">Try 2 weeks free</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rank-info"></div>
              <div className="adblocker-info">
                <div class="_3bfsh">
                  <div class="_3s8lm">
                    <img
                      class="EeW5u"
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2b5fd4af60c95dbc639bebff2c405648.svg"
                    />
                    <div class="_2LA5y _3_D9P">
                      <h2 class="_2FHSx">Using an ad blocker?</h2>
                      <div class="_1Z8xs">
                        Support education with Super Duolingo and we’ll remove
                        ads for you
                      </div>
                    </div>
                    <div class="_3hndk _3_D9P">
                      <button class="_3HhhB _2NolF _275sd _1ZefG _2zCE9 _1Rcu8">
                        <span class="_13HXc">Try Super for free</span>
                      </button>
                    </div>
                    <div class="_14i4B _3_D9P">
                      <div class="_1SCvr">
                        <a
                          href="https://support.duolingo.com/hc/en-us/articles/115005407166-How-can-I-disable-my-ad-blocker-to-support-Duolingo-"
                          target="_blank"
                          rel="noopener"
                          tabindex="0"
                        >
                          Disable ad blocker
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="_2hoJ8 _3ug7_ _20Ytt">
                    <div class="_3DAGK">
                      <div class="_1c1SO">
                        <ins
                          class="adsbygoogle _3cHyL"
                          data-ad-client="ca-pub-2200036119221572"
                          data-ad-slot="5745517645"
                        ></ins>
                      </div>
                      <div class="_207GL _2__FI _1I0jE _3yAjN">Remove ads</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-group">
                <ul className="footer-info">
                  <li className="footer-item">
                    <a href="/info">About</a>
                  </li>
                  <li className="footer-item">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="footer-item">
                    <a href="/store">Store</a>
                  </li>
                  <li className="footer-item">
                    <a href="/careers">Careers</a>
                  </li>
                  <li className="footer-item">
                    <a href="/investors">Investors</a>
                  </li>
                  <li className="footer-item">
                    <a href="/terms">Terms</a>
                  </li>
                  <li className="footer-item">
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="middle-content"></div>
        </div>
      </div>

      {/* 
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <YouTube videoId="GRdkxbDOaL0" opts={opts} />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zSVRtM1x9wQ?si=PULVmnoD1ry3MKt4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, comments, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            /> */}
      {/* <div key={url} className="video"> */}
      {/* Display video information here */}
      {/* <p>URL: {url}</p> */}
      {/* <p>Channel: {channel}</p> */}
      {/* <p>Description: {description}</p> */}
      {/* <p>Song: {song}</p> */}
      {/* <p>Likes: {likes}</p> */}
      {/* <p>Comments: {comments}</p> */}
      {/* <p>Shares: {shares}</p> */}
      {/* </div> */}
      {/* )
        )} */}
      {/* </div> */}
    </div>

    // <div className="app">
    //   <div className="app__videos">
    //     {videos.map(
    //       ({ url, channel, description, song, likes, comments, shares }) => (
    //         <Video
    //           url={url}
    //           channel={channel}
    //           description={description}
    //           song={song}
    //           likes={likes}
    //           comments={comments}
    //           shares={shares}
    //         />
    //       )
    //     )}
    //   </div>
    // </div>
  );
}

export default App;

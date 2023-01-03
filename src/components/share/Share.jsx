import "./share.scss";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VybHklMjBoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src="https://www.bing.com/th?id=OIP.ZnVOxTimUNfwBYqS36h8LAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="https://www.bing.com/th?id=OIP.RJwgX7x98VNnkH02LQ0L-AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="https://th.bing.com/th/id/R.40d857dd34e2c1c23f54e2bbd6371cbd?rik=6cR7zA%2fjEnTHpA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_383022.png&ehk=J8Q8Oi3R9oWupa%2fjVph7kQRzH9CHIrDRLPVVbH1ALzA%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
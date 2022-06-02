import "./profile.css";
import Prof from "../../../app/assets/images/prof.jpg";
import { userdata } from "../../../app/user/userdata";
const Profile = () => {
  console.log([userdata])
  return (
    <div className="profile w-100 h-auto">
      <div className="profileTop bg-white w-100">
        <div className="d-flex align-items-center">
          <div className="profileImg ">
            <img src={userdata[0].imgUrl} alt="" />
          </div>
          <div>
            <h4 className="ps-4 text-dark">Yakut Ahmedin</h4>
            <p className="text-dark ps-4">Student/ Full-Stack-Developer</p>
          </div>
        </div>

        <div className="profright">
          <div className=""> </div>
        </div>
      </div>

      <div className="w-100 bg-secondary rounded ps-2">
        <h4 className="pt-3 ps-4">Platform Settings</h4>
        <div className="profileMid d-flex justify-content-between vh-30 my-4 ">
          <div className="rounded profileMidStart w-100 text-dark px-3 ps-3">
            <h5 className=" mt-3 ">ACCOUNT</h5>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">Email me when someone follows me</p>
            </div>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">
                Email me when someone answers on my post
              </p>
            </div>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">
                Email me when someone mentions me
              </p>
            </div>
            <h5 className=" mt-1 ">APPLICATION</h5>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">New launches and projects</p>
            </div>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">Monthly product updates</p>
            </div>
            <div className="d-flex align-items-center justifiy-content-between">
              <input type="checkbox" />
              <p className="ps-2 text-dark">Subscribe to newsletter</p>
            </div>
          </div>
          <div className="rounded profileMidCen mx-3 ps-2 w-100">a</div>
          <div className="rounded profileMidEnd w-100">a</div>
        </div>
      </div>

      <div className="w-100 bg-secondary rounded mt-4 ps-2">
        <h4 className="py-3 ps-4">name</h4>
        <div className="profileBot  w-100 d-flex justify-content-between ">
          <div className="rounded bg-white shadow w-100 "></div>
          <div className="rounded bg-white shadow w-100 mx-3"></div>
          <div className="rounded bg-white shadow w-100 "></div>
          <div className="rounded bg-white shadow w-100 ms-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

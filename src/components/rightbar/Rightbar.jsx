import './rightbar.css'
import {Users} from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return(
      <>
<div className='birthdayContainer'>
          <img className='birthdayImg' src='assests/person/2.jpeg' alt='' />
          <span className='birthdayText'><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className='rightbarAd' src='assests/person/3.jpeg' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
              {Users.map((u)=>(
                <Online key={u.id} user={u} />
              ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () =>{
    return(
<>
<h4 className='rightbarTitle'>User Information</h4>
<div className='rightbarInfo'>
  <div className='rightbarInfoItem'>
    <span className='rightbarInfoKey'>City</span>
    <span className='rightbarInfoValue'>Indapur</span>
  </div>
  <div className='rightbarInfoItem'>
    <span className='rightbarInfoKey'>From:</span>
    <span className='rightbarInfoValue'>Pimpri</span>
  </div>
  <div className='rightbarInfoItem'>
    <span className='rightbarInfoKey'>Relationship</span>
    <span className='rightbarInfoValue'>Single</span>
  </div>
</div>
<h4 className='rightbarTitle'>User friends</h4>
<div className='rightbarFollowings'>
  <div className='rightbarFollowing'>
    <img src='assests/person/1.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
  <div className='rightbarFollowing'>
    <img src='assests/person/2.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
  <div className='rightbarFollowing'>
    <img src='assests/person/3.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
  <div className='rightbarFollowing'>
    <img src='assests/person/4.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
  <div className='rightbarFollowing'>
    <img src='assests/person/5.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
  <div className='rightbarFollowing'>
    <img src='assests/person/6.jpeg' alt='' className='rightbarFollowingImg'/>
    <span className='rightbarFollowingName'>Datta</span>
  </div>
</div>
</>
    );
  }
  return (
    <div className="rightbar">
      <div className='rightbarWrapper'>
       {profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  );
}

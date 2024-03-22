import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
  const randomCode= (code)=>{
    let result= '';
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length, i;
    code = code || 5;
    for (let i = 0; i < code; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos))
      
    }
    return result;
  }
    const {roomID}= useParams() || randomCode(5);
    let userName= randomCode(5);

    const meeting = async (element) => {
        const appID = 894880354;
        const serverSecret = "eb8415916cb64cb3d7344168ed89dcb6"; 
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(),userName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
       zp.joinRoom({
          container: element,
          sharedLinks: [
            {
               name:"copy link",
               url:window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            }
          ],
          scenario: {
            mode:ZegoUIKitPrebuilt.OneONoneCall
          },
          showScreenSharingButton:false
       })   
    }
  return (
    <div>
        <div ref={meeting} style={{ width: '100vw', height: '100vh' }}/>
    </div>
  );
}

export default Room;

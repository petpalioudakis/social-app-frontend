import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { GoogleLogin } from '@react-oauth/google';
import { decodeJwt } from 'jose';
import { client } from '../client';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  const responseSuccessGoogle = async credentialResponse => {
    const userProfileInfo = decodeJwt(credentialResponse.credential);
    localStorage.setItem('user', JSON.stringify(userProfileInfo));

    const { name, email, sub, picture } = userProfileInfo;
    const doc = {
      _id: sub,
      _type: 'user',
      image: picture,
      userName: name,
      email
    };
    await client.createIfNotExists(doc);
    navigate('/', { replace: true });
  };
  const responseFailureGoogle = () => {
    console.log('Login Failed');
  };
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          loop={true}
          className={'w-full h-full object-cover'}
          muted
          autoPlay={true}
          controls={false}
        />
        <div
          className={
            'absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'
          }>
          <div className={'p-5'}>
            <img src={logo} alt="logo" width={'130px'} />
          </div>
          <div className={'shadow-2xl'}>
            <GoogleLogin
              onSuccess={responseSuccessGoogle}
              onError={responseFailureGoogle}
              useOneTap
            />
          </div>
        </div>
      </div>
    </div>
  );
};

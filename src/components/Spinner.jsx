import { Circles } from 'react-loader-spinner';
export const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Circles
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={200}
        classname={'m-5'}
      />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

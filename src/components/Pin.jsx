import { urlFor } from '../client';

export const Pin = ({ pin: { image, destination, _id } }) => {
  return (
    <div>
      <img
        src={urlFor(image).width(250).url()}
        alt=""
        className="rounded-lg w-full"
      />
    </div>
  );
};

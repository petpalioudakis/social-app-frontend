import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

export const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={() => navigate('/search')}
          value={searchTerm}
          placeholder="Search"
          className="p-2 bg-white w-full outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user.image} className="w-12 h-12 rounded-lg" alt="" />
        </Link>
        <Link
          to={'/create-pin'}
          className="flex bg-black text-white rounded-lg w-12 h-12 items-center justify-center md:w-14 md:h-14">
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

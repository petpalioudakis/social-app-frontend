import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward, IoIosPeople } from 'react-icons/io';
import logo from '../assets/logo.png';
import { CgGames } from 'react-icons/cg';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { SiCodingninjas } from 'react-icons/si';

export const Sidebar = ({ user, closeToggle }) => {
  const isActiveStyle =
    'flex items-center px-5 gap-3 text-extra-bold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';
  const isNotActiveStyle =
    'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';

  const categories = [
    { name: 'Animals', icon: <GiPlantsAndAnimals /> },
    { name: 'People', icon: <IoIosPeople /> },
    { name: 'Gaming', icon: <CgGames /> },
    { name: 'Coding', icon: <SiCodingninjas /> }
  ];
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to={'/'}
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}>
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            onClick={handleCloseSidebar}
            to={'/'}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover Categories
          </h3>
          {categories.slice(0, categories.length - 1).map(category => (
            <NavLink
              to={`/category/${category.name}`}
              key={category.name}
              onClick={handleCloseSidebar}
              className={({ isActive }) => {
                return isActive ? isActiveStyle : isNotActiveStyle;
              }}>
              {category.name}
              {category.icon}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          className="flex  my-5 mb-3 gap-2 p-2 items-center bg-white rounded-l shadow-lg mx-3"
          onClick={handleCloseSidebar}>
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}
    </div>
  );
};

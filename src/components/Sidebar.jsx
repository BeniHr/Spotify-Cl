import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { links } from '../assets/constants';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu, HiOutlineEmojiSad } from 'react-icons/hi';
import adminUser from '../assets/constants';

const NavLinks = ({ handleClick }) => (
    <div className="mt-10">
        {links.map((item) => (
            <NavLink
                key={item.name}
                to={item.to}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-blue-400"
                onClick={() => handleClick && handleClick()}>
                <item.icon className="w-6 h-6 mr-2 " />
                {item.name}
            </NavLink>
        ))}
    </div>
);

const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log();
    return (
        <>
            <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#130101]">
                <img
                    src={logo}
                    alt={logo}
                    className="w-full h-14 object-contain"
                />
                <h2 className="text-white flex justify-center mt-5">
                    Glad you're back {adminUser.name}!
                </h2>

                <NavLinks />
            </div>
            <div className="absolute md:hidden block top-6 right-3">
                {!mobileMenuOpen ? (
                    <HiOutlineMenu
                        className="w-6 h-6 mr-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    />
                ) : (
                    <RiCloseLine
                        className="w-6 h-6 mr-2 text-white"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </div>
            <div
                className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#180202] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
                    mobileMenuOpen ? 'left-0' : '-left-full'
                }`}>
                <img
                    src={logo}
                    alt={logo}
                    className="w-full h-14 object-contain"
                />
                <h2 className="text-white flex justify-center mt-5">
                Glad you're back {adminUser.name}!
                </h2>
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    );
};

export default Sidebar;

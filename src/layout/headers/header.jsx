import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';

const Header = ({
    header_style,
    no_top_bar,
    disable_full_width,
    disable_category,
}) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className={`edu-header header-style-${
                    header_style ? header_style : '1'
                } ${
                    disable_full_width
                        ? 'disbale-header-fullwidth'
                        : 'header-fullwidth'
                } ${no_top_bar ? 'no-topbar' : ''}`}
            >
                {!no_top_bar && (
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div id="edu-sticky-placeholder"></div>
                <div
                    className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}
                >
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <svg
                                            width="44"
                                            height="44"
                                            viewBox="0 0 44 44"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M22.1342 42.0956C32.9043 42.0956 41.6352 33.3648 41.6352 22.5947C41.6352 11.8246 32.9043 3.09375 22.1342 3.09375C11.3642 3.09375 2.6333 11.8246 2.6333 22.5947C2.6333 33.3648 11.3642 42.0956 22.1342 42.0956Z"
                                                fill="#ED207D"
                                            />
                                            <path
                                                d="M24.011 20.5532C22.9385 20.5532 22.8938 21.3748 24.011 21.3748C24.4338 21.3748 24.9597 21.2063 25.4857 20.9313C24.9597 20.701 24.4338 20.5532 24.011 20.5532ZM18.4938 24.2176C19.336 24.6163 20.8725 24.8295 20.8725 24.2588C20.8725 24.0285 20.6422 23.836 20.1575 23.836C19.6316 23.836 19.061 23.9838 18.4938 24.2141V24.2176ZM17.1669 25.1663C16.9366 25.4207 16.8713 25.6098 16.8094 25.7576C16.4107 27.906 19.5903 28.5179 21.78 28.5179C24.2447 28.5179 26.1594 27.8441 27.1907 26.6651C27.9057 25.8848 28.1807 24.8535 28.0122 23.5679C27.9263 22.9354 27.5482 22.3476 26.8538 21.777C25.9497 22.4301 24.8738 22.8288 24.011 22.8288C20.9791 22.8288 20.9791 19.1026 24.011 19.1026C24.8325 19.1026 25.8432 19.4188 26.7472 19.9448C27.0635 19.6079 27.17 19.3123 27.1907 19.1438C27.2525 18.5766 26.9157 17.9648 26.3485 17.6073C25.4857 17.0401 23.9491 16.6791 22.3472 16.6791C19.5044 16.6791 16.4725 17.7757 16.2422 20.1957C16.1803 20.6804 16.2216 20.9107 16.2216 21.227C16.201 21.7529 16.5172 22.5538 17.191 23.2895C18.095 22.7223 19.171 22.3854 20.161 22.3854C22.9419 22.3854 23.0657 26.0498 20.2675 26.0498C19.1503 26.0498 18.0778 25.7335 17.1738 25.1663H17.1669ZM21.7766 29.9685C16.5963 29.9685 15.0185 27.6104 15.3966 25.5032C15.4585 25.0804 15.6716 24.661 16.0703 24.2176C15.2282 23.3135 14.7435 22.1963 14.7641 21.1857C14.7641 20.512 14.4478 17.8995 17.521 16.2804C18.8685 15.6066 20.491 15.2285 22.3438 15.2285C24.1966 15.2285 26.0288 15.6513 27.146 16.387C28.136 17.0401 28.7032 18.1573 28.6413 19.2504C28.5794 19.7351 28.3663 20.2816 27.9263 20.787C28.8303 21.5879 29.3357 22.4507 29.4422 23.3788C29.6725 25.0632 29.2738 26.476 28.2838 27.631C26.9363 29.147 24.64 29.9685 21.7766 29.9685Z"
                                                fill="#F9F4F4"
                                            />
                                        </svg>

                                        <img
                                            className="logo-dark"
                                            src="/assets/images/logo/SIM logo_second logo pink.png"
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* main menu start */}
                                    <MainMenu />
                                    {/* main menu end */}
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="header-btn">
                                        <Link
                                            href="#"
                                            className="edu-btn btn-medium"
                                        >
                                            Donate now
                                            <img src="/assets/images/icons/favorite.png"></img>
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button
                                            className="hamberger-button"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup
                    isSearchOpen={isSearchOpen}
                    setIsSearchOpen={setIsSearchOpen}
                />
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    );
};

export default Header;

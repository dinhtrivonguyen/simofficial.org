import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';

const OffCanvas = ({ isOpen, setIsOpen }) => {
    const [navTitle, setNavTitle] = useState('');

    const openMobileMenu = (menu) => {
        if (navTitle === menu) {
            setNavTitle('');
        } else {
            setNavTitle(menu);
        }
    };
    return (
        <>
            <div className={`popup-mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="inner">
                    <div className="header-top">
                        <div className="logo">
                            <Link href="/">
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

                        <div
                            className="close-menu"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 13.9933L2.40431 23.5889C2.14244 23.8508 1.81325 23.9848 1.41677 23.9909C1.02031 23.997 0.68508 23.863 0.411066 23.5889C0.137022 23.3149 0 22.9827 0 22.5923C0 22.2019 0.137022 21.8697 0.411066 21.5957L10.0067 12L0.411066 2.40431C0.149159 2.14244 0.0151788 1.81326 0.00912609 1.41677C0.00304181 1.02031 0.137022 0.68508 0.411066 0.411066C0.68508 0.137022 1.01729 0 1.40769 0C1.79809 0 2.1303 0.137022 2.40431 0.411066L12 10.0067L21.5957 0.411066C21.8576 0.149159 22.1867 0.0151788 22.5832 0.00912609C22.9797 0.00304181 23.3149 0.137022 23.5889 0.411066C23.863 0.68508 24 1.01729 24 1.40769C24 1.79809 23.863 2.1303 23.5889 2.40431L13.9933 12L23.5889 21.5957C23.8508 21.8576 23.9848 22.1867 23.9909 22.5832C23.997 22.9797 23.863 23.3149 23.5889 23.5889C23.3149 23.863 22.9827 24 22.5923 24C22.2019 24 21.8697 23.863 21.5957 23.5889L12 13.9933Z"
                                    fill="#1C1B1F"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="mm-menu">
                        <ul>
                            {menu_data.map((menu, i) => (
                                <li
                                    key={i}
                                    className={
                                        !menu.submenus
                                            ? ''
                                            : navTitle === menu?.title
                                            ? 'has-droupdown active'
                                            : 'has-droupdown'
                                    }
                                >
                                    {menu.submenus && (
                                        <button
                                            onClick={() =>
                                                openMobileMenu(menu.title)
                                            }
                                        >
                                            {menu.title}{' '}
                                        </button>
                                    )}

                                    {!menu.mobile_pages_menu && (
                                        <ul
                                            className={
                                                navTitle === menu?.title
                                                    ? 'sub-menu active'
                                                    : 'sub-menu'
                                            }
                                        >
                                            {menu?.submenus?.map((sub, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={`${sub.link}`}
                                                        legacyBehavior
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {menu.mobile_pages_menu && (
                                        <ul
                                            className={
                                                navTitle === menu?.title
                                                    ? 'sub-menu active'
                                                    : 'sub-menu'
                                            }
                                        >
                                            {menu?.mobile_pages_menu?.map(
                                                (sub, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            href={`${sub.link}`}
                                                            legacyBehavior
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {!menu.submenus && (
                                        <Link href={menu.link} legacyBehavior>
                                            {menu.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* overlay start */}
            <div
                onClick={() => setIsOpen(false)}
                className={`body-overlay ${isOpen ? 'apply' : ''}`}
            ></div>
            {/* overlay end */}
        </>
    );
};

export default OffCanvas;

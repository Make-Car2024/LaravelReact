import { useState, useEffect, useRef } from 'react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('Home');

    const menuRef = useRef(null);
    const searchRef = useRef(null);
    const languageRef = useRef(null);

    const languages = [
        { code: 'id', name: 'Bahasa Indonesia' },
        { code: 'en', name: 'English' },
        { code: 'jv', name: 'Jawa' },
    ];

    const navItems = [
        {
            title: 'Home',
            link: '#',
            submenu: null,
        },
        {
            title: 'Profil',
            link: '#',
            submenu: [
                { title: 'Visi Misi', link: '/visi-misi' },
                { title: 'Struktur Organisasi', link: '#' },
                { title: 'Tugas dan Fungsi', link: '#' },
                { title: 'Maklumat PPID', link: '#' },
                { title: 'Regulasi', link: '#' },
                { title: 'KAK', link: '#' },
                { title: 'SOP PPID', link: '#' },
            ],
        },
        {
            title: 'Daftar Informasi Publik',
            link: '#',
            submenu: [
                { title: 'Informasi Berkala', link: '#' },
                { title: 'Informasi Serta Merta', link: '#' },
                { title: 'Informasi Setiap Saat', link: '#' },
                { title: 'Informasi yang Dikecualikan', link: '#' },
            ],
        },
        {
            title: 'Jadwal Kegiatan Bupati',
            link: '#',
            submenu: [
                { title: 'Agenda Harian', link: '#' },
                { title: 'Agenda Mingguan', link: '#' },
                { title: 'Agenda Bulanan', link: '#' },
            ],
        },
        {
            title: 'PPID Utama',
            link: '#',
            submenu: [
                { title: 'Profil PPID', link: '#' },
                { title: 'Regulasi', link: '#' },
                { title: 'Layanan Informasi', link: '#' },
            ],
        },
        {
            title: 'Aset',
            link: '#',
            submenu: null,
        },
        {
            title: 'Publikasi Statistik',
            link: '#',
            submenu: [
                { title: 'Statistik Daerah', link: '#' },
                { title: 'Statistik Sektoral', link: '#' },
            ],
        },
    ];

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close menu if clicked outside
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }

            // Close search if clicked outside
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }

            // Close language dropdown if clicked outside
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setIsLanguageOpen(false);
            }

            // Close nav dropdown if clicked outside
            if (!event.target.closest('.dropdown-container')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Anda mencari: ${searchQuery}`);
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    const handleTabClick = (title) => {
        setActiveTab(title);
    };

    const closeAllDropdowns = () => {
        setIsSearchOpen(false);
        setIsLanguageOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-[#283593]">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    onClick={closeAllDropdowns}
                >
                    <img
                        src="https://webppid.semarangkab.go.id/themes/last_sunday/img/ppid_semarang.png"
                        className="h-8"
                        alt="ppid kabupaten semarang Logo"
                    />
                </a>

                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    {/* Search Button and Dropdown */}
                    <div className="relative" ref={searchRef}>
                        <button
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen);
                                setIsLanguageOpen(false);
                                setOpenDropdown(null);
                            }}
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-white hover:bg-[#3949ab] focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-label="Search"
                        >
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </button>

                        {isSearchOpen && (
                            <div className="absolute right-0 top-12 z-50 w-64 rounded-lg bg-white p-3 shadow-lg">
                                <form onSubmit={handleSearch}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Cari..."
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            autoFocus
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg
                                                className="h-4 w-4 text-gray-500"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-2 w-full rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    >
                                        Cari
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Language Button and Dropdown */}
                    <div className="relative" ref={languageRef}>
                        <button
                            onClick={() => {
                                setIsLanguageOpen(!isLanguageOpen);
                                setIsSearchOpen(false);
                                setOpenDropdown(null);
                            }}
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-white hover:bg-[#3949ab] focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-label="Language"
                        >
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.1 1.9-.7-.7m5.6 5.6-.7-.7m-4.2 0-.7.7m5.6-5.6-.7.7M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute right-0 top-12 z-50 w-48 rounded-lg bg-white p-2 shadow-lg">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {languages.map((language) => (
                                        <li key={language.code}>
                                            <button
                                                onClick={() => {
                                                    alert(
                                                        `Bahasa diubah ke ${language.name}`,
                                                    );
                                                    setIsLanguageOpen(false);
                                                }}
                                                className="flex w-full items-center rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span className="mr-2 text-xs uppercase">
                                                    {language.code}
                                                </span>
                                                {language.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            setOpenDropdown(null);
                        }}
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-[#3949ab] focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    ref={menuRef}
                    className={`${isMenuOpen ? 'block' : 'hidden'} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
                    id="navbar-sticky"
                >
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative dropdown-container">
                                {item.submenu ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                toggleDropdown(index);
                                                handleTabClick(item.title);
                                            }}
                                            className={`flex w-full items-center justify-between rounded-sm px-3 py-2 ${activeTab === item.title ? 'bg-blue-700 text-white md:bg-transparent md:text-white' : 'text-gray-900 hover:bg-gray-100 md:text-white md:hover:bg-transparent md:hover:text-blue-300'} md:w-auto md:px-0 md:py-2 ${activeTab === item.title ? 'md:border-b-2 md:border-white' : ''} transition-colors duration-200`}
                                        >
                                            {item.title}
                                            {item.submenu && (
                                                <svg
                                                    className={`ms-2.5 h-2.5 w-2.5 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                        {openDropdown === index && (
                                            <div
                                                className={`${isMenuOpen ? 'relative w-full' : 'absolute left-0 w-48'} z-10 mt-2 rounded-md bg-white shadow-lg md:shadow-xl`}
                                            >
                                                <ul className="space-y-1 p-2">
                                                    {item.submenu.map(
                                                        (subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <a
                                                                    href={
                                                                        subItem.link
                                                                    }
                                                                    className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                                                                    onClick={() => {
                                                                        handleTabClick(item.title);
                                                                        setIsMenuOpen(false);
                                                                    }}
                                                                >
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </a>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.link}
                                        onClick={() => {
                                            handleTabClick(item.title);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block rounded-sm px-3 py-2 ${activeTab === item.title ? 'bg-blue-700 text-white md:bg-transparent md:text-white' : 'text-gray-900 hover:bg-gray-100 md:text-white md:hover:bg-transparent md:hover:text-blue-300'} md:px-0 md:py-2 ${activeTab === item.title ? 'md:border-b-2 md:border-white' : ''} transition-colors duration-200`}
                                        aria-current={
                                            activeTab === item.title ? 'page' : undefined
                                        }
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default App;

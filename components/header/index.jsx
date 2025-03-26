import Link from "next/link";

const Header = () => {
    const useLink = [
        { link: "/", text: "Home" },
        { link: "/pages/about", text: "About" },
        { link: "/pages/services", text: "Services" },
        { link: "/portfolio", text: "Portfolio" },
        { link: "/projects", text: "Projects" },
        { link: "/contact", text: "Contact" },
    ];
    return (
        <nav className="w-full bg-[#f7f6f1] border-t border-black">
            <ul className="flex headerdataclass">
                {useLink.map((linkData, index) => (
                    <li key={index} className="w-full p-5 border-r border-black text-center relative">
                        <Link href={linkData.link} legacyBehavior>
                            <a className="text-black flex items-center justify-center h-full gap-2 relative" aria-label={linkData.text}>
                                {linkData.text}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M6 12.4h12M12.6 7l5.4 5.4l-5.4 5.4" />
                                </svg>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
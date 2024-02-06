import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";




const Header = () => {

	const navLinks = [
		{ 
			hrefLink: "/",
			navTitle: "Home",
		},
		{
			hrefLink: "/about",
			navTitle: "About Us",
		},
		{
			hrefLink: "/holiday",
			navTitle: "Holiday apartment",
		},
		{ 
			hrefLink: "/prices", 
			navTitle: "Prices",
		},
		{ 
			hrefLink: "/arrival",
			navTitle: "Arrival & location",
		},
		{
			hrefLink: "/contact", 
			navTitle: "Contact",
		},
	];

	const [onScroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
		const bodyElement = document.body;
		bodyElement.classList.toggle('open_nav');
	}

	const router = useRouter();
	
	return (
		<>
			<header className={`main_header fixed top-0 right-0 left-0 z-[1111] w-full transition-all duration-300 ease-in-out ${onScroll ? 'fixed_wrap' : ''}`}>
				<div className="header_wrap relative 2xl:ml-[72px] 2xl:mr-[44px] xl:ml-[30px] xl:mr-[6px] lg:ml-[20px] lg:mr-[6px] md:ml-[30px] md:mr-[30px] ml-[30px] mr-[30px]">
					<div className="ferien-header-block min-h-[60px] lg:min-h-[auto] w-full flex flex-wrap items-center justify-end relative">
						<div className={`ferien-header-nav lg:w-auto lg:ml-auto lg:static lg:bg-transparent lg:left-auto lg:top-auto lg:bottom-auto lg:overflow-y-auto lg:z-auto lg:p-0 lg:translate-x-0 fixed bg-black left-0 top-0 bottom-0 overflow-y-auto w-full z-[5] pt-[50px] pr-[40px] pl-[40px] translate-x-full transition-all duration-[0.4s] ease-in-out ${menuBtn ? 'slide' : ''}`}>
							<ul className="flex flex-wrap lg:flex-row flex-col m-0 p-0">
								{navLinks.map((navBar, index) => {
									const {hrefLink, navTitle} = navBar;
									const isActive = router.pathname === hrefLink;
									return (
										<li key={index} className={`relative 2xl:mx-[27px] xl:mx-[20px] lg:mx-[10px] lg:w-auto lg:block w-full flex p-0 ${isActive ? 'active' : ''}`}>
											<Link href={hrefLink}>{navTitle}</Link>
										</li>
									)
								})}
							</ul>
						</div>
						<div className="menu-btn">
							<Link className={`toggle-btn ${menuBtn ? 'active' : ''}`} href="javascript:void(0);" onClick={menuHandler}>
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;
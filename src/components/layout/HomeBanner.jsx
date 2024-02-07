import Link from "next/link";
import Image from "next/image";
import Logo from '@/assets/images/Hirschleiten-logo1.svg';
import Mail from '@/assets/images/banner-logo1.svg';
import Phone from '@/assets/images/banner-logo2.svg';
import Location from '@/assets/images/banner-logo3.svg';
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const HomeBanner = () => {

	const bnrLoop = [
		{
			linkurl: '#',
			imgsrc: Mail,
			imgalt: 'Mailimg',
		},
		{
			linkurl: '#',
			imgsrc: Phone,
			imgalt: 'Phoneimg',
		},
		{
			linkurl: '#',
			imgsrc: Location,
			imgalt: 'locationimg',
		},
	]

	return (
		<>
			<div className="banner_wrapper w-full relative">
				<div className="bnr_wrap 2xl:mx-[72px] xl:mx-[30px]">
					<div className="imgbox relative block w-full 2xl:h-[848px] bg-banner-image bg-center bg-cover bg-no-repeat 2xl:mt-[82px] xl:h-[800px] xl:mt-[90px] lg:h-[800px] lg:mt-[87px] md:h-[800px] md:m-0 h-[600px] m-0">
						<div className="bnr_logo 2xl:max-w-[381px] xl:max-w-[280px] lg:max-w-[250px] md:max-w-[160px] max-w-[150px] relative z-10 lg:-top-[50px] left-0 md:top-0 top-[6px]">
							<Link href="/" className="block"><Image src={Logo} alt="logo" className="w-full h-auto" /></Link>
						</div>
						<div className="bnr_center absolute 2xl:-bottom-[40px] xl:-bottom-[32px] lg:-bottom-[30px] md:-bottom-[26px] -bottom-[26px] left-[50%] -translate-x-[50%]">
							<ul className="flex items-center">
								{bnrLoop.map((social, index) => {
									const {linkurl, imgsrc, imgalt} = social
									return (
										<li key={index} className="mx-[12px]">
											<Link href={linkurl} className="2xl:h-[78px] 2xl:w-[78px] xl:h-[65px] xl:w-[65px] lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px] w-[50px] h-[50px] bg-extralightgray rounded-[50%] flex justify-center items-center" ><Image src={imgsrc} alt={imgalt} className="xl:h-[30px] xl:w-[30px] lg:h-[30px] lg:w-[30px] md:h-[25px] md:w-[25px] h-[25px] w-[25px]" /></Link>
										</li>
									)
								})}
							</ul>
						</div>
						<PrimaryBtn name="Book a summer vacation" link="#" />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;
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
				<div className="bnr_wrap 2xl:mx-[72px]">
					<div className="imgbox relative block w-full h-[848px]">
						<div className="bnr_logo">
							<Link href="/"><Image src={Logo} alt="logo" /></Link>
						</div>
						<div className="bnr_center">
							<ul>
								{bnrLoop.map((social, index) => {
									const {linkurl, imgsrc, imgalt} = social
									return (
										<li key={index}>
											<Link href={linkurl}><Image src={imgsrc} alt={imgalt} /></Link>
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
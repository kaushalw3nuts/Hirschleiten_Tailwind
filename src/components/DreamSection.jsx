import Image from "next/image";
import Dreamimg from '@/assets/images/dream-image.png';
import PrimaryBtn from "@/components/layout/PrimaryBtn";
import LocationTitleBox from "@/components/layout/LocationTitleBox";
import NameTitleBox from "@/components/layout/NameTitleBox";
import HolidayCaptionBox from "@/components/layout/HolidayCaptionBox";



const DreamSection = () => {

	return (

		<>
			<div className="dream relative flex items-center justify-center 2xl:mb-[106px] xl:mb-[90px] xl:flex-row lg:flex-col lg:mb-[80px] overflow-hidden md:flex-col md:mb-[70px] flex-col mb-[60px]">
				<div className="dream_imgbox">
					<Image src={Dreamimg} alt="image" className="w-full h-auto flex" />
				</div>
				<div className="dream_detailbox">
					<div className="dream_text 2xl:px-[82px] 2xl:py-[97px] xl:p-[36px] lg:p-[50px] md:p-[40px] p-[30px]">
						<h3 className="2xl:pb-[24px] 2xl:text-h3 text-lightgray uppercase tracking-[0.05em] xl:pb-[5px] xl:text-[24px] xl:leading-[1.5] lg:text-[28px] lg:leading-[1.5] lg:pb-[20px] md:text-[26px] md:leading-[1.5] md:pb-[18px] text-[22px] leading-[1.5] pb-[8px]">
							<LocationTitleBox locationtitle="Dream days in a special location" />
						</h3>
						<h4 className="2xl:pb-[23px] 2xl:text-h4 text-extralightgray tracking-[0.03em] xl:pb-[10px] xl:text-[30px] xl:leading-[1.5] lg:text-[30px] lg:leading-[1.5] lg:pb-[18px] md:text-[24px] md:leading-[1.5] md:pb-[16px] text-[22px] leading-[1.5] pb-[8px]">
							<NameTitleBox nametitle="Holiday on an organic farm" />
						</h4>
						<HolidayCaptionBox caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore." />
						<div className="dream_btn fadeInUp flex justify-start">
							<PrimaryBtn name="LEARN MORE" link="#" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DreamSection;
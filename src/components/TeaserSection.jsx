import Image from "next/image";
import Teaser1 from '@/assets/images/teaser-image1.png';
import Teaser2 from '@/assets/images/teaser-image2.png';
import Teaser3 from '@/assets/images/teaser-image3.png';
import Teasericon from '@/assets/images/teaser-icon.svg';
import PrimaryBtn from "@/components/layout/PrimaryBtn";



const TeaserSection = () => {

	const TeaserItems = [
		{ 
			srcItem: Teaser1,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
		{
			srcItem: Teaser2,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
		{
			srcItem: Teaser3,
			altItem: 'image',
			iconItem: Teasericon,
			textItem: 'Teaser',
		},
	];

	return (
		<>
			<div className="teaser 2xl:mb-[191px] xl:mb-[120px]">
				<div className="container">
					<div className="grid grid-cols-3 2xl:gap-8">
						{TeaserItems.map((teaserData, index) => {
							const {srcItem, altItem, iconItem, textItem} = teaserData
							return (
								<div className="tea_sec" key={index}>
									<div className="teaser_section">
										<div className="teaser_imgbox w-full">
											<Image src={srcItem} alt={altItem} className="w-full h-auto flex" />
										</div>
										<div className="teaser_caption absolute bottom-[130px] left-0 z-[11] max-h-[295px] h-full w-full flex justify-end items-center flex-col">
											<div className="image max-w-[177px]">
												<Image src={iconItem} alt={altItem} className="w-full h-auto" />
											</div>
											<div className="teaser_head">
												<h5 className="text-white text-h5 tracking-[0.03em]">{textItem}</h5>
											</div>
										</div>
										<div className="teasure_btn absolute bottom-0 left-[50%] z-[11] -translate-x-[50%] mb-[46px] transition-all duration-[0.4s] ease-in-out opacity-0 invisible">
											<PrimaryBtn name="button" link="#" />
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default TeaserSection;
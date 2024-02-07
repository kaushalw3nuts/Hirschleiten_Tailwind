import HolidayCaptionBox from "@/components/layout/HolidayCaptionBox";
import MainTitleBox from "@/components/layout/MainTitleBox";
import SubTitleBox from "@/components/layout/SubTitleBox";


const Holiday = () => {

	return (
		<>
			<div className="holiday 2xl:mt-[140px] xl:mt-[100px] lg:mt-[80px] md:mt-[70px] mt-[60px]">
				<div className="container">
					<div className="holiday_section text-center max-w-[940px] mx-auto 2xl:pb-[104px] xl:pb-[100px] lg:pb-[80px] md:pb[70px] pb-[60px]">
						<h1 className="lg:text-h1 md:text-[30px] text-[26px] text-lightgray uppercase tracking-[0.05em] pb-[15px]">
							<MainTitleBox main_title="Holiday apartment on an organic farm in Kleinarl" />
						</h1>
						<h2 className="2xl:text-h2 xl:text-[60px] lg:text-[36px] md:text-[32px] text-[30px] tracking-[0.03em] text-extralightgray pb-[34px]">
							<SubTitleBox sub_title="Welcome to Hirschleiten" />
						</h2>
						<HolidayCaptionBox caption="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
					</div>
				</div>
			</div>
		</>
	)
}

export default Holiday;
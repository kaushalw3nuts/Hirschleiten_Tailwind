import Link from "next/link";




const PrimaryBtn = (props) => {

	return (
		<>
			<div className="bnr_btn">
				<Link href={props.link}>{props.name}</Link>
			</div>
		</>
	)
}

export default PrimaryBtn;
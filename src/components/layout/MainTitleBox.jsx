import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



const MainTitleBox = (props) => {

	const [inViewRef, inView] = useInView({
		triggerOnce: true,
	});

	const [addClass, setAddClass] = useState(false);

	useEffect(() => {
		if (inView && !addClass) {
		  // Add a delay of 1000 milliseconds (1 second) before adding the class
		  const delayTimeout = setTimeout(() => {
			setAddClass(true);
		  }, 50);
	
		  // Clear the timeout if the component goes out of view before the delay
		  return () => clearTimeout(delayTimeout);
		}
	}, [inView, addClass]);

	if (props.main_title) {
		return (
			<div className={`word_wrap flex flex-wrap justify-center overflow-hidden ${addClass ? 'visible' : ''}`} ref={inViewRef}>
				{props.main_title.split(" ").map(function (word, index) {
					let style = { "animationDelay": (0.2 + index / 10) + "s" }
					let customeVal = word
					const totalLength = props.main_title.split(" ").length
					if (index !== (totalLength - 1)) {
						customeVal = word
					}

					return (
						<React.Fragment key={index}>
							<div className="word" style={style}>{word}</div>
							<span className="word">&nbsp;</span>
						</React.Fragment>
					);
				})}
			</div>
		);
	}

	return ''
}

export default MainTitleBox;
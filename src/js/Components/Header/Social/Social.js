import React from "react";
import git from "../../../../assets/github.svg";
import ln from "../../../../assets/linkedin.svg";
import tw from "../../../../assets/twitter.svg";
import "./_social.scss";

const Social = (props) => {
	return (
		<div className={props.type + "__social"}>
			<a href="#" className="href">
				<img src={git} alt="github" />
			</a>
			<a href="#" className="href">
				<img src={ln} alt="linkedin" />
			</a>
			<a href="#" className="href">
				<img src={tw} alt="twitter" />
			</a>
		</div>
	);
};

export default Social;

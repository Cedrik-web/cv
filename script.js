/**
 * 
 */
function createADN() {
	const content = document.querySelector("#content");
	
	 for (let i=0; i<1500; i++) {
		const div = document.createElement("div");
		div.classList.add("circle");
		
		const c1 = (i * 0.002, i * 0.002);
		const c2 = (i * 0.003, i * 0.003);
		const translate = c1 * 50;
		const rotate = c1 * 300;
		const scaleX = 3 + c2 * 3;
		const scaleY = 3 + c1 * 2;
		
		const angle = Math.floor(i * 0.3);
		
		const style = {
			boxShadow: `0 0 0 .5px hsla(${angle}, 70%, 70%, .1)`,
			transform: `translate(${translate}px) rotate(${rotate}deg) scale(${scaleX},${scaleY})`,
		};
		
		Object.assign(div.style, style);
		
		content.appendChild(div);
	}
}
 
function effetElement(el) {

	const ratio = 0.2
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: ratio
	}
		const handleIntersect = function(entries, observer) {
		entries.forEach(function (entry) {
			if (entry.intersectionRatio > ratio) {
				entry.target.classList.remove("invisible")
				entry.target.classList.add("visible")
	
			} else {
				entry.target.classList.remove("visible")
				entry.target.classList.add("invisible")
			}
		})
	}
	const observer = new IntersectionObserver(handleIntersect, options)
	observer.observe(document.getElementById(el))
}

createADN();

effetElement("info2");
effetElement("info3");
effetElement("info4");
effetElement("info5");
effetElement("info6");
effetElement("info7");
effetElement("info8");
effetElement("info9");
effetElement("info10");

effetElement("text2");
effetElement("text3");
effetElement("text4");
effetElement("text5");
effetElement("text6");
effetElement("text7");
effetElement("text8");
effetElement("text9");
effetElement("text10");
effetElement("text11");
effetElement("text12");
effetElement("text13");
effetElement("text14");
effetElement("text15");
effetElement("text16");
effetElement("text17");





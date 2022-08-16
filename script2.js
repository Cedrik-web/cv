/**
 * 
 */

function revealCV(el, nb, signe) {
	const els = document.getElementById(el);
	
	els.classList.remove(`out` + signe);
	els.classList.add(`reveal` + nb);
}


revealCV("cv1", 1, "X");
revealCV("cv11", 1, "XB");
revealCV("cv2", 2, "Y");
revealCV("cv21", 2, "YB");
revealCV("cv3", 3, "X");
revealCV("cv31", 3, "XB");
revealCV("cv4", 4, "Y");
revealCV("cv5", 5, "X");
revealCV("cv6", 6, "YB");


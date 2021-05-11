let lightSwitch = document.getElementById("lightSwitch");
lightSwitch.addEventListener("click", lightSwitchOnOff);

function lightSwitchOnOff() {
	let nightModeElements = document.getElementsByClassName("nightMode");
	if (this.checked == true) {
		document.body.style.backgroundColor = "#111";
		if (nightModeElements) {
			for (const element of nightModeElements) {
				console.log(element);
				element.style.color = "white";
			}
		}
	} else {
		document.body.style.backgroundColor = "white";
		if (nightModeElements) {
			for (const element of nightModeElements) {
				element.style.color = "black";
			}
		}
	}
}

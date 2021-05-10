let lightSwitch = document.getElementById("lightSwitch");
lightSwitch.addEventListener("click", lightSwitchOnOff);

function lightSwitchOnOff() {
	if (this.checked == true) {
		document.body.style.backgroundColor = "#111";
	} else {
		document.body.style.backgroundColor = "white";
	}
}

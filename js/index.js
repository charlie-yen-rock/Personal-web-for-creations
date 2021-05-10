let lightSwitch = document.getElementById("lightSwitch");
lightSwitch.addEventListener("click", lightSwitchOnOff);

function lightSwitchOnOff() {
	if (this.checked == true) {
		document.body.style.backgroundColor = "#111";
		document.body.style.color = "white";
	} else {
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
	}
}

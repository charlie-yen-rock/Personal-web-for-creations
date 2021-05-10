let lightSwitch = document.getElementById("lightSwitch");
lightSwitch.addEventListener("click", lightSwitchOnOff);

function lightSwitchOnOff() {
	let main = document.getElementById("main");
	if (this.checked == true) {
		main.style.backgroundColor = "#111";
		main.style.color = "white";
	} else {
		main.style.backgroundColor = "white";
		main.style.color = "black";
	}
}

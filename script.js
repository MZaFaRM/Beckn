document.querySelectorAll(".true-cta-button").forEach((button) => {
	button.addEventListener("click", () => {
		const cards = document.querySelector(".join-us-cards");
		cards.classList.add("hidden");

		const role = button.getAttribute("data-role");
		const container = document.getElementById("formContainer");
		const radios = container.querySelectorAll(
			"input[type=radio][name=role]"
		);

		container.classList.remove("hidden");

		radios.forEach((r) => (r.checked = r.value === role));

		const signupForm = document.getElementById("signupForm");
		if (!signupForm.hasEventListener) {
			signupForm.addEventListener("submit", async function (e) {
				e.preventDefault();
				try {
					await submitForm();
					resetForm();
				} catch (error) {
					console.error("Error submitting form:", error);
					alert(
						"There was an error submitting the form. Please try again later."
					);
				}
			});

			signupForm.hasEventListener = true;
		}
	});
});

const resetForm = () => {
	document.getElementById("thankYouMessage").classList.remove("hidden");
	document.getElementById("formContainer").classList.add("hidden");
	document.getElementById("signupForm").reset();

	setTimeout(() => {
		document.getElementById("thankYouMessage").classList.add("hidden");
		document.querySelector(".join-us-cards").classList.remove("hidden");
	}, 3000);
};

document.getElementById("cancelBtn").addEventListener("click", () => {
	const cards = document.querySelector(".join-us-cards");
	cards.classList.remove("hidden");
	const container = document.getElementById("formContainer");
	container.classList.add("hidden");
	document.getElementById("thankYouMessage").style.display = "none";
	document.getElementById("signupForm").reset();
});

const submitForm = async () => {
	// disable the submit button to prevent multiple submissions
	const submitButton = document.getElementById("submitBtn");
	submitButton.textContent = "Submitting...";
	submitButton.disabled = true;
	setTimeout(() => {
		submitButton.disabled = false;
		submitButton.textContent = "Submit";
	}, 5000);

	const name = document.getElementById("name").value;
	const role = document.querySelector('input[name="role"]:checked')?.value;
	const phone = document.getElementById("tel").value;
	const district = document.getElementById("district").value;
	const state = document.getElementById("state").value;

	const payload = { name, role, phone, district, state };

	const url =
		"https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbx_aZNOT6G5uAFg6aM1GpkozX1xGYuiHaoi_KHDlL_rpRxQsOGVxWvj9nXN__jmYsyllA/exec";

	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const text = await res.text();

	try {
		const data = JSON.parse(text);
		alert("Form submitted successfully!");
		return data;
	} catch {
		console.error("Server did not return valid JSON:", text);
		throw new Error("Invalid server response (not JSON)");
	}
};

const phases = {
	Discovery:
		"Farmers and Buyers sign up, creating profiles to showcase their needs or offerings.",
	Order: "Farmers and Buyers connect, negotiate terms, and finalize orders.",
	Fulfillment:
		"Farmers deliver products to Buyers, ensuring quality and satisfaction.",
	"Post-fulfillment":
		"Feedback is exchanged, and relationships are strengthened for future transactions.",
};

const stepMap = {
	one: "Discovery",
	two: "Order",
	three: "Fulfillment",
	four: "Post-fulfillment",
};

Object.entries(stepMap).forEach(([className, phaseTitle]) => {
	const element = document.querySelector(`.${className}`);
	if (!element) return;

	element.addEventListener("click", () => {
		document.querySelectorAll(".steps > div").forEach((el) => {
			el.classList.remove("selected");
		});

		element.classList.add("selected");

		document.querySelector(".step-description h1").textContent = phaseTitle;
		document.querySelector(".step-description p").textContent =
			phases[phaseTitle];
	});
});

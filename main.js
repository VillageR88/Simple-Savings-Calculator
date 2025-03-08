function calculateSavings() {
	let months = Number(document.getElementById("months").value.trim())
	let income = Number(document.getElementById("income").value.trim())
	let expenses = Number(document.getElementById("expenses").value.trim())
	let resultElement = document.getElementById("result")
	let savingsAmountElement = document.getElementById("savings-amount")

	// Walidacja poprawności danych
	if (
		isNaN(months) ||
		isNaN(income) ||
		isNaN(expenses) ||
		months <= 0 ||
		income < 0 ||
		expenses < 0
	) {
		resultElement.textContent = "Please enter valid numbers!"
		resultElement.classList.add("visible")
		resultElement.style.opacity = "1"
		return
	}

	// Obliczanie oszczędności
	let savings = (income - expenses) * months

	// Animacja zanikania przed aktualizacją wyniku
	resultElement.style.opacity = "0"
	resultElement.style.transform = "translateY(-10px)"
	resultElement.classList.add("visible")

	setTimeout(() => {
		const message = savings >= 0 ? "You will save: " : "You will lose: "
		savingsAmountElement.textContent = `${savings} euro`

		resultElement.textContent = message
		resultElement.appendChild(savingsAmountElement)

		resultElement.style.opacity = "1"
		resultElement.style.transform = "translateY(0)"
	}, 100)
}

// Obsługa klawisza "Enter"
document.querySelectorAll("input").forEach(input => {
	input.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			event.preventDefault()
			calculateSavings()
		}
	})
})

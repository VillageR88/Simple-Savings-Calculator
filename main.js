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

	// Sprawdzenie, czy oszczędności są dodatnie czy ujemne
	if (savings >= 0) {
		resultElement.textContent = "You will save: "
	} else {
		resultElement.textContent = "You will lose: "
	}

	// Aktualizacja wartości oszczędności
	savingsAmountElement.textContent = `${Math.abs(savings)} euro`
	resultElement.appendChild(savingsAmountElement)

	// Animacja pojawiania się wyniku
	resultElement.style.opacity = "0"
	resultElement.style.transform = "translateY(-10px)"
	resultElement.classList.add("visible")

	setTimeout(() => {
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



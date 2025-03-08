function calculateSavings() {
	let months = document.getElementById("months").value
	let income = document.getElementById("income").value
	let expenses = document.getElementById("expenses").value
	let resultElement = document.getElementById("result")
	let savingsAmountElement = document.getElementById("savings-amount")

	if (months && income && expenses) {
		let savings = (income - expenses) * months
		resultElement.style.opacity = "0"
		resultElement.classList.add("visible")

		setTimeout(() => {
			if (savings >= 0) {
				resultElement.innerHTML = `You will save: <span id="savings-amount">${savings} zł</span>`
			} else {
				resultElement.innerHTML = `You will lose: <span id="savings-amount">${savings} zł</span>`
			}
			resultElement.style.opacity = "1"
		}, 100)
	} else {
		resultElement.style.opacity = "0"
		resultElement.classList.add("visible")
		setTimeout(() => {
			resultElement.innerText = "Please enter all values!"
			resultElement.style.opacity = "1"
		}, 100)
	}
}

function bmiCalculate() {
  const getWeight = document.getElementById('weight')
  const getHeight = document.getElementById('height')
  const getresult = document.getElementById('result')
  const result = getWeight.value / ((getHeight.value / 100) ** 2)
  getresult.value = result.toFixed(2)

  // check standard
  let standard
  let disease
  if (result <= 18.50) {
    standard = 'Too thin'
    disease = 'More than normal people'
  } else if (result > 18.50 && result.value <= 22.99) {
    standard = 'Healthy'
    disease = 'None risk of disease'
  } else if (result >= 23.00 && result.value <= 24.99) {
    standard = 'Fat degree 1'
    disease = 'Dangerous 1'
  } else if (result >= 25.00 && result.value <= 29.99) {
    standard = 'Fat degree 2'
    disease = 'Dangerous 2'
  } else if (result >= 30.00) {
    standard = 'Fat degree 3'
    disease = 'Dangerous 3'
  }
  const yourStandard = document.getElementById('standard')
  yourStandard.innerHTML = standard
  const yourRisk = document.getElementById('riskofdisease')
  yourRisk.innerHTML = disease

  // console.log(getWeight.value, getHeight.value)
  // console.log(result)
  // console.log(standard)
}

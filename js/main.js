
function submitCreateTable() {
  const mainValue = parseInt($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseInt($('#periods').val())

  let powVal = Math.pow((1 + interestRate), periods).toFixed(4)
  let quota = (mainValue * (powVal * interestRate) / (powVal - 1)).toFixed(4)
  console.log(quota)
  console.log(powVal)
  console.log(periods)

  let saldoInicial = mainValue

  let tableHTML = ''
  for (let i = 0; i < periods; i++) {
    let interes = (saldoInicial * interestRate).toFixed(4)
    let amortizacion = quota - interes
    let saldoFinal = (saldoInicial - amortizacion).toFixed(4)
    let tableHTML = `
    <tr>
    <td>${i + 1}</td>
    <td>${saldoInicial}</td>
    <td>${interes}</td>
    <td>${amortizacion}</td>
    <td>${quota}</td>
    <td>${saldoFinal}</td>
    </tr>`

    saldoInicial = (saldoInicial - amortizacion).toFixed(4)

    $('#tablita').append(tableHTML)
  }

}


$("#btnSubmit").click(function (event) {
  event.preventDefault()
  event.stopPropagation()

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myForm")
  form.addClass('was-validated');

  // Perform ajax submit here...
  if (form[0].checkValidity()) submitCreateTable()


});

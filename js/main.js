
function submitCreateTable() {
  $('#tablita').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let powVal = Math.pow((1 + interestRate), periods)
  let quota = (mainValue * (powVal * interestRate) / (powVal - 1))

  let beginningBalance = mainValue

  for (let i = 0; i < periods; i++) {
    let interest = (beginningBalance * interestRate)
    let amortization = (quota - interest)
    let finalBalance = (beginningBalance - amortization)
    let tableHTML = `
    <tr>
    <td>${i + 1}</td>
    <td>${beginningBalance.toFixed(3)}</td>
    <td>${interest.toFixed(3)}</td>
    <td>${amortization.toFixed(3)}</td>
    <td>${quota.toFixed(3)}</td>
    <td>${finalBalance.toFixed(3)}</td>
    </tr>`

    beginningBalance = (beginningBalance - amortization)

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

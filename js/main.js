
function submitCreateTable() {
  $('#tablita').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let powVal = Math.pow((1 + (interestRate) / 100), periods)
  let quota = (mainValue * (powVal * (interestRate) / 100) / (powVal - 1))

  let totalAmortization = 0
  let totalInterest = 0
  let totalQuota = 0

  let beginningBalance = mainValue

  for (let i = 0; i < periods; i++) {
    let interest = (beginningBalance * (interestRate) / 100)
    let amortization = (quota - interest)
    /* let finalBalance = (beginningBalance - amortization)*/
    let tableHTML = `
    <tr>
    <td>${i + 1}</td>
    <td>${beginningBalance.toFixed(3)}</td>
    <td>${amortization.toFixed(3)}</td>
    <td>${interest.toFixed(3)}</td>
    <td>${quota.toFixed(3)}</td>
    </tr>`

    beginningBalance = (beginningBalance - amortization)

    totalAmortization += amortization
    totalInterest += interest
    totalQuota += quota

    $('#tablita').append(tableHTML)
  }

  let totalHTML = `
    <tr>
    <td colspan="2" >Total: </td>
    <td>${totalAmortization.toFixed(3)}</td>
    <td>${totalInterest.toFixed(3)}</td>
    <td>${totalQuota.toFixed(3)}</td>
    </tr>`

    $('#tablita').append(totalHTML)

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



//////////////////////////////////////////////



function submitCreateTableAlmn() {
  $('#tablitaAlmn').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let amortization = (mainValue / periods)

  let beginningBalance = mainValue

  for (let i = 0; i < periods; i++) {

    let interest = (beginningBalance * (interestRate) / 100)
    let quota = (amortization + interest)
    /*let finalBalance = (beginningBalance - amortization)*/
    let tableHTML = `
    <tr>
    <td>${i + 1}</td>
    <td>${beginningBalance.toFixed(3)}</td>
    <td>${amortization.toFixed(3)}</td>
    <td>${interest.toFixed(3)}</td>
    <td>${quota.toFixed(3)}</td>
    </tr>`

    beginningBalance = (beginningBalance - amortization)

    $('#tablitaAlmn').append(tableHTML)
  }

}


$("#btnSubmitAleman").click(function (event) {
  event.preventDefault()
  event.stopPropagation()

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myFormAlm")
  form.addClass('was-validated');

  // Perform ajax submit here...
  if (form[0].checkValidity()) submitCreateTableAlmn()


});



////////////////////////////////////

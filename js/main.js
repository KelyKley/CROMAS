
function submitCreateTable() {
  $('#tablita').empty()
  $("#tasaEfectivaFranc").empty()
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
    <tr class="font-weight-bold">
    <td colspan="2" >TOTAL: </td>
    <td>${totalAmortization.toFixed(3)}</td>
    <td>${totalInterest.toFixed(3)}</td>
    <td>${totalQuota.toFixed(3)}</td>
    </tr>`

    $('#tablita').append(totalHTML)

    let tasaEfectiva = ((totalInterest * 100) / mainValue).toFixed(3)

    let totalTE = `
    <h5>TASA EFECTIVA: </h5>
    <p>${tasaEfectiva + " % "}</p>`

    $("#tasaEfectivaFranc").append(totalTE)
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
  $("#tasaEfectivaAlm").empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let amortization = (mainValue / periods)
  let totalAmortization = 0
  let totalInterest = 0
  let totalQuota = 0

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

    totalAmortization += amortization
    totalInterest += interest
    totalQuota += quota

    $('#tablitaAlmn').append(tableHTML)
  }

  let totalHTML = `
    <tr class="font-weight-bold">
    <td colspan="2" >TOTAL: </td>
    <td>${totalAmortization.toFixed(3)}</td>
    <td>${totalInterest.toFixed(3)}</td>
    <td>${totalQuota.toFixed(3)}</td>
    </tr>`

    $('#tablitaAlmn').append(totalHTML)

    let tasaEfectiva = ((totalInterest * 100) / mainValue).toFixed(3)

    let totalTE = `
    <h5>TASA EFECTIVA: </h5>
    <p>${tasaEfectiva + " % "}</p>`

    $("#tasaEfectivaAlm").append(totalTE)
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




function submitCreateTableAmericano() {
  $('#tablitaAmericano').empty()
  $("#tasaEfectiva").empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())


  let totalAmortization = 0
  let totalInterest = 0
  let totalQuota = 0

  let beginningBalance = mainValue
  let interest = (beginningBalance * (interestRate) / 100)

  for (let i = 0; i < periods -1; i++) {
    let amortization = (0)

    
    let quota = (interest)
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

    $('#tablitaAmericano').append(tableHTML)
  }
 
  let quota = interest + beginningBalance 

  let barra = `
    <tr>
    <td>${periods} </td>
    <td>${beginningBalance.toFixed(3)}</td>
    <td>${beginningBalance.toFixed(3)}</td>
    <td>${interest.toFixed(3)}</td>
    <td>${quota.toFixed(3)}</td>
    </tr>`
    $('#tablitaAmericano').append(barra)

    totalAmortization = totalAmortization + beginningBalance
    totalInterest = totalInterest + interest
    totalQuota = totalQuota + quota

  let totalHTML = `
    <tr class="font-weight-bold">
    <td colspan="2" >TOTAL: </td>
    <td>${totalAmortization.toFixed(3)}</td>
    <td>${totalInterest.toFixed(3)}</td>
    <td>${totalQuota.toFixed(3)}</td>
    </tr>`

    $('#tablitaAmericano').append(totalHTML)

    let tasaEfectiva = ((totalInterest * 100) / beginningBalance).toFixed(3)

    let totalTE = `
    <h5>TASA EFECTIVA: </h5>
    <p>${tasaEfectiva + " % "}</p>`

    $("#tasaEfectiva").append(totalTE)

}


$("#btnSubmitAmericano").click(function (event) {
  event.preventDefault()
  event.stopPropagation()

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myFormAmericano")
  form.addClass('was-validated');

  // Perform ajax submit here...
  if (form[0].checkValidity()) submitCreateTableAmericano()


});



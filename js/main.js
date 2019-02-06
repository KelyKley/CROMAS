
function submitCreateTable() {
  $('#tablita').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let powVal = Math.pow((1 + (interestRate)/100), periods)
  let quota = (mainValue * (powVal * (interestRate)/100) / (powVal - 1))

  let beginningBalance = mainValue

  for (let i = 0; i < periods; i++) {
    let interest = (beginningBalance * (interestRate)/100)
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



//////////////////////////////////////////////



function submitCreateTableAlmn() {
  $('#tablitaAlmn').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  let amortization = (mainValue/periods)
 
  let beginningBalance = mainValue

  for (let i = 0; i < periods; i++) {
    
    let interest = (beginningBalance * (interestRate)/100)
    let quota= (amortization + interest)
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

    $('#tablitaAlmn').append(tableHTML)
  }

}


$("#btnSubmitAleman").click(function (event) {
  event.preventDefault()
  event.stopPropagation()

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myForm")
  form.addClass('was-validated');

  // Perform ajax submit here...
  if (form[0].checkValidity()) submitCreateTableAlmn()


});



////////////////////////////////////



function submitCreateTableAmerica() {
  $('#tablitaAmericano').empty()
  const mainValue = parseFloat($('#mainValue').val())
  const interestRate = parseFloat($('#interestRate').val())
  const periods = parseFloat($('#periods').val())

  /*let powVal = Math.pow((1 + (interestRate)/100), periods)
  let quota = (mainValue * (powVal * (interestRate)/100) / (powVal - 1))*/
  let beginningBalance = mainValue
  let interest = (beginningBalance * (interestRate)/100)
  let amortization = (0)
  let quota = (amortization + interest)

  for (let i = 0; i < periods; i++) {
    //let amortization = (quota - interest)
    let finalBalance = (beginningBalance - amortization)
    let amortization = 

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

    $('#tablitaAmericano').append(tableHTML)
  }

}


$("#btnSubmitAmericano").click(function (event) {
  event.preventDefault()
  event.stopPropagation()

  // Fetch form to apply custom Bootstrap validation
  var form = $("#myForm")
  form.addClass('was-validated');

  // Perform ajax submit here...
  if (form[0].checkValidity()) submitCreateTableAmerica()


});

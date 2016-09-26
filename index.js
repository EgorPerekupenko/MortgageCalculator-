$("#MortgageCalculator").click(function(){

var loanBalance=$("#Balance").val();        // getting user input   
var interestRate=$("#Rate").val();
var loanTerm=$("#Term").val();
var period=$("#selectPeriod option:selected").val();             

 // monthly interest rate                                        calculation 
    var monthlyInterestRate = (interestRate / 100) / period ;         

    // number of payments
    var numberOfPayments = loanTerm * period;

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  ;

    // interest quotient
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
    var monthlyPayment = Math.floor(loanBalance * interestQuotient);


$("#output").text("Your monthly payment will be " + monthlyPayment + "$");
}) 

  
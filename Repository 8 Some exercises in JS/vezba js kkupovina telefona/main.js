
var bankBalance=prompt("koji je tvoj balans za racunu?");
console.log(bankBalance);
var potrosenaSuma=0;
const stopaPoreza=0.08;
const cenaTelefona=999;
const cenaOpreme=300;
const moguTrosim=7000;

function porez(potrosenaSuma) {
    return potrosenaSuma*stopaPoreza;
}


function dolar(potrosenaSuma) {
    return "$" + potrosenaSuma.toFixed(2);
}

while(potrosenaSuma <bankBalance){
    potrosenaSuma=potrosenaSuma+cenaTelefona;
   if(potrosenaSuma< moguTrosim){
       potrosenaSuma=potrosenaSuma+cenaOpreme;
   }
}

console.log(potrosenaSuma);

/*
var bank_balance=prompt("koji je tvoj balans za racunu?");
console.log(bank_balance);
const SPENDING_THRESHOLD = 7000;
const TAX_RATE = 0.08;
const PHONE_PRICE = 999;
const ACCESSORY_PRICE = 300;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

console.log(amount);
*/
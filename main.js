//Get content 
let content = document.querySelector('textarea');

//Created Constructor
function CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy) 
{
	this.name = name;
	this.type = type;
	this.size = size;
	this.drizzle = drizzle;
	this.whippedCream = whippedCream;
	this.sweetener = sweetener;
	this.coldFoam = coldFoam;
	this.dairy = dairy;

	this.orderInfo = function() 
    {
		content.textContent += '----------------------------------' + '\nCustomer name: ' + this.name + '\nOrder: ' + this.size + ' ' + this.type + '\n';

		//conditions for showing only option if it is checked yes.
		if(this.drizzle || this.whippedCream || this.sweetener || this.coldFoam || this.dairy != 'None')
        content.textContent += 'Additional require: \n';
		if(this.drizzle)
        content.textContent += '\t- Drizzle\n';
		if(this.whippedCream)
        content.textContent += '\t- Whipped Cream\n';
		if(this.sweetener)
        content.textContent += '\t- Sweetener\n';
		if(this.coldFoam)
        content.textContent += '\t- Cold Foam\n';
		if(this.dairy != 'None')
        content.textContent += '\t- ' + this.dairy + '\n';
	};
}

//functio to get checked button
function radioButton(name) 
{
	var radio = document.getElementsByName(name);
	for(var i = 0; i < radio.length; i++) 
    { 
		if(radio[i].checked) 
        {
			return radio[i].value == 'yes';
		}
	}
}


//A function for submit the form
let placeOder = document.getElementById('place_order');

placeOder.onclick = function() 
{
	let name = document.getElementById('name').value;
	let type = document.getElementById('type').value;
	let size = document.getElementById('size').value;
	let drizzle = radioButton('drizzle');
	let whippedCream = radioButton('whippedCream');
	let sweetener = radioButton('sweetener');
	let coldFoam = radioButton('coldFoam');
	let dairy = document.getElementById('dairy').value;


	//calling a function to invoke the new order placed.
	new CoffeeOrder(name, type, size, drizzle, whippedCream, sweetener, coldFoam, dairy).orderInfo();

    if(window.PaymentRequest)
    {

		const supportedPaymentMethod = [{
	
			supportedMethods: ['basic-card']
		}];
	
		const paymentDetails = 
        {
			total:
            {
				label: 'Total',
				amount: 
                {
					currency: 'USD',
					value: 30
				}
			}
		}
		const options = 
        {
		}
	
		const paymentRequest = new PaymentRequest
        (
			supportedPaymentMethod, paymentDetails,  options
		);
		paymentRequest.show();
	}
};

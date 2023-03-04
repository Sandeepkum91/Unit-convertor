// Define the options for the from and to select elements
const options = {
    length: ["cm", "m", "km", "ml", "in", "ft"],
    weight: ["mg", "g", "kg", "ton"],
    temp: ["°C", "°F", "°K"]
};

// °

// Get references to the select elements
const category_selected = document.getElementById('category');
const from = document.getElementById('from-unit');
const to = document.getElementById('to-unit');

function edit_elements() {
  	const category = category_selected.value;
  	const selected_options = options[category];
	
  	// Clear the from and to select elements
  	from.innerHTML = '';
  	to.innerHTML = '';

  	// Add options to the from and to select elements
  	for (let i in selected_options) {
  	  	const option = document.createElement('option');
  	  	option.text = selected_options[i];
  	  	from.add(option);
		
  	  	const option2 = document.createElement('option');
  	  	option2.text = selected_options[i];
  	  	to.add(option2);
  	}
}

// Call the edit_elements function when the category select is changed
category_selected.addEventListener('change', edit_elements);



// converting the length units

const convertlength = (data,from,to)=>{
	let output = 0;
	data = parseFloat(data)
    switch (from) {
        case 'cm':
            switch (to) {
                case 'm':
                    output = data / 100;
                    break;
                case 'km':
                    output = data / 100000;
                    break;
                case 'in':
                    output = data / 2.54;
                    break;
                case 'ft':
                    output = data / 30.48;
                    break;
                case 'ml':
                    output = data / 160934.4;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        case 'm':
            switch (to) {
                case 'cm':
                    output = data * 100;
                    break;
                case 'km':
                    output = data / 1000;
                    break;
                case 'in':
                    output = data * 39.37;
                    break;
                case 'ft':
                    output = data * 3.281;
                    break;
                case 'ml':
                    output = data / 1609.344;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        case 'km':
            switch (to) {
                case 'cm':
                    output = data * 100000;
                    break;
                case 'm':
                    output = data * 1000;
                    break;
                case 'in':
                    output = data * 39370.079;
                    break;
                case 'ft':
                    output = data * 3280.84;
                    break;
                case 'ml':
                    output = data / 1.609;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        case 'in':
            switch (to) {
                case 'cm':
                    output = data * 2.54;
                    break;
                case 'm':
                    output = data / 39.37;
                    break;
                case 'km':
                    output = data / 39370.079;
                    break;
                case 'ft':
                    output = data / 12;
                    break;
                case 'ml':
                    output = data / 63360;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        case 'ft':
            switch (to) {
                case 'cm':
                    output = data * 30.48;
                    break;
                case 'm':
                    output = data / 3.281;
                    break;
                case 'km':
                    output = data / 3280.84;
                    break;
                case 'in':
                    output = data * 12;
                    break;
                case 'ml':
                    output = data / 5280;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        case 'ml':
            switch (to) {
                case 'cm':
                    output = data * 160934.4;
                    break;
                case 'm':
                    output = data * 1609.344;
                    break;
                case 'km':
                    output = data * 1.609;
                    break;
                case 'in':
                    output = data * 63360;
                    break;
                case 'ft':
                    output = data * 5280;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
        default:
            output = data;
            break;
    }
	return output;
}




// converting the weight units

const convertweight = (data,from,to)=>{
	let output = 0;
	data = parseFloat(data)
    switch (from) {
        case 'mg':
            switch (to) {
                case 'g':
                    output = data / 1000;
                    break;
                case 'kg':
                    output = data / 1000000;
                    break;
                case 'ton':
                    output = data / 1000000000;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
		case 'g':
			switch (to) {
				case 'mg':
					output = data * 1000;
					break;
				case 'kg':
					output = data / 1000;
					break;
				case 'ton':
					output = data / 1000000;
					break;
				default:
					output = data;
					break;
			}
			break;
		case 'kg':
			switch (to) {
				case 'mg':
					output = data * 1000000;
					break;
				case 'g':
					output = data * 1000;
					break;
				case 'ton':
					output = data / 1000;
					break;
				default:
					output = data;
					break;
			}
			break;
		case 'ton':
			switch (to) {
				case 'mg':
					output = data * 1000000000;
					break;
				case 'kg':
					output = data * 1000000;
					break;
				case 'ton':
					output = data * 1000;
					break;
				default:
					output = data;
					break;
			}
			break;
		default:
			output = data;
			break;
	}
	return output;
}





// converting the temperature units

const converttemp = (data,from,to)=>{
	let output = 0;
	data = parseFloat(data)
    switch (from) {
        case '°C':
            switch (to) {
                case '°F':
                    output = (data * 9/5) + 32;
                    break;
                case '°K':
                    output = data + 273.15;
                    break;
                default:
                    output = data;
                    break;
            }
            break;
		case '°F':
			switch (to) {
				case '°C':
					output = (data - 32) * 5/9;
					break;
				case '°K':
					output = (data - 32) * 5/9 + 273.15;
					break;
				default:
					output = data;
					break;
			}
			break;
		case '°K':
			switch (to) {
				case '°C':
					output = data  - 273.15;
					break;
				case '°F':
					output = (data - 273.15) * 9/5 + 32;
					break;
				default:
					output = data;
					break;
			}
			break;
		default:
			output = data;
			break;
	}
	return output;
}



// saperate convertor function to check the category and perform appropriate mathematical operations

const convertor = ()=>{
	const from_value = document.getElementById('from-value').value;    const from_unit = document.getElementById('from-unit').value;
    const to_unit = document.getElementById('to-unit').value;

	const category = document.getElementById('category').value;

	let converted_value = 0;
	if(category == '')
	{
		alert("Please choose a category.....");
	}
	else if(category == 'length')
	{
		converted_value = convertlength(from_value,from_unit,to_unit);
	}
	else if(category == 'weight')
	{
		converted_value = convertweight(from_value,from_unit,to_unit);
	}
	else if(category == 'temp')
	{
		converted_value = converttemp(from_value,from_unit,to_unit);
	}

	// adding the output value in document
	document.getElementById('to-value').value = converted_value;
}



// finish

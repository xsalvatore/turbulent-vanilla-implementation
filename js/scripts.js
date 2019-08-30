// button to add a box
const addBoxButton = document.getElementById('add-box-button');

// grid element to be populated with the items
const grid = document.getElementById('grid');

// pre-added items
const items = [
	{
		id: '0',
		value: '0'
	},
	{
		id: '1',
		value: '1'
	},
	{
		id: '2',
		value: '2'
	},
	{
		id: '3',
		value: '3'
	}
];

// populates the grid
const populateGrid = () => {
	let string = '';

	// builds the elements to be added
	for (let i = 0; i < items.length; i++) {
		string += '<div class="grid-item">';
		string += items[i].value;
		string += '</div>';
	}

	// adds the elements
	grid.innerHTML = string;
};

// adds a new element
const addItem = () => {
	// generic content to be added
	let index = items.length;

	// builds the new element
	let newItem = {
		id: index,
		value: index
	};

	//
	items.push(newItem);
	populateGrid();
};

populateGrid();

addBoxButton.onclick = () => addItem();

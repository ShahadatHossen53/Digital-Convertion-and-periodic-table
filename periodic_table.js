function preload() {
  elements_data = loadJSON('chemicalElementsFullDetails.json');
}

let periodic_Table = [];
var is_display_peiodic_table = true;
var isInCell = false;
let display_color;

var display_element_name = "";
var display_element_number = "";
var display_element_symbol = "";
var display_element_index = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  create_periodic_table();

  display_element_name = elements_data[0].name;
  display_element_number = elements_data[0].number;
  display_element_symbol = elements_data[0].symbol;
  display_color = periodic_Table[0].cell_color;
}

function draw() {
  isInCell = false;
  background(220);
  show_periodic_table();
  
}

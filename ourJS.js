// pop up window
// var windowObjectReference;
// function openRequestedPopup() {
//   windowObjectReference = window.open(
//     "lifehackshome.html",
//     "DescriptiveWindowName",
//     "resizable,scrollbars,status"
// )};

 
  
// random genrator button function

// function myFunction() {
// list = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men'];
// r = Math.floor(Math.random() * 4);
// // return list[r];
// return list[r];
// }

function myFunction() {
    list = [lh, lh1, lh2, lh3, lh4, lh5];
    // this is so that we can keep the randy button 
	r = Math.floor(Math.random() * 6);
    document.getElementById("randomValue").innerHTML = list[r];
    }

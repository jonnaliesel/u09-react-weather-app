// export default function rezizeGridItem(item) {

//     grid = ReactDOM.findDOMNode(<App />).getElementsByClassName("grid")[0];
//     rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//     item.style.gridRowEnd = "span "+rowSpan;
// }
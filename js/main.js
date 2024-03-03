// const showTooltip = event => {
//     const tooltip = document.createElement('div');
//     tooltip.textContent = 'home';
//     tooltip.style.cssText = 'position: absolute; background-color: #555; color: #fff; padding: 5px; border-radius: 6px;';
//     tooltip.style.left = event.pageX + 'px';
//     tooltip.style.top = event.pageY + 'px';
//     document.body.appendChild(tooltip);
//     event.target._tooltip = tooltip;
// };

// const hideTooltip = event => {
//     if (event.target._tooltip) {
//         document.body.removeChild(event.target._tooltip);
//         event.target._tooltip = null;
//     }
// };

// const homeImage = document.getElementById('home');
// homeImage.addEventListener('mouseover', showTooltip);
// homeImage.addEventListener('mouseout', hideTooltip);

// const homeImage = document.getElementById('home');
// homeImage.setAttribute('img', 'Home');



// const showTooltip = event => {
//     const tooltip = document.createElement('div');
//     tooltip.textContent = event.target.dataset.tooltip;
//     tooltip.style.cssText = 'position: absolute; background-color: #555; color: #fff; padding: 5px; border-radius: 6px;';
//     tooltip.style.left = event.pageX + 'px';
//     tooltip.style.top = event.pageY + 'px';
//     document.body.appendChild(tooltip);
//     event.target._tooltip = tooltip;
// };

// const hideTooltip = event => {
//     if (event.target._tooltip) {
//         document.body.removeChild(event.target._tooltip);
//         event.target._tooltip = null;
//     }
// };

// const images = document.querySelectorAll('.title');
// const tooltips = ['Home', 'Edit', 'People', 'Flag'];
// images.forEach((img, index) => {
//     img.dataset.tooltip = tooltips[index];
//     img.addEventListener('mouseover', showTooltip);
//     img.addEventListener('mouseout', hideTooltip);
// });

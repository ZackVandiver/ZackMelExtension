// window.onload = function() {
//   document.querySelectorAll('img').forEach(img => {
//     const newImgSrc = chrome.runtime.getURL('images/CodesmithImage.jpg');
//     img.src = newImgSrc;
//     img.onerror = function() {
//         console.error('Could not load image:', newImgSrc);
//     };
//   });
// };

const divsToRemove = document.querySelectorAll('div.section-content');


divsToRemove.forEach(div => {
    // Create an img element
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('images/CodesmithImage.jpg');
    img.style.width = '100%'; // Set image width to 100% of its parent container for better fit
    img.alt = 'Replaced Content';

    // Replace the div with the new img element
    div.parentNode.replaceChild(img, div);
});




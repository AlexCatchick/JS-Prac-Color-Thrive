document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const redInput = document.querySelector(".ip.red");
  const greenInput = document.querySelector(".ip.green");
  const blueInput = document.querySelector(".ip.blue");
  const palette = document.querySelector(".palette");

  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  // Function to convert RGB to Hex
  function rgbToHex(r, g, b) {
    if (r < 256 && g < 256 && b < 256)
      return "#" + toHex(r) + toHex(g) + toHex(b);
    return "#ffffff";
  }
  // Function to update the palette color
  function updatePaletteColor() {
    // Get RGB values from inputs, default to 0 if empty
    const r = parseInt(redInput.value, 10) || 0;
    const g = parseInt(greenInput.value, 10) || 0;
    const b = parseInt(blueInput.value, 10) || 0;

    if (r >= 256 || g >= 256 || b >= 256) {
      redInput.value = 255;
      blueInput.value = 255;
      greenInput.value = 255;
    }
    // Convert RGB to Hex
    const hexColor = rgbToHex(r, g, b);

    // Update the background color of the palette and display the color code
    palette.style.background = hexColor;
    palette.textContent = hexColor;
  }
  // Optionally, update the palette color when inputs change
  redInput.addEventListener("input", updatePaletteColor);
  greenInput.addEventListener("input", updatePaletteColor);
  blueInput.addEventListener("input", updatePaletteColor);
});

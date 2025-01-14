function copyOnClick(elem) {
    navigator.clipboard.writeText(elem.textContent.value);
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
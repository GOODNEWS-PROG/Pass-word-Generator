function copyPasswrd() {
  let copyText = document.getElementById("password");
  // copyText.select();
  // document.execCommand("copy")
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices


  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

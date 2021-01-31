
const inputText = document.getElementById('input-text');
const encodeButton = document.getElementById('encoder');
const decodeButton = document.getElementById('decoder');
const resultElement = document.getElementById('output-text');

encodeButton.addEventListener('click', () => {
  const value = inputText.value;
  const encodedValue = urlEncode(value);
  resultElement.value = encodedValue;
});

decodeButton.addEventListener('click', () => {
  const value = inputText.value;
  const decodedValue = urlDecode(value);
  resultElement.value = decodedValue;
});

const urlEncode = (value) => {
  return encodeURIComponent(value);
};

const urlDecode = (value) => {
  return decodeURIComponent(value);
};
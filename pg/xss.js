const form = document.querySelector('form');
const tagSelect = document.getElementById('tag');
const result = document.getElementById('result');

// Generate a dropdown list of all HTML tags
for (const tag of document.all) {
  if (tag.tagName && !tagSelect.querySelector(`option[value="${tag.tagName}"]`)) {
    const option = document.createElement('option');
    option.value = tag.tagName;
    option.textContent = tag.tagName;
    tagSelect.appendChild(option);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const payload = form.elements.payload.value;
  const selectedTag = form.elements.tag.value;
  const element = document.createElement(selectedTag);
  element.textContent = payload;
  result.innerHTML = '';
  result.appendChild(element);
});

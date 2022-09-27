// 1.
const wrapper = document.querySelector("#wrapper");
console.log(wrapper.children, wrapper.childElementCount);

for (let i = 0; i < wrapper.children.length; i++) {
  const element = wrapper.children[i];

  console.log(element.children, element.children.length);
}

// 2.
const getElementWithMostClasses = (list) => {
  let el = null;
  let maxLength = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (element.classList.length > maxLength) {
      maxLength = element.classList.length;
      el = element;
    }
  }
  console.log(el);
  return {
    element: el,
    numberOfClasses: maxLength,
  };
};

console.log(getElementWithMostClasses(wrapper.children));

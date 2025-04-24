function replaceTextInDOM(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      // First replace "foo bar" with "cats" (case-insensitive)
      node.textContent = node.textContent.replace(/elon musk/gi, 'Sissy SpaceX');
      node.textContent = node.textContent.replace(/elonmusk/gi, 'Sissy SpaceX');
      node.textContent = node.textContent.replace(/elon/gi, 'Sissy SpaceX');
      node.textContent = node.textContent.replace(/musk/gi, 'Sissy SpaceX');
      // Then replace any remaining "foo" with "bar" (case-insensitive)
    }
  
    for (let child of node.childNodes) {
      replaceTextInDOM(child);
    }
  }
  
  // Start from the body
  replaceTextInDOM(document.body);

  document.addEventListener("scroll", (event) => {
    replaceTextInDOM(document.body)
  });
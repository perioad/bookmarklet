(function () {
  const paragraphs = document.getElementsByTagName('p');
  for (let paragraph of paragraphs) {
    paragraph.style.background = 'coral';
  }
})();

(function () {
  const scriptElement = document.createElement('script');
  scriptElement.scr = '';
  document.append(scriptElement);
})();
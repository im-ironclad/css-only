import './polyfills';
import components from './utilities/components';

((function domReady() {
  components.forEach(component => {
    // Get all the component elements on the page
    const componentEls = document.querySelectorAll(component.elsSelector);

    // For each element make it a new Component and initiate
    componentEls.forEach(el => {
      el = new component.Component({
        parent: el,
      });
      el.init();
    });
  });
})());

 cartUpdate();
  clearCart();

  //  Update quantity
  function cartUpdate() {
    var quantityInputs = document.querySelectorAll('.qty-input');
    quantityInputs.forEach((input) => {
      input.addEventListener('change', function (event) {
        event.preventDefault();
        const itemKey = this.dataset.lineItemKey;
        let quantity = this.value;
        let quantityElement = this;
        let line = this.dataset.index;

        const propertyValueToRemove = event.target.dataset.itemPropertyValue;
        const initialLineId = event.target.dataset.lineId;

        const allcartjson = document.getElementById('allcartjson');
        const cart_data = JSON.parse(allcartjson.textContent);

        const itemsToRemove = cart_data.items.filter(
          (item) => item.properties && item.properties.bundle_id === propertyValueToRemove
        );
        console.log('itemsToRemove : ', itemsToRemove);

        const updates = {};
        itemsToRemove.forEach((item) => {
          updates[item.key] = quantity;
        });

        if (itemsToRemove.length != 0) {
          var body = JSON.stringify({
            line,
            quantity,
            updates: updates,
            sections: ['main-cart'],
            sections_url: window.location.pathname,
          });
          console.log('updates :', updates);
          var demo = 'update';
          updateHtml(body, quantityElement, demo);
        } else {
          console.log('this is change call');
          var body = JSON.stringify({
            line,
            quantity,
            sections: ['main-cart'],
            sections_url: window.location.pathname,
          });
          var demo = 'change';
          updateHtml(body, quantityElement, demo);
        }
      });
    });

    const removeButtons = document.querySelectorAll('.remove_item');
    if (removeButtons) {
      removeButtons.forEach((button) => {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          let variantId = this.dataset.variantId;
          let quantity = 0;
          let quantityElement = this;
          let line = this.dataset.index;

          const propertyValueToRemove = event.target.dataset.itemPropertyValue;
          const initialLineId = event.target.dataset.lineId;

          const allcartjson = document.getElementById('allcartjson');
          const cart_data = JSON.parse(allcartjson.textContent);

          const itemsToRemove = cart_data.items.filter(
            (item) => item.properties && item.properties.bundle_id === propertyValueToRemove
          );
          console.log('itemsToRemove : ', itemsToRemove);

          const updates = {};
          itemsToRemove.forEach((item) => {
            updates[item.key] = 0;
          });

          if (itemsToRemove.length != 0) {
            var body = JSON.stringify({
              line,
              quantity,
              updates: updates,
              sections: ['main-cart'],
              sections_url: window.location.pathname,
            });
            console.log('updates :', updates);
            var demo = 'update';
            updateHtml(body, quantityElement, demo);
          } else {
            console.log('this is change call');
            var body = JSON.stringify({
              line,
              quantity,
              sections: ['main-cart'],
              sections_url: window.location.pathname,
            });
            var demo = 'change';
            updateHtml(body, quantityElement, demo);
          }
        });
      });
    }
  }

  function updateHtml(body, quantityElement, demo) {
    fetch(`/cart/${demo}`, { ...fetchConfig(), ...{ body } })
      .then((response) => response.text())
      .then((state) => {
        const parsedState = JSON.parse(state);
        if (parsedState.errors) {
          if (quantityElement) {
            quantityElement.value = quantityElement.dataset.val;
            let parent = quantityElement.closest('.cart-desktop');
            if (parent) {
              const errorMsg = document.createElement('div');
              errorMsg.classList.add('err_message');
              errorMsg.innerText = parsedState.errors;
              parent.appendChild(errorMsg);
            }
          }
          return;
        }
        // Replace updated section
        let html = parsedState.sections['main-cart'];
        let parsedHTML = new DOMParser().parseFromString(html, 'text/html');
        let source = parsedHTML.querySelector('#main-cart');
        let destination = document.querySelector('#main-cart');
        if (source && destination) {
          destination.innerHTML = source.innerHTML;
        }
        cartUpdate();
        clearCart();
      })
      .catch((error) => console.error('Error updating cart:', error));
  }
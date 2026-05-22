
  // // $(document).off('click', '.qty-up-gift-pro, .qty-down-gift-pro');
  // $(document).on('click', '.qty-up-gift-pro, .qty-down-gift-pro', function () {
  //   const input = $(this).closest('.quantity-wrapper').find('.item-gift-quantity');
  //   const uniqueId = input.data('unique-gift-id');
  //   const isGift = input.closest('.cart-item').data('is-gift');

  //   let qty = parseInt(input.val());
  //   if ($(this).hasClass('qty-up-gift-pro')) {
  //     qty = qty;
  //   } else {
  //     qty = qty;
  //   }

  //   if (isGift){
  //     console.log("value are blocked")
  //     return;
  //   } 

  //   let updates = {};
  //   $(`.item-gift-quantity[data-unique-gift-id="${uniqueId}"]`).each(function () {
  //     const key = $(this).data('line-gift-key');
  //     updates[key] = qty;
  //     $(this).val(qty);  
  //   });
  //   updateCartItems(updates);
  // });


  // // $(document).off('click', '.remove_gift_item');
  // $(document).on('click', '.remove_gift_item', function (e) {
  //   e.preventDefault();
  //   const uniqueId = $(this).data('unique-gift-id');
  //   const isGift = $(this).data('is-gift');
  //   if (isGift){
  //     console.log("value are blocked")
  //     return;
  //   } 

  //   let updates = {};
  //   $(`.item-gift-quantity[data-unique-gift-id="${uniqueId}"]`).each(function () {
  //     const key = $(this).data('line-gift-key');
  //     updates[key] = 0; 
  //   });
  //   updateCartItems(updates);
  // });

  // function updateCartItems(updates) {
  //   if (!Object.keys(updates).length) return;
  //   fetch('/cart/update.js', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       updates: updates,
  //       sections: ['cart-drawer', 'main-cart']
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     getCartData(data);
  //   });
  // }
if ($(".faq-left-col").length > 0) {
  //scrollspy
  var sections = $(".faq-scrolling-section"),
    nav = $(".faq-scrolspy"),
    nav_height = $("header").height();
  // console.log(nav_height);

  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize <= 767) {
      console.log("screen width is less than 767");
      $(window).on("scroll", function () {
     var cur_pos = $(this).scrollTop();

        sections.each(function () {
          var top = $(this).offset().top - nav_height - 125,
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find("a").removeClass("active");
            sections.removeClass("active");

            $(this).addClass("active");
            nav
              .find('a[href="#' + $(this).attr("id") + '"]')
              .addClass("active");
          }
        });
      });
      nav.find("a").on("click", function () {
        var $el = $(this),
          id = $el.attr("href");

        $("html, body").animate(
          {
            scrollTop: $(id).offset().top - nav_height - 125,
          },
          500
        );

        return false;
      });
    } else {
      $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
          var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find("a").removeClass("active");
            sections.removeClass("active");

            $(this).addClass("active");
            nav
              .find('a[href="#' + $(this).attr("id") + '"]')
              .addClass("active");
          }
        });
      });
      nav.find("a").on("click", function () {
        var $el = $(this),
          id = $el.attr("href");

        $("html, body").animate(
          {
            scrollTop: $(id).offset().top - nav_height,
          },
          500
        );

        return false;
      });
    }
  }

  
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
}
$(document).ready(function () {
  $(".mobile-toggle").click(function (k) {
    k.preventDefault();
    $(this).toggleClass("active");
    $(".mobile-nav").toggleClass("active");
    $("body,html").toggleClass("scrollno");
  });
  $(".close-menu").click(function (k) {
    k.preventDefault();
    $(".mobile-toggle").removeClass("active");
    $(".mobile-nav").removeClass("active");
    $("body,html").removeClass("scrollno");
  });
  $(".shop-btn").click(function (k) {
    k.preventDefault();
    $(this).toggleClass("active");
    $(".mega-menu").toggleClass("active");
  });
  /********* On scroll heder Sticky *********/
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header").addClass("head-sticky");
    } else {
      $("header").removeClass("head-sticky");
    }
  });
  //END
  /******* Accordian JS *******/
  function close_accordion_section() {
    jQuery(".accordion .accordion-title").removeClass("active");
    jQuery(".accordion .accordion-content").slideUp(300).removeClass("open");
  }
  jQuery(".accordion-title").click(function (e) {
    // Grab current anchor value
    var currentAttrValue = jQuery(this).attr("href");

    if (jQuery(e.target).is(".active")) {
      close_accordion_section();
    } else {
      close_accordion_section();

      // Add active class to section title
      jQuery(this).addClass("active");
      // Open up the hidden content panel
      jQuery(".accordion " + currentAttrValue)
        .slideDown(300)
        .addClass("open");
    }
    e.preventDefault();
  });
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("active");
    $(".tab-content").removeClass("active").css("display", "none");

    $(this).addClass("active");
    $("#" + tab_id)
      .addClass("active")
      .css("display", "block");
  });
  //FAQ ACCORDIAN
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
    } else {
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
  $(".marqee-slider").slick({
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  $(".review-slider").slick({
    infinite: true,
    centerMode: false,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $(".j-section-slider").slick({
    autoplay: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: true,
    dots: false,
    buttons: false,
  });
  

    $(".reassure-slider").slick({
      autoplay: true,
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      dots: true,
      buttons: false,
    });

   $(".u-may-like-slider").slick({
    autoplay: false,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: true,
    dots: false,
    buttons: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  });


  
  /*********  Quntity  *********/
  // $('.minus').click(function() {
  //     var $input = $(this).parent().find('input');
  //     var count = parseInt($input.val()) - 1;
  //     count = count < 1 ? 1 : count;
  //     $input.val(count);
  //     $input.change();
  //     return false;
  // });
  // $('.plus').click(function() {
  //     var $input = $(this).parent().find('input');
  //     $input.val(parseInt($input.val()) + 1);
  //     $input.change();
  //     return false;
  // });
  function addToCartSuccess() {
    // $.get( "/cart?view=mini", function( data ) {
    // $('#crt').html(data);
    $("#crt").removeClass("loading");
    // });
  }
  function refreshCart(cart) {
    $(".cart-count").text(cart.item_count);
  }

  $("body").on("click", ".buttonAddtoCart", function (e) {
    e.preventDefault();

    $(".productGrid .productItem").removeClass("qvopen");
    $("body").addClass("cartOpen");
    $(".fullPage").addClass("witmenu");
  });

  $("body").on(
    "click",
    ".fullPage.witmenu, .closemenu, .closecart",
    function (e) {
      e.preventDefault();
      $("body").removeClass("menuOpen");
      $(".fullPage").removeClass("witmenu");
      $("body").removeClass("cartOpen");
    }
  );
  $("body").on("click", ".cart-btn", function (e) {
    e.preventDefault();
    setTimeout(function () {
      $("body").addClass("cartOpen");
      $(".fullPage").addClass("witmenu");
    }, 500);
  });

  // $("#crt").on('click', "a.remove_item", function(r){
  //     $('#crt').addClass('loading');
  //     r.preventDefault();
  //     // var id = $(this).data("id");
  //     $(this).parents('.quick-cart-item').remove();
  //     $('.itemCount').text($('.cartDrawer .quick-cart-item').length );
  //     if($('.cartDrawer .quick-cart-item').length == 0) {
  //         $('#crt').empty();
  //         $('#crt').append('<p class="emptyCart text-center">You have no items in your shopping cart.</p>');
  //         $('#crt').removeClass('has-item');
  //         $('#crt').removeClass('loading');

  //     } else {
  //         addToCartSuccess();
  //     }

  //     // $.getJSON("/cart.js", function(cart) {
  //     //   refreshCart(cart);
  //     // });
  // });
  $(window).width() >= 768 &&
    (function (e) {
      var a;
      var i = e(".section___scroll");
      var t = 0;
      var o = !1;
      var r = function () {
        setTimeout(function () {
          o = !1;
        }, 500);
      };
      var n = function (a) {
        var i;
        return a[0].getBoundingClientRect().bottom <= e(window).height();
      };
      var s = function (e) {
        var a;
        return e[0].getBoundingClientRect().top >= 0;
      };
      document.addEventListener(
        "wheel",
        function (a) {
          var l = e(i[t]);
          if (o) return a.preventDefault(), void 0;
          var c;
          if (-a.deltaY < 0) {
            if (t + 1 >= i.length) return;
            if (!n(l)) return;
            var d;
            a.preventDefault(), t++;
            var v = (d = e(i[t])).offset().top + 5;
            (o = !0),
              e("html, body").animate(
                {
                  scrollTop: v,
                },
                1e3,
                r
              );
          } else {
            if (t - 1 < 0) return;
            if (!s(l)) return;
            var d;
            a.preventDefault(), t--;
            var v = (d = e(i[t])).offset().top - 90;
            (o = !0),
              e("html, body").animate(
                {
                  scrollTop: v,
                },
                1e3,
                r
              );
          }
        },
        {
          passive: !1,
        }
      );
    })(jQuery);

  var header_hright = $(".inner-header").outerHeight();
  $(".inner-header")
    .next(".inner-wrapper")
    .css("margin-top", header_hright + "px");
});
//mobile fitst slick with window reload
$(window).on("load resize orientationchange", function () {
  deskslider();
});

function deskslider(){
  $(".desk_only_slider").each(function () {
    var $desk_only_slider = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() < 768) {
      if ($desk_only_slider.hasClass("slick-initialized")) {
        $desk_only_slider.slick("unslick");
      }
      $(".cat-tab .tab-link").on("click", function () {
        // $(".cat-tab .tab-link").removeClass("active");
        // $(this).addClass("active");
        $(".cat-tab").scrollCenter(".active", 100);
      });
      jQuery.fn.scrollCenter = function (elem, speed) {
        var active = jQuery(this).find(elem); // find the active element
        //var activeWidth = active.width(); // get active width
        var activeWidth = active.width() / 2; // get active width center
        // var pos = active.position().left + activeWidth; //get left position of active li + center position
        var currentscroll = jQuery(this).scrollLeft(); // get current scroll position
        var divwidth = jQuery(this).width(); //get div width
        //var divwidth = jQuery(elem).width(); //get div width
        // pos = pos + currentscroll - divwidth / 2; // for center position if you want adjust then change this
        // jQuery(this).animate(
        //   {
        //     scrollLeft: pos,
        //   },
        //   speed == undefined ? 1000 : speed
        // );
        return this;
      };
      jQuery.fn.scrollleft = function (elem, speed) {
        jQuery(this).animate(
          {
            scrollLeft:
              jQuery(this).scrollLeft() -
              jQuery(this).offset().left +
              jQuery(elem).offset().left,
          },
          speed == undefined ? 1000 : speed
        );
        return this;
      };
      $(".cat-tab").scrollCenter(".active", 100);
    } else {
      if (!$desk_only_slider.hasClass("slick-initialized")) {
        $("ul.tabs .tab-link").click(function () {
          $(".best-seller-slider").slick("refresh");
        });
        $desk_only_slider.slick({
          infinite: false,
          centerMode: false,
          arrows: true,
          dots: false,
          autoplay: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
              },
            },
          ],
        });
      }
    }
  });
}
$(window).on("load resize orientationchange", function () {
  mobileslider();
});


function mobileslider() {
  $(".mobile_only_slider").each(function () {
    var $mobile_only_slider = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() < 768) {
      if ($mobile_only_slider.hasClass("slick-initialized")) {
        $mobile_only_slider.slick("unslick");
      }
      $(".cat-tab .tab-link").on("click", function () {
        // $(".cat-tab .tab-link").removeClass("active");
        // $(this).addClass("active");
        $(".cat-tab").scrollCenter(".active", 100);
      });
      jQuery.fn.scrollCenter = function (elem, speed) {
        var active = jQuery(this).find(elem); // find the active element
        //var activeWidth = active.width(); // get active width
        var activeWidth = active.width() / 2; // get active width center
        // var pos = active.position().left + activeWidth; //get left position of active li + center position
        var currentscroll = jQuery(this).scrollLeft(); // get current scroll position
        var divwidth = jQuery(this).width(); //get div width
        //var divwidth = jQuery(elem).width(); //get div width
        // pos = pos + currentscroll - divwidth / 2; // for center position if you want adjust then change this
        // jQuery(this).animate(
        //   {
        //     scrollLeft: pos,
        //   },
        //   speed == undefined ? 1000 : speed
        // );
        return this;
      };
      jQuery.fn.scrollleft = function (elem, speed) {
        jQuery(this).animate(
          {
            scrollLeft:
              jQuery(this).scrollLeft() -
              jQuery(this).offset().left +
              jQuery(elem).offset().left,
          },
          speed == undefined ? 1000 : speed
        );
        return this;
      };
      $(".cat-tab").scrollCenter(".active", 100);
    } else {
      if (!$mobile_only_slider.hasClass("slick-initialized")) {
        $("ul.tabs .tab-link").click(function () {
          $(".best-seller-slider").slick("refresh");
        });
        // $mobile_only_slider.slick({
        //   infinite: false,
        //   centerMode: false,
        //   arrows: true,
        //   dots: false,
        //   autoplay: false,
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   responsive: [
        //     {
        //       breakpoint: 200,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 1,
        //         adaptiveHeight: true,
        //       },
        //     },
        //     {
        //       breakpoint: 200,
        //       settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 1,
        //         adaptiveHeight: true,
        //       },
        //     },
        //   ],
        // });
      }
    }
  });
}


//END
$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  // var bounds = this.offset();
  // bounds.right = bounds.left + this.outerWidth();
  // bounds.bottom = bounds.top + this.outerHeight();
  // return !(
  //   viewport.right < bounds.left ||
  //   viewport.left > bounds.right ||
  //   viewport.bottom < bounds.top ||
  //   viewport.top > bounds.bottom
  // );
};

$(window).scroll(function () {
  if ($(".pdp-wrapper").length > 0) {
    if ($(".pdp-first-section").isOnScreen()) {
      $(".pdp-img-btn ,.pdp-img-text").removeClass("visible");
    } else {
      $(".pdp-img-btn,.pdp-img-text").addClass("visible");
    }
    if ($(".pdp-third-section").isOnScreen()) {
      $(".pdp-img").addClass("finsihed");
    } else {
      $(".pdp-img").removeClass("finsihed");
    }
  }
});


 function cartCount() {
    $.getJSON("/cart", function (cart) {
      $(".count").text(cart.item_count);
    });
  }

// qty count
$(document).ready(function () {
  $("body").on("click", ".qty-up", function (e) {
    const input = $(this)
      .closest(".quantity-wrapper")
      .find('input[name="quantity"],input[name="updates[]"]');
      
    input.val(parseInt(input.val()) + 1);
    input.trigger("change");
  });
  $("body").on("click", ".qty-down", function (e) {
    const input = $(this)
      .closest(".quantity-wrapper")
      .find('input[name="quantity"],input[name="updates[]"]');
    if (parseInt(input.val()) > 0) {
      input.val(parseInt(input.val()) - 1);
      input.trigger("change");
    }
  });
  

// bundel product add to cart using parent id
$('body').on('click', '.parent-child-bundel-product-button', function (e) {
  e.preventDefault();

  let mainVariantId = $('.main-product-section').data('product-variant-id');
  let qty = parseInt($('input[name="quantity"]').val()) || 1;
  let uniqueId = Math.floor(Math.random() * 1000000000);

  console.log(mainVariantId, 'mainVariantId');
  console.log(qty, 'qty');
  console.log(uniqueId, 'uniqueId');

  let val = $('.meta-val').data('product-bundel-ids');
  console.log(val, 'val');

  let ids = [];

  if (Array.isArray(val)) {
    ids = val;
  } else if (typeof val === 'string') {
    ids = val.split(',').map(function (id) {
      return id.trim();
    }).filter(function (id) {
      return id !== '';
    });
  } else if (val) {
    ids = [val];
  }

  console.log(ids, 'ids');

  let itemsToAdd = {
    items: [
      {
        id: mainVariantId,
        quantity: qty,
        properties: { unique_identifier: uniqueId }
      }
    ]
  };

  ids.forEach(function (variantId) {
    itemsToAdd.items.push({
      id: variantId,
      parent_id: mainVariantId,
      quantity: qty,
      properties: { unique_identifier: uniqueId }
    });
  });

  $.ajax({
    url: '/cart/add.js',
    type: 'POST',
    data: JSON.stringify({
      ...itemsToAdd,
      sections: ['cart-drawer', 'main-cart']
    }),
    dataType: 'json',
    contentType: 'application/json',
    success: function (response) {
      console.log('Added Successfully', response);
      getCartData(response);
    },
    error: function (err) {
      console.error('Error Adding Bundle:', err);
    }
  });

});


// add cart
  $("body").on("click", ".add-to-cart-button", function (e) {
    e.preventDefault();
    showCartLoader();

    const form = $(this).closest("form")[0];
    const formData = new FormData(form); 

    const data = $('.metafield_product_id:checked').val();
    // console.log(data,"data");

    if(data){
      const uniqueId = Math.floor(Math.random() * 1000000000);
      formData.append('properties[unique_identifier]', uniqueId);
      // formData.append('properties[_unique_identifier]', uniqueId);
    }
    formData.append('sections', 'cart-drawer,main-cart');

    // let formData = $(this).closest("form").serialize();
    $.ajax({
      url: "/cart/add",
      type: "POST",
      data: formData,
      processData: false, 
      contentType: false,
      dataType: "json",
      success: function (response) {
        // console.log(response,"add cart");
        hideCartLoader();

        $.ajax({
          url: "/cart",
          type: "GET",
          dataType: "json",
          success: function(response){
            console.log(response,"response");
            const price = response.total_price;
            const FREE_GIFT_VARIANT_ID = $('body').data('free-product'); 
            const EXTRA_GIFT_ID = $('body').data('free-extra-child-product-id') 
            const hasFreeGift = response.items.some(item => item.variant_id == FREE_GIFT_VARIANT_ID);
            const hasExtraGift = response.items.some(item => item.variant_id == EXTRA_GIFT_ID);
            // const lineprice = response.items.some(item => item.original_price == 0);
            // console.log(lineprice, "lineprice");
            addFreeGift(price , hasFreeGift, hasExtraGift);


            const ItemCount = response.item_count;
            const shipId = $('.shipping-protection-checkbox').data('shipping-protection-id');
            // console.log(shipId,"shipId");
            const hasShipData = response.items.some(item => item.variant_id == shipId);
            // console.log(hasShipData,"hasShipData1");

            if (hasFreeGift || hasExtraGift) return;
            if (!shipId) return;
              // shippingProtection(hasShipData, ItemCount);
          },
          error: function(err){
            console.log(err);
          }
        });
        cartCount();
        getCartData(response);
        CartReserveTimer(true);
      },
      error: function (response) {
        // console.log(response, 'response');
        // console.log(response.responseJSON.message, 'response.responseJSON.message');
        $(".error").text(response.responseJSON.errors);
        $(".error").text(response.responseJSON.message);
        hideCartLoader();
      },
    });
  });

// Quantity Value
  // const giftvalue = $('.cart-item').data('is-gift');
  // if(giftvalue == false){
    $('.quantity-selector').each(function() {
      const minusButton = $(this).find('.minus');
      const plusButton = $(this).find('.plus');
      const quantityInput = $(this).find('#Quantity');

      minusButton.on('click', function() {
        let currentValue = parseInt(quantityInput.val());
        if (currentValue > parseInt(quantityInput.attr('min'))) {
          quantityInput.val(currentValue - 1);
        }
      });

      plusButton.on('click', function() {
        let currentValue = parseInt(quantityInput.val());
        quantityInput.val(currentValue + 1);
      });
    });

    $("body").on("change", ".quantity-input", function () {
      var input = $(this);
      var quantity = parseInt(input.val());
      const variantId = $(this)
        .closest(".quantity-wrapper")
        .find("input[value]")
        .val();
        const lineItemproperty = input.data('line-item-property');
        const key = $(this).closest(".quick-cart-item").data('line-key');
        console.log(key,"key");
        
        changeCartItemQuantity(variantId, quantity, lineItemproperty, key);
    });

    $("body").on("click", ".remove_item", function (e) {
      var input = $(this);
      const variantId = $(this)
        .closest(".quick-cart-item")
        .find("input[value]")
        .val();
      const quantity = 0;
      const lineItemproperty = input.data('line-item-property');

      const key = $(this).closest(".quick-cart-item").data('line-key');
      console.log(key,"key");

      changeCartItemQuantity(variantId, quantity, lineItemproperty, key);
      cartProductRecommended();
    });

     function changeCartItemQuantity(variantId, quantity, lineItemproperty, key) {
      console.log(quantity);
      showCartLoader();

      console.log(variantId,"variantId")
      console.log(quantity,"quantity")
      console.log(lineItemproperty,"lineItemproperty")
      console.log(key,"key")

      var qty_array = [];

      $('#cart_form [name="updates[]"]').each(function(i,e) {
        if($(this).data('line-item-property') == lineItemproperty){
            qty_array.push(quantity);
            // console.log("1111111");
        }
        else {
            qty_array.push(parseInt($(this).val()) || 0);
            // console.log("22222222");
        }
      });

      let endpoint = "";
      let payload = {};
      console.log(key,"key");

      if (lineItemproperty && lineItemproperty.length !== 0) {
        endpoint = "update";
        payload = {
          'updates': qty_array,
          sections: ['cart-drawer', 'main-cart'],
        };
      } else {
        endpoint = "change";
        payload = {
          id: key,
          quantity: quantity,
          sections: ['cart-drawer', 'main-cart'],
        };
      }

      $.ajax({
        type: "POST",
        url: `/cart/${endpoint}.js`,
        data: JSON.stringify(payload),           
        contentType: "application/json",         
        dataType: "json",
        success: function (response) {
            CartReserveTimer(true);
  
            console.log('Cart updated:', response);
            cartCount();
            getCartData(response);
            hideCartLoader();

            const price = response.total_price;
            // console.log(price,"price");
            // console.log(response,"response");
            const FREE_GIFT_VARIANT_ID = $('body').data('free-product'); 
            const EXTRA_GIFT_ID = $('body').data('free-extra-child-product-id') 
            const hasFreeGift = response.items.some(item => item.variant_id == FREE_GIFT_VARIANT_ID);
            const hasExtraGift = response.items.some(item => item.variant_id == EXTRA_GIFT_ID);
            // console.log(hasFreeGift);
            addFreeGift(price , hasFreeGift, hasExtraGift);


            const ItemCount = response.item_count;
            const shipId = $('.shipping-protection-checkbox').data('shipping-protection-id');
            // console.log(shipId,"shipId");
            const hasShipData = response.items.some(item => item.variant_id == shipId);
            // console.log(hasShipData,"hasShipData1");
            if (hasFreeGift || hasExtraGift) return;
            if (!shipId) return;
            // shippingProtection(hasShipData, ItemCount);

        },
        error: function (textStatus) {
          // console.error('Error updating cart:', textStatus);
          $(".show-error").text(textStatus.responseJSON.message);
          hideCartLoader();
        },
      });
      // });
    }
  // }
});

  $('body').on('click', '.clear-cart',function(){
    $.ajax({
      type: "post",
      url: '/cart/clear.js',
      data: {
        'sections': ['cart-drawer', 'main-cart'] 
      },
      dataType: "json",
      success: function (response) {
        // console.log(response);
        cartCount();
        getCartData(response);
      },
      error: function(error){
        console.log(error);
      }
    })
  })


// predictive-search
$(document).ready(function () {
  $(".search-input").on("input", function () {
    const searchTerm = $(this).val().trim();
    const Path = $(".search-input").data('search-path');
    console.log(Path,"111111111111")

    if (searchTerm.length < 1) {
      $("#searchResults").hide().empty();
      return;
    }
    $.ajax({
      url: `${Path}/search/suggest?q=${searchTerm}&resources[type]=product,collection,page,query,article&section_id=predictive-search`,
      type: "GET",
      dataType: "html",
      success: function (data) {

        if ($(".search-input").val().trim().length < 1) {
          $("#searchResults").hide().empty();
          return;
        }
        $("#searchResults").html(data).show();
      }
    });
  });
});


// product variants
  $(document).ready(function () {
    productVariant();
    initSlider();
    initThumbnailClick();
  });

  function initSlider() {
    const $slider = $('.js-thumb-slider');
    if (!$slider.length) return;

    if ($slider.hasClass('slick-initialized')) $slider.slick('unslick');

    // find the active thumbnail index in DOM
    const $activeThumb = $slider.find('.thumb-item.active').first();
    let initialSlide = 0;
    if ($activeThumb.length) {
      initialSlide = $activeThumb.index(); // DOM index works reliably
    }

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      variableWidth: false,
      initialSlide: initialSlide // ⚡ start at active thumb
    });
  }

  function productVariant() {
    $('body').on('change', '.variant-data', function () {
      const id = $(this).data('variant-value');
      const wrapper = $(this).closest('.main-product-section').length
        ? $(this).closest('.main-product-section')
        : $(this).closest('.product-content');

      const sectionId = 'product-variant-picker';
      const selectedOptionValues = [];

      wrapper.find('.variant-option input[type="radio"]:checked').each(function () {
        selectedOptionValues.push($(this).data('option-value-id'));
      });

      const params = selectedOptionValues.length ? '&option_values=' + selectedOptionValues.join(',') : '';
      const productUrl = $(this).data('product-url');
      const url = productUrl
        ? productUrl + '?section_id=' + sectionId + params
        : window.location.pathname + '?section_id=' + sectionId + params;

      $.ajax({
        url: url,
        type: 'GET',
        success: function (responseText) {
          const variant_data = $(responseText).find('.product-content').html();
          $('.product-content').html(variant_data);

          const variantImg = $(responseText).find('.product-media').html();
          $('.product-media').html(variantImg);

          mobileslider();
          compareProduct();
          initThumbnailClick();
          initSlider(); // ⚡ Slick re-init with active thumbnail

          window.history.pushState('', '', window.location.pathname + '?variant=' + id);
        }
      });
    });
  }

  function initThumbnailClick() {
    const thumbnails = document.querySelectorAll('.thumb-item img');
    const mainImageContainer = document.querySelector('.thumb-click-img');

    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', function () {
        const fullImg = this.dataset.fullImage;

        document.querySelectorAll('.thumb-item').forEach(item => item.classList.remove('active'));
        this.closest('.thumb-item').classList.add('active');

        const mainImage = mainImageContainer.querySelector('img');
        if (mainImage) mainImage.src = fullImg;

        const $slider = $('.js-thumb-slider');
        if ($slider.hasClass('slick-initialized')) {
          const index = $(this).closest('.thumb-item').index();
          $slider.slick('slickGoTo', index);
        }
      });
    });
  }




// product selected variant image 
  $('body').on( 'click', '.variant-image-data', function(e){
    e.preventDefault();

    const value = $(this).data('product-url');
    const id = $(this).data('variant-id');
    const handel = $(this).data('product-selcted-handel');
    console.log(handel,"handel");
    $.ajax({
      url: value,
      type: "GET",
      dataType: "html",
      success: function(response){
          const variant_data = $(response).find('.product-content').html();
          $('.product-content').html(variant_data);
          
          const variantImg = $(response).find('.product-media').html();
          $('.product-media').html(variantImg);
          mobileslider();  

          window.history.pushState( "",  "", `/products/${handel}?variant=${id}`);
      },
      error: function(err){
        console.log(err);
      }
    })
  });

// filter
  $(document).ready(function(){
    $('body').on('click', '.accordion-header', function (e) {
      e.stopPropagation();
      const body = $(this).next('.accordion-body');

      $('.accordion-body').not(body).css('max-height', '0px');
      $('.accordion-header').not(this).removeClass('active');

      if (body.css('max-height') !== '0px') {
        body.css('max-height', '0px');
        $(this).removeClass('active');
      } else {
        body.css('max-height', body[0].scrollHeight + 'px');
        $(this).addClass('active');
      }
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.accordion-header, .accordion-body').length) {
        $('.accordion-body').css('max-height', '0px');
        $('.accordion-header').removeClass('active');
      }
    });
  });

  $(document).ready(function () {
    $("body").on("change", ".filter-data", function () {
      const formData = $(this).closest("form").serialize();
      filter(formData);
    });

    let timer;
    $("body").on("keyup", ".filter-price-data", function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const formData = $(this).closest("form").serialize();
        filter(formData);
      }, 800);
    });

    $("body").on("click", ".remove-filter-link", function () {
      const value = $(this).data("filter-url");
      removeData(value);
    });

    $("body").on("click", ".remove-all", function () {
      const value = $(this).data("remove-all-filter");
      removeData(value);
    });

    initPriceSlider();
  });

  function filter(formData) {
    let url;
    const searchTerm = $(".search-input").val();

    if (searchTerm) {
      url = `${window.location.pathname}?q=${searchTerm}&${formData}`;
    } else {
      url = `${window.location.pathname}?${formData}`;
    }

    $.ajax({
      url: url,
      type: "GET",
      dataType: "HTML",
      success: function (data) {
        const FindData = $(data).find(".show-filter-data").html();
        $(".show-filter-data").html(FindData);
        
        // const parser = new DOMParser();
        // const doc = parser.parseFromString(data, "text/html");
        // document.querySelector(".show-filter-data").innerHTML = doc.querySelector(".show-filter-data").innerHTML;

        const searchTerm = $(".search-input").val();
        if (searchTerm) {
          window.history.pushState("",  "",  `${url}` );
        } else {
          window.history.pushState( "",  "",  `${url}` );
        }
        initPriceSlider(); 
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  function removeData(value) {
    $.ajax({
      url: value,
      type: "GET",
      dataType: "HTML",
      success: function (response) {
        const clearfilterdata = $(response).find(".show-filter-data").html();
        $(".show-filter-data").html(clearfilterdata);

        window.history.pushState("", "", value);
        initPriceSlider(); 
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

// filter Range
function initPriceSlider() {
  const container = $('.price-filter-wrapper');
  const minRange = container.find('.range-min');
  const maxRange = container.find('.range-max');
  const minInput = container.find('[data-min-value]');
  const maxInput = container.find('[data-max-value]');

  if (!minRange.length) return;

  const rangeMax = parseInt(minRange.attr("max")) || 0;

  function clamp(value) {
    value = Number(value);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > rangeMax) value = rangeMax;
    return value;
  }

  function togglePriceName(min, max) {
    const isDefault = (min == 0 && max == rangeMax);

    if (isDefault) {
      minInput.removeAttr("name");
      maxInput.removeAttr("name");
    } else {
      minInput.attr("name", minInput.data("name"));
      maxInput.attr("name", maxInput.data("name"));
    }
  }

  function updateAll(e, min, max) {
    min = clamp(min);
    max = clamp(max);

    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = rangeMax;

    // Prevent crossing
    if (min >= max) {
      if ($(e?.target).hasClass("range-min")) {
        min = max - 1;
        minRange.val(min);
      } else {
        max = min + 1;
        maxRange.val(max);
      }
    }

    minRange.val(min);
    maxRange.val(max);
    minInput.val(min);
    maxInput.val(max);

    togglePriceName(min, max); 

    const percent1 = (min / rangeMax) * 100;
    const percent2 = (max / rangeMax) * 100;

    container.find(".custom-price-slider").css(
      "background",
      `linear-gradient(to right, #ddd ${percent1}%, black ${percent1}%, black ${percent2}%, #ddd ${percent2}%)`
    );
  }

  // SLIDER INPUT
  minRange.add(maxRange).off("input").on("input", function (e) {
    updateAll(e, minRange.val(), maxRange.val());
  });

  // Rang FILTER CALL
  let timerPrice;
  minRange.add(maxRange).off("change").on("change", function (e) {
    updateAll(e, minRange.val(), maxRange.val());

    clearTimeout(timerPrice);
    timerPrice = setTimeout(() => {
      const formData = $(this).closest("form").serialize();
      filter(formData);
    }, 1500);
  });

  // -------- TEXT INPUT (LIVE CLAMP) --------
  minInput.off("input").on("input", function () {
    this.value = clamp(this.value);
  });

  maxInput.off("input").on("input", function () {
    this.value = clamp(this.value);
  });

  // -------- BLUR FINAL SYNC --------
  let textTimer;
  minInput.add(maxInput).off("blur").on("input", function (e) {
    clearTimeout(textTimer);
    textTimer = setTimeout(() => {
      let min = minInput.val();
      let max = maxInput.val();

      // Allow empty while typing
      if (minInput.val() === "") min = 0;
      if (maxInput.val() === "") max = rangeMax;

      min = clamp(min);
      max = clamp(max);

      // Prevent crossing AFTER typing complete
      if (min >= max) {
        if ($(this).is(minInput)) {
          min = max - 1;
        } else {
          max = min + 1;
        }
      }
      updateAll(e, min, max);

      if (min < max) {
        const formData = $(this).closest("form").serialize();
        filter(formData);
      }
    }, 1500);
  });

  // INIT
  updateAll(null, minRange.val(), maxRange.val());
}


// tag filters
  $(document).ready(function() {
    $('body').on('change', '.filter-value', function(e) {
      e.preventDefault();
      var selectedTags = [];
      $('input[type="checkbox"]:checked').each(function() {
          selectedTags.push($(this).val());
      });

      const collectionUrl = $(this).data('collection-url');
      console.log(collectionUrl, "collectionUrl");

      var newUrl = collectionUrl; 

      if (selectedTags.length > 0) {
        newUrl +=  selectedTags.join('+');
        console.log(newUrl,"999999");
      }
      else{
        newUrl += $(this).val();
      }
      console.log(newUrl,"111");

      $.ajax({
        url: newUrl,
        type: 'GET',
        dataType: "html",
        success: function(response){
          // console.log(response,"response");

          const data = $(response).find('.show-filter-data').html();
          $('.show-filter-data').html(data);

          window.history.pushState( "",  "", newUrl);
        },
        error: function(err){
          console.log(err);
        }
      })
    });
  });

// quick-view
$(document).ready(function () {
  $('body').on('click', '.quick-view', function () {
    const url = $(this).data('product-url');

    $.ajax({
      url: url,
      type: "GET",
      success: function (response) {
        const variantvalue = $(response).find('.main-product-section').html();
        $('.quick-view-product-details').html(variantvalue);

        mobileslider();
        compareProduct();
        $('#QuickViewModal').addClass('active');
        $('body').addClass('quick-view-open');
      }
    });
  });

  $('body').on('click', '.quick-view-close-button', function (e) {
    $('#QuickViewModal').removeClass('active');
    $('body').removeClass('quick-view-open');
  });

  $('body').on('click', '#QuickViewModal', function (e) {
    if ($(e.target).closest('.quick-view-content').length === 0) {
      $('#QuickViewModal').removeClass('active');
      $('body').removeClass('quick-view-open');
    }
  });
});


// Loadmore
$('body').on('click', '.load-more-btn', function(e) {
    e.preventDefault();
    var value = $(this);
    var nextUrl = value.data('next-url');

    $.ajax({
        url: nextUrl,
        type: 'GET',
        dataType: 'html',
        success: function(response) {
            var newProduct = $(response).find('.paginate-load').html();
            // console.log(newProduct);
            $('.paginate-load').append(newProduct);

            var nextPage = $(response).find('.load-more-btn');
            if (nextPage.length) {
                value.data('next-url', nextPage.data('next-url'));
            } else {
                value.remove(); 
            }
        },
        error: function(err) {
          console.log(err);
        }
    });
});

// scrolling
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) { 
      onScroll();
    }
  });

  var isLoading = false; 
  function onScroll() {
    var oldData = $('.infinite-scroll');
    var nexturl = $('#pagination-next-url');
    if (isLoading || !nexturl.length || !nexturl.data('next-url')) {
      return;
    }
    isLoading = true;
    var url = nexturl.data('next-url');

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'html',
      success: function(response) {
        // console.log(response)
        var value = $(response).find('.infinite-scroll').html(); 
        $('.infinite-scroll').append(value);

        var newurl = $(response).find('#pagination-next-url');
        if (newurl.length && newurl.data('next-url')) {
          nexturl.data('next-url', newurl.data('next-url'));
        } else {
          nexturl.remove(); 
        }
          isLoading = false;
      },
      error: function(error) {
        console.error("error found in scroll:", error);
      }
    });
  }
});


// Recently View
  $(document).ready(function(){
    recentview();
    getRecentViewProduct();
    function recentview(){
      var recenturl = $('.recent-view').data('product-handle');
      if(recenturl){
        const maxItems = 5;
        let recent = JSON.parse(localStorage.getItem('recently_view')) || [];
  
        recent = recent.filter(item => item !== recenturl);
        recent.push(recenturl);

        if (recent.length > maxItems) {
          recent.shift();
        }
        localStorage.setItem('recently_view', JSON.stringify(recent));
      }
    }
  })

  function getRecentViewProduct(){
    const productUrl = $('.recent-view').data('product-handle');
    var recent = JSON.parse(localStorage.getItem('recently_view')) || [];
    recent = recent.filter(item => item !== productUrl);
    recent.forEach(handle => {
      $.ajax({
        url:  '/products/' + handle + '?section_id=product-card',
        type: 'GET',
        dataType: 'html',
        sections: 'recently-view-product',
        success: function(response) {
          const value = $(response).find('.best-sell-item').html();
          $('.recent-view').append(value);

          const recentlyViewedData = localStorage.getItem('recently_view');
          if (recentlyViewedData) {
              const products = JSON.parse(recentlyViewedData);
              if (products && products.length > 1) {
                $('#recently-viewed-heading').show();
              }
          }
        },
        error: function(err){
          console.log(err,"err");
        }
      })
    })
  }

  setTimeout(function() {
    localStorage.removeItem('recently_view');
  }, 100000);


  // cartDrawer product Recommendation
   function cartslider(){
      $(".custom-cart-slider").each(function () {
      var $mobile_only_slider = $(this);
      
        if (!$mobile_only_slider.hasClass("slick-initialized")) {
          // $("ul.tabs .tab-link").click(function () {
          //   $(".best-seller-slider").slick("refresh");
          // });
          $mobile_only_slider.slick({
            infinite: false,
            centerMode: false,
            arrows: true,
            dots: false,
            autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
                },
              },
            ],
          });
        }
      }
    );
   }
  
  cartslider();
  function cartProductRecommended(){
    const CartproductRecommendationsSection = document.querySelector('.cartdrawer-product-recommendations');
    if(CartproductRecommendationsSection != null){
      const cartrecommendurl = CartproductRecommendationsSection.getAttribute('data-url');
      fetch(cartrecommendurl)
      .then(response => response.text())
      .then((text) => {
          const html = document.createElement('div');
          html.innerHTML = text;
          const recommendations = html.querySelector('.cartdrawer-product-recommendations');
          if (recommendations && recommendations.innerHTML.trim().length) {
            CartproductRecommendationsSection.innerHTML = recommendations.innerHTML;
          }
          cartslider();
      });
    }
  }
  cartProductRecommended();


// gift card
  $(document).ready(function () {
    // Toggle gift card fields
    $('body').on('change', '.gift-card-send-checkbox', function () {
      $('#gift-card-fields').toggleClass(
        'gift-card-hidden',
        !$(this).is(':checked')
      );
    });

    // Date validation
    $('body').on('change', '#gift-card-send-date', function () {
      const today = new Date();
      today.setHours(0,0,0,0);

      const selectedDate = new Date($(this).val());
      const maxDate = new Date(today);
      maxDate.setDate(maxDate.getDate() + 90);

      if (selectedDate < today) {
        $('#gift-card-date-error').text('The selected date cannot be in the past.');
      } 
      else if (selectedDate > maxDate) {
        $('#gift-card-date-error').text('The selected date cannot be more than 90 days in the future.');
      } 
      else {
        $('#gift-card-date-error').text('');
      }
    });
  });

      
// Add freeproduct 
function addFreeGift(price, hasFreeGift, hasExtraGift) {
  showCartLoader();
  const cartTotal = price / 100;

  const FREE_GIFT_VARIANT_ID = $('body').data('free-product'); 
  const THRESHOLD_AMOUNT = $('body').data('free-product-price'); 

  const EXTRA_GIFT_AMOUNT = $('body').data('free-extra-child-product-amount'); 
  const EXTRA_GIFT_ID = $('body').data('free-extra-child-product-id');


  function handleGift(threshold, variantId, hasGift) {
    // if (!variantId) return;
    if (cartTotal >= threshold && !hasGift) {
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
          id: variantId,
          quantity: 1,
          sections: ['cart-drawer', 'main-cart']
        },
        dataType: 'json',
        success: function(response) {
          getCartData(response);
          hideCartLoader();
          cartCount();
        },
        error: function(error){
          console.error('Error adding gift:', error);
        }
      });
    }
    else if (cartTotal < threshold && hasGift) {
      $.ajax({
        type: "POST",
        url: "/cart/update.js",
        data: {
          updates: {
            [variantId]: 0
          },
          sections: ['cart-drawer', 'main-cart']
        },
        dataType: "json",
        success: function(response) {
          getCartData(response);
          hideCartLoader();
         
            const FREE_GIFT_VARIANT_ID = $('body').data('free-product'); 
            const EXTRA_GIFT_ID = $('body').data('free-extra-child-product-id') 
            const hasFreeGift = response.items.some(item => item.variant_id == FREE_GIFT_VARIANT_ID);
            const hasExtraGift = response.items.some(item => item.variant_id == EXTRA_GIFT_ID);

            const ItemCount = response.item_count;
            const shipId = $('.shipping-protection-checkbox').data('shipping-protection-id');
            const hasShipData = response.items.some(item => item.variant_id == shipId);

            if (hasFreeGift || hasExtraGift) return;
            if (!shipId) return;
            // shippingProtection(hasShipData, ItemCount);
        
          cartCount();
        },
        error: function(error){
          console.error('Error removing gift:', error);
        }
      });
    }
  }
  handleGift(THRESHOLD_AMOUNT, FREE_GIFT_VARIANT_ID, hasFreeGift);
  handleGift(EXTRA_GIFT_AMOUNT, EXTRA_GIFT_ID, hasExtraGift);
  hideCartLoader();
}

// subscription
$(document).ready(function() {
  $('body').on('click', '.one-time-purches', function(e) {
    e.preventDefault();
    subscription(this);
  });
  $('body').on('change', '.subscription-selector', function(e) {
    e.preventDefault();
    subscription(this);
  });

  function subscription(value){
    var lineItemKey = $(value).data('line-item-key');
    console.log(lineItemKey,"lineItemKey");

    const quantity = $(value).data('quantity');
    console.log(quantity,"quantity");

    var newSellingPlanId = $(value).val();
    console.log(newSellingPlanId,"newSellingPlanId");

    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: {
        id: lineItemKey,
        quantity: quantity,
        selling_plan: newSellingPlanId,
        sections: ['cart-drawer', 'main-cart'] 
      },
      dataType: 'json',
      success: function(response) {
        console.log(response);
        getCartData(response); 
      },
      error: function(xhr, status, error) {
        console.error('Error updating cart:', error);
      }
    });
  }
});


// compare product
compareProduct();
  function compareProduct(){
    $(document).ready(function() {
      let productsToCompare = JSON.parse(localStorage.getItem('CompareList')) || [];

      $('.compare-product-button').each(function() {
          const handle = $(this).data('product-handle');
          if (productsToCompare.some(p => p === handle)) {
              $(this).text('Remove Compare');
          }
      });

      $('.compare-product-button').on('click', function(e) {
        e.preventDefault();
          const handle = $(this).data('product-handle');
          // console.log(handle,"productIndex")

          const productData = handle;

          const productIndex = productsToCompare.findIndex(p => p === handle);
          // console.log(productIndex,"productIndex")

          if (productIndex > -1) {
              productsToCompare.splice(productIndex, 1);
              $(this).text('Add to Compare');
          } else {
              if (productsToCompare.length < 3) {
                  productsToCompare.push(productData);
                  $(this).text('Remove Compare');
              } else {
                  alert('You can compare a maximum of 3 products');
              }
          }

          localStorage.setItem('CompareList', JSON.stringify(productsToCompare));
          updateCompareCount();
      });

      function updateCompareCount() {
        $('.compare-product-count').html(productsToCompare.length);

          const compareList = $('#compare-list');
          compareList.empty(); 

          if (productsToCompare.length > 0) {
            productsToCompare.forEach(handle => {
                $.ajax({
                  url:  '/products/' + handle + '?section_id=compare-product',
                  type: 'GET',
                  dataType: 'html',
                  sections: 'compare-product',
                  success: function(response) {

                    // console.log(response,"response");
                    const compareValue = $(response).find('.compare-data').html();
                    $('.compare-data').append(compareValue);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      console.error('Error applying discount:', jqXHR, textStatus, errorThrown);
                  }
                });
            });
            $('.compare-data').show();
          } else {
            $('.compare-title').hide();
            $('.compare-data').hide();
            $('#clear-comparison').hide();
            $('.blankCompareData').text('No Any Compare Product Found').css('margin',"272px 0");
          }
      }
            
      // Remove Compare product 
      $('body').on('click', '.remove-compare-product', function(e) {
        e.preventDefault();
        const productIdToRemove = $(this).data('product-id');
        productsToCompare = productsToCompare.filter(p => p !== productIdToRemove);

        console.log(productIdToRemove,"productIdToRemove")
        console.log(productsToCompare,"productsToCompare")

        localStorage.setItem('CompareList', JSON.stringify(productsToCompare));
        removeComapareData();
      });

      // Clear all Compare products 
      $('#clear-comparison').on('click', function(e) {
        e.preventDefault();
        productsToCompare = [];
        localStorage.removeItem('CompareList',productsToCompare);
        updateCompareCount();
      });
      updateCompareCount(); 

      function removeComapareData() {
        $.ajax({
          url:  '/?section_id=compare-product' ,
          type: "GET",
          datatype: "HTML",
          success: function (responce) {
            console.log(responce,"responce")
            const clearComaparedata = $(responce).find(".compare-data").html();
            $(".compare-data").html(clearComaparedata);
            updateCompareCount();
          },
          error: function (error) {
            console.log(error);
          },  
        });
      }
    });
  }

// section render
  function getCartData(response){
    var cartDrawerHtml = response.sections['cart-drawer'];
    var mainCartHtml = response.sections['main-cart'];

    $('.section-render').html(mainCartHtml);

    const parser = new DOMParser();
    const doc = parser.parseFromString(cartDrawerHtml, "text/html");
    document.querySelector(".cartDrawer").innerHTML = doc.querySelector(".cartDrawer").innerHTML;

    cartProductRecommended();
  }

// cart-manual-discount
  function existingDiscounts() {
    const discountCodes = [];
    const discountPills = $('.cart-discount__pill');
    for (const pill of discountPills) {
        discountCodes.push($(pill).data('discount-code'));
    }
    return discountCodes;
  }


  $('body').on('click', '.apply-multiple-discounts', function(e) {
    e.preventDefault();
    const discountInput = $(this).closest('.discount-form').find('.multiple-discount-codes').val();
    console.log(discountInput);
  
    const existingDiscount = existingDiscounts();
    console.log(existingDiscount);

    // duplicate remove
    const uniqueArray = [...new Set(existingDiscount)];
    console.log(uniqueArray);

    if (uniqueArray.includes(discountInput)) return;

    if (discountInput) {
      $.ajax({
        type: 'POST',
        url: '/cart/update.js',
        data:  ({
          discount: [...uniqueArray, discountInput].join(','),
          sections: ['cart-drawer', 'main-cart'] 
        }),
        dataType: "json",
        success: function(response) {
          console.log(response,"response");
          getCartData(response); 

          $(response.discount_codes).each(function(code,value){
            if(value.applicable == false){
              $('.discount-message').text('Invalide Discount Code').css('color','red');
            }
          });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error applying discount:', jqXHR, textStatus, errorThrown);
        }
      });
    }
    else {
          $(this).closest('.discount-form').find('.discount-message').text('Please enter a discount code.').css('color', 'orange').show();
        }
  });


 $('body').on('click', '#remove-discount-button', function(event) {
  event.preventDefault();

    const pill = event.target.closest('.cart-discount__pill');
    // console.log(pill);
    
    const discountCode = $(pill).data('discount-code');
    // console.log(discountCode);

    const existingDiscount = existingDiscounts();
    // console.log(existingDiscount);

    // duplicate remove
    const uniqueArray = [...new Set(existingDiscount)];
    // console.log(uniqueArray);

     const index = uniqueArray.indexOf(discountCode);
    //  console.log(index);
     if (index === -1) return;

    uniqueArray.splice(index, 1);
    // console.log(uniqueArray);

    $.ajax({
        type: 'POST',
        url: '/cart/update.js',
        data :({
            discount: uniqueArray.join(','),
            sections: ['cart-drawer', 'main-cart'] 
        }),
        dataType: "json",
        success: function(response) {
            console.log('Discount removed:', response);
            getCartData(response);           
        },
        error: function(xhr, status, error) {
            console.error('Error removing discount:', error);
        }
    });
  })


// zoom on hover
$(document).ready(function () {
  $('body').on('click', '.image-selector', function(){
    $('.image-selector').lightzoom({
      zoomPower   : 2,    
      glassSize   : 100,  
    });
  });
    
  // lightbox
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  // Fancybox
  Fancybox.bind("[data-fancybox]", { });
});

 // loader
  $(window).on('load', function() {
    $('#preloader').fadeOut('slow');
  });

  function showCartLoader() {
    $('#cart-drawer-loader').fadeIn();
  }

  function hideCartLoader() {
    $('#cart-drawer-loader').fadeOut();
  }


  // loacalize
  $(document).ready(function() {
    $('#country_code').on('change', function() {
      $(this).closest('form').submit();
    });

    $('#language-selector').on('change', function() {
      $(this).closest('form').submit();
    });
  });


//  Customer Address
$('.changeaddress').click(function (e) {
    e.preventDefault();
    if($(this).hasClass('active')) {
      $('.editformClass').slideUp();
      $('.changeaddress').removeClass('active');
    } else {
      $('.changeaddress').removeClass('active');
      $(this).addClass('active');
      var x = $(this).closest('.editbuttonClass').data('id');
      
      $('.editformClass').slideUp();
      $('.editformClass.'+x).slideDown(function(){
        $('html, body').animate({
          scrollTop: $("."+x).offset().top
        }, 1000);
      });
    }
  });
  $('.cancel_form').click(function(){
    $('.editformClass').fadeOut('slow');
  });

 // download Invoice
$('.csv-file-download').on('click', function(e) {
  e.preventDefault();

  let csvContent = "Id,Date,Product Detail,Payment Status,Fulfillment Status,Total\r\n";

  const id = $(this).data('order-id');
  const date = $(this).data('order-date');
  const pdetail = $(this).data('order-product-details');
  const paymentStatus = $(this).data('order-payment-status');
  const fulfillmentStatus = $(this).data('order-fulfillment-status');
  const price = $(this).data('order-total');
  const final_price = price / 100;

  csvContent += [id, date, pdetail, paymentStatus, fulfillmentStatus, final_price].join(',') + "\r\n";

  const encodedUri = encodeURIComponent( csvContent);
  console.log(encodedUri);

  const link = $('<a>', {
    href: 'data:text/csv;charset=utf-8,' + encodedUri,
    download: 'customer_invoice.csv'
  },'</a>');

  $('body').append(link);
});

// Shipping protection
//   $('body').on('change', '.shipping-protection-checkbox', function(e) {
//     e.preventDefault();
//     $(this).is(':checked');
//     // if ($(this).is(':checked')) {
//       $.ajax({
//         url: "/cart",
//         type: "GET",
//         dataType: 'json',
//         success: function(response){
//           const shipId = $('body').data('shipping-protection-id');
//           const hasShipData = response.items.some(item => item.variant_id == shipId);
//           const ItemCount = response.item_count;

//           if(!hasShipData){
//             AddShippingProtection(shipId);
//           }
//           else if(hasShipData){
//             UpdateShippingProtection(shipId);
//           }
//         }
//       })
//     // }
//   });

// function shippingProtection(hasShipData, ItemCount) {
//   const shipId = $('body').data('shipping-protection-id');
//   console.log("shipId",shipId);
//   console.log("hasShipData2",hasShipData);
  
//   var anableBox = $('.shipping-protection-checkbox');
//   if(ItemCount == 1){
//     anableBox = true;
//   }
//   else{
//     anableBox = false;
//   }
//   console.log("anableBox",anableBox);

//     if (!shipId) return;
//     if(!hasShipData && anableBox ){
//       AddShippingProtection(shipId);
//     }
//     else if(ItemCount <= 1 && hasShipData){
//       UpdateShippingProtection(shipId);
//     }
// }

// function AddShippingProtection(shipId){
//   $.ajax({
//     type: 'POST',
//     url: '/cart/add.js', 
//     data: {
//       id: shipId, 
//       quantity: 1,
//       sections: ['cart-drawer', 'main-cart'] 
//     },
//     dataType: 'json',
//     success: function(response) {
//       console.log(response,"add response");
//       getCartData(response);
//     },
//     error: function(err){
//       console.log(err);
//     }
//   }); 
// }

// function UpdateShippingProtection(shipId){
//   $.ajax({
//     type: "POST",
//     url: "/cart/update.js",
//     data: {
//       updates: {
//         [shipId]: 0 
//       },
//       sections: ['cart-drawer', 'main-cart'] 
//     },
//     dataType: "json",
//     success: function (response) {
//       getCartData(response);
//     },
//     error: function(error){
//       console.error('Error removing free product:', error);
//     }
//   });
// }

// Cart Reserve Timer
let cartTimerInterval = null;
function CartReserveTimer(reset = false) {
  const timerWrapper = $('.cart-reserved-timer');
  console.log(timerWrapper,"timerWrapper");
  if (!timerWrapper) return;

  const minutes = parseInt(timerWrapper.data('minutes'));
  console.log(minutes,"minutes")

  let endTime = localStorage.getItem('cart_reserved_end');

  if (reset || !endTime) {
    endTime = Date.now() + minutes * 60 * 1000;
    localStorage.setItem('cart_reserved_end', endTime);
  }

  if (cartTimerInterval) clearInterval(cartTimerInterval);

  cartTimerInterval = setInterval(() => {
    const now = Date.now();
    const distance = endTime - now;

    const mini = Math.floor(distance / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(sec,"sec")
    $('.cart-timer-countdown').html( mini + "m " + sec + "s")

    if (distance <= 0) {
      clearInterval(cartTimerInterval);
      localStorage.removeItem('cart_reserved_end');
      $('.cart-timer-countdown').html("Emptying cart");

      $.ajax({
        type: "post",
        url: '/cart/clear.js',
        data: {
          'sections': ['cart-drawer', 'main-cart'] 
        },
        dataType: "json",
        success: function(response) {
          console.log('Cart emptied');
          localStorage.removeItem('cartStartTime');
          cartCount();
          getCartData(response);
        },
        error: function(err){
          console.log(err);
        }
      });
    }
  }, 1000);
}

if (localStorage.getItem("cart_reserved_end")) {
  CartReserveTimer(false);
}


// cart product flying
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".fly-btn");
  if (!btn) return;

  const wrapper =
    btn.closest(".product-card") ||
    btn.closest(".main-product");

  if (!wrapper) return;

  const source = wrapper.querySelector(".fly-source");
  const cart = document.querySelector(".fly-cart");

  if (!source || !cart) return;

  const sourceRect = source.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  // safety check
  if (!sourceRect.width || !sourceRect.height) return;

  const clone = source.cloneNode(true);
  clone.classList.add("fly-clone");

  clone.style.top = sourceRect.top + "px";
  clone.style.left = sourceRect.left + "px";
  clone.style.width = sourceRect.width + "px";
  clone.style.height = sourceRect.height + "px";
  clone.style.opacity = "1";

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.top = cartRect.top + "px";
    clone.style.left = cartRect.left + "px";
    clone.style.width = "20px";
    clone.style.height = "20px";
    clone.style.opacity = "0.5";
  });

  setTimeout(() => clone.remove(), 800);
});




// Locked Bundel Gift
  $(document).ready(function () {
    function updateGifts(index) {
      const gifts = $('.gift-item');
      gifts.addClass('locked');

      if (index == 1) {
        gifts.slice(0, 2).removeClass('locked');
      } 
      else if (index == 2) {
        gifts.slice(0, 4).removeClass('locked');
      }
    }

    $('input[name="variant_id"]').on('change', function () {
      const index = $('input[name="variant_id"]').index(this);
      updateGifts(index);
    });

    const checkedIndex = $('input[name="variant_id"]:checked').index();
    updateGifts(checkedIndex);
  });


  function getGiftVariantIds() {
    let ids = [];
    $('.gift-item').each(function () {
      const id = $(this).data('gift-id');
      console.log(id,"id")
      ids.push(id);
    });
    return ids;
  }

  $('body').on('click', '.bundel-gift-add-to-cart-btn', function (e) {
    e.preventDefault();
    const mainVariantId = $('input[name="variant_id"]:checked').val();
    const giftIds = getGiftVariantIds();
    const uniqueId = Math.floor(Math.random() * 1000000000);
    let qty = parseInt($('input[name="quantity"]').val()) || 1;
    let itemsToAdd = {
      items: [
        {
          id: mainVariantId,
          quantity: qty,
          properties: { _group: uniqueId }
        }
      ]
    };

    $('.gift-item').each(function (index) {
      if (!$(this).hasClass('locked')) {
        itemsToAdd.items.push({
          id: giftIds[index],    
          quantity: qty,
          properties: {
            _group: uniqueId,
            parent_id: mainVariantId    
          }
        });
      }
    });

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...itemsToAdd,
        sections: ['cart-drawer', 'main-cart']
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Cart updated', data);
      getCartData(data);
    });
  });


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


  // Product card color variants
  $(document).on("change", ".color-swatch-input", function () {
    var variantId = $(this).data("variant-id");
    var newImage = $(this).data("variant-image");
    var newPrice = $(this).data("variant-price");
    var newComparePrice = $(this).data("variant-compare-price");
    var productUrl = $(this).closest(".color-swatch-wrapper").data("product-url");
    var allCards = $('.best-sell-item[data-product-url="' + productUrl + '"]');

    allCards.each(function () {
      var card = $(this);
      if (newImage) {
        card.find(".fly-img").attr({
          src: newImage,
          srcset: newImage
        });
      }

      if (newPrice) {
        card.find(".price").text(newPrice);
      }

      if (newComparePrice) {
        card.find(".compare-price").text(newComparePrice);
      }

      if (variantId) {
        card.find("a.product-image, .recently-view-data")
          .attr("href", productUrl + "?variant=" + variantId);
      }
    });
  });

  $(document).ready(function () {
    function applyActiveSwatch() {
      $(".color-swatch-item").removeClass("active");
      $(".color-swatch-input:checked").each(function () {
        var id = $(this).attr("id");
        $('label[for="' + id + '"]').addClass("active");
      });
    }

    applyActiveSwatch();
    $(document).on("change", ".color-swatch-input", function () {
      applyActiveSwatch();
    });
  });



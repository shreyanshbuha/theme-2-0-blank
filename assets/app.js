// product variants
  class VariantPicker extends HTMLElement {
    constructor() {
      super();
      this.inputs = this.querySelectorAll(".variant-data");
      this.inputs.forEach((element) => {
        //console.log('element',element);
        element.addEventListener("change", this.onInputChange.bind(this),);
      });
    }

    onInputChange(event) {

        let input = event.target;
        // console.log('input',input);
        const id = input.dataset.variantValue;
        // console.log("id",id);

        const optionValueSelectors = input.closest(".main-product-section") || input.closest('.product-content');
        const sectionId = "product-variant-picker";

        const selectedOptionValues = Array.from(
          optionValueSelectors.querySelectorAll('.variant-option input[type="radio"]:checked')
        ).map(({ dataset }) => dataset.optionValueId);

        const params =
          selectedOptionValues.length > 0
            ? `&option_values=${selectedOptionValues.join(",")}`
            : "";

            const producturl = input.dataset.productUrl;
            // console.log(producturl);
            
            let url;
            if(producturl){
              url = `${producturl}?section_id=${sectionId}${params}`
              // console.log("url", url);
            }
            else{
              url = `${window.location.href}?section_id=${sectionId}${params}`;
              // console.log("value",value);
            }
        

          fetch(url)
          .then((response) => response.text())
          .then((responseText) => {
            // console.log(responseText);
            // const slideno = $(responseText).find('.imageloop').data('slick-index');
            // console.log(slideno);
            // $('.product-media').slick('slickGoTo', slideno - 1);

            const variant_data = $(responseText).find('.product-content').html();
            $('.product-content').html(variant_data);
            
            const variantImg = $(responseText).find('.product-media').html();
            $('.product-media').html(variantImg);
            mobileslider();  
            compareProduct();
            
            // const html = new DOMParser().parseFromString(responseText, "text/html");
            // optionValueSelectors.innerHTML = html.querySelector(".main-product-section").innerHTML;
            window.history.pushState( "",  "", `${window.location.pathname}?variant=${id}` );
            
        });
    }
  }
  customElements.define("variant-picker", VariantPicker);


// gift card
  document.addEventListener('DOMContentLoaded', () => {
    const fieldsContainer = document.getElementById('gift-card-fields');
    const dateInput = document.getElementById('gift-card-send-date');
    const dateError = document.getElementById('gift-card-date-error');

    if(fieldsContainer){
      $('body').on('change', '.gift-card-send-checkbox', function() {
        console.log("gift card");
        if (this.checked) {
          document.getElementById('gift-card-fields').classList.remove('gift-card-hidden');
        }
        else{
          document.getElementById('gift-card-fields').classList.add('gift-card-hidden');
        }
      });

      let isValid = true;
      if (dateInput.value) {
          const today = new Date();
          const selectedDate = new Date(dateInput.value);
          if (selectedDate < today) {
              dateError.textContent = 'The selected date cannot be in the past.';
              isValid = false;
          }
          else {
              const maxDate = new Date(today);
              maxDate.setDate(maxDate.getDate() + 90); 
              if (selectedDate > maxDate) {
                dateError.textContent = 'The selected date cannot be more than 90 days in the future.';
                isValid = false;
          }
        }
      }
    }
  });
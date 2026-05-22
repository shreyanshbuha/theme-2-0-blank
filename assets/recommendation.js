
  const productRecommendationsSection = document.querySelector('.product-recommendations');
    const recommendurl = productRecommendationsSection.getAttribute('data-url');
  fetch(recommendurl)
   .then(response => response.text())
   .then((text) => {
      const html = document.createElement('div');
      html.innerHTML = text;
      const recommendations = html.querySelector('.product-recommendations');

      if (recommendations && recommendations.innerHTML.trim().length) {
        productRecommendationsSection.innerHTML = recommendations.innerHTML;
      }
      deskslider();
   });

  
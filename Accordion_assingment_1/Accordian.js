
      document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
          const accordionItem = this.parentElement;
          const accordionContent = this.nextElementSibling;
          const accordionIcon = this.querySelector('.accordion-icon');

          accordionItem.classList.toggle('active');

          if (accordionItem.classList.contains('active')) {
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
            accordionIcon.textContent = '−';
          } else {
            accordionContent.style.height = 0;
            accordionIcon.textContent = '+';
          }

          document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
              item.classList.remove('active');
              item.querySelector('.accordion-content').style.height = 0;
              item.querySelector('.accordion-icon').textContent = '+';
            }
          });
        });
      });

      window.addEventListener('load', function () {
        document.querySelectorAll('.accordion-content').forEach(content => {
          content.style.height = 0;
        });
      });

   
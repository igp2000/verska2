import '../scss/header.scss';
import '../scss/main.scss';
import '../scss/menu.scss';
import '../scss/brands.scss';
import '../scss/service.scss';
import '../scss/predlozh.scss';
import '../scss/footer.scss';
import '../scss/modal_right.scss';


function init() {

   // удаляем стилевой класс у элемента
   let class_remove = function (sel, stl) {
      let el = document.querySelector(sel);
      if (el.classList.contains(stl)) {
         el.classList.remove(stl);
      }
   }

   // удаляем элемент из родителя
   let element_remove = function (parent, sel) {
      let prnt = document.querySelector(parent);
      let child = prnt.querySelector(sel);
      if (child) {
         child.remove();
      }
   }

   // устанвливаем слушатели на кнопки в модальном окне
   let add_button_listener = function (modal) {
      let buttons = modal.querySelectorAll("button");
      buttons.forEach(function (btn, i) {
         set_listener(btn);
      });
   }

   let show_modal_left = function () {

      let modal = document.querySelector('#div-modal');

      if (!modal.classList.contains('div-modal--block')) {
         modal.classList.add('div-modal--block');
      }

      let left_menu = document.querySelector('.left-menu');
      left_menu = left_menu.cloneNode(true);
      modal.append(left_menu);

      add_button_listener(modal);
   }

   let show_modal_right = function (tmp_cont) {

      // находим контейнер для модального окна
      let modal = document.querySelector('#div-modal');
      
      // если окно открыто - закрываем
      if (modal.classList.contains('div-modal--block')) {
         let div_blur = modal.querySelector(".div-blur");
         div_blur.click();
      }

      // достаем модальное окно
      let tmp_parent = document.querySelector('#tmp-modal-right');
      let clone_parent = tmp_parent.content.cloneNode(true);
      // находим родительский элемент
      let modal_right = clone_parent.querySelector('.modal-right');

      // достаем контент для модального окна
      let tmp_content = document.querySelector(tmp_cont);
      let clone_content = tmp_content.content.cloneNode(true);
      // вставляем контент в модальное окно
      modal_right.append(clone_content);

      // добавляем контент в модальное окно на странице
      modal.append(modal_right);

      if (!modal.classList.contains('div-modal--block')) {
      modal.classList.add('div-modal--block');
      }

      add_button_listener(modal);
   }

   let set_listener = function (element) {
      element.addEventListener('click', function (event) {

         if (event.currentTarget.dataset.action === 'burger') {
            show_modal_left();
         } else
            if (event.currentTarget.dataset.action === 'call') {
               show_modal_right('#tmp-form-call');
            } else
               if (event.currentTarget.dataset.action === 'chat') {
                  show_modal_right('#tmp-form-chat');
               } else
                  if (event.currentTarget.dataset.action === 'back') {
                     element_remove('#div-modal', '.left-menu');
                     element_remove('#div-modal', '.modal-right');
                     class_remove('#div-modal', 'div-modal--block');
                  } else
                     if (event.currentTarget.dataset.action === 'show-more') {
                        show_all_click(event);
                     } else
                        if (event.currentTarget.dataset.action === 'send-form') {
                           event.preventDefault();
                        }

      });
   }

   let buttons = document.querySelectorAll("button");
   buttons.forEach(function (btn, i) {
      set_listener(btn);
   });

   let div_blur = document.querySelector(".div-blur");
   if (div_blur) {
      div_blur.addEventListener('click', function (e) {
         element_remove('#div-modal', '.left-menu');
         element_remove('#div-modal', '.modal-right');
         class_remove('#div-modal', 'div-modal--block');
      });
   }


   new Swiper('#swiper-container', {

      enabled: true,
      spaceBetween: 1,
      slidesPerView: 'auto',
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      breakpoints: {
         768: {
            enabled: false,
         },
      },
   });

   new Swiper('.swiper-container-vid', {

      enabled: true,
      spaceBetween: 1,
      slidesPerView: 'auto',
      pagination: {
         el: '.swiper-pagination-vid',
         clickable: true,
      },
      breakpoints: {
         768: {
            enabled: false,
         },
      },
   });


   new Swiper('.swiper-container-service', {

      enabled: true,
      spaceBetween: 1,
      slidesPerView: 'auto',
      pagination: {
         el: '.swiper-pagination-service',
         clickable: true,
      },
      breakpoints: {
         768: {
            enabled: false,
         },
      },
   });

}

function show_all_click(event) {

   let cont = "swiper-container";
   let fl_all = true;

   if (event.currentTarget.id === "btn-show-more") {
      cont = "text__txt";
      fl_all = false;
   } else
      if (event.currentTarget.id === "btn-show-all-vid") {
         cont += "-vid";
      }

   let box = document.querySelector("." + cont);

   if (box) {
      box.classList.toggle(cont + "--height");

      let btn = document.querySelector("#" + event.currentTarget.id);
      let btn_img = btn.querySelector("img");
      let btn_text = btn.querySelector("span");

      if (box.classList.contains(cont + "--height")) {

         if (btn_text) {
            btn_text.textContent = "Скрыть";
         }
         if (btn_img) {
            btn_img.src = "./img/str_up.png";
         }

         if (fl_all && btn) {
            btn.classList.add("button-read--pos");
            btn.title = "Скрыть";
         }

      } else {

         if (btn_text) {
            if (fl_all) {
               btn_text.textContent = "Показать все";
            } else {
               btn_text.textContent = "Читать далее";
            }

         }
         if (btn_img) {
            btn_img.src = "./img/str.png";
         }

         if (fl_all && btn) {
            btn.classList.remove("button-read--pos");
            btn.title = "Читать далее";
         }
      }
   }

   //event.stopPropagation();
   event.preventDefault();
}

//window.onload = init;
window.addEventListener('DOMContentLoaded', init, false);
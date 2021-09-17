'use strict';

try {
  angular.module('cartAppTranslations');
} catch (e) {
  angular.module('cartAppTranslations', ['pascalprecht.translate']);
}

angular.module('cartAppTranslations').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'cartWidget': {
        'sr': {
          'PRODUCT_PRICE_BEFORE_DISCOUNT': 'Обычная цена',
          'PRODUCT_WAS_REMOVED': 'Товар «{{ productName }}» удален из корзины',
          'PRODUCT_PRICE_WHEN_THERE_IS_NO_DISCOUNT': 'Цена',
          'PRODUCT_PRICE_AFTER_DISCOUNT': 'Цена со скидкой'
        }
      },
      'CART_WIDGET_EMPTY_CART_MESSAGE': 'Корзина пуста',
      'CART_WIDGET_CURRENCY_CONVERTER_DISCLAIMER': 'Обрабатывается в {{mainCurrency}}',
      'CART_WIDGET_VIEW_CART_BUTTON': 'Смотреть корзину',
      'CART_WIDGET_CLOSE_CTA': 'Закрыть',
      'OUT_OF_STOCK_TITLE': 'Нет в наличии',
      'CART_TABLE_TOTAL_TITLE': 'ИТОГО',
      'CART_WIDGET_CLOSE_BUTTON_TITLE': 'Закрыть корзину',
      'SUBTOTAL_TITLE': 'Сумма',
      'CART_WIDGET_QUANTITY_TITLE': 'КОЛИЧЕСТВО: ',
      'REMOVE_PRODUCT_BUTTON_TITLE': 'Удалить из корзины',
      'SKU_TITLE': 'Артикул: {{ sku }}',
      'CART_WIDGET_CART_TITLE': 'Корзина'
    };
    $translateProvider.translations('ru', translations);
    $translateProvider.translations(translations);
    $translateProvider.preferredLanguage('ru');
  }
]);
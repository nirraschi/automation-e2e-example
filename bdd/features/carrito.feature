Feature: Carrito de compras

  Scenario: Agregar un producto al carrito y verificar el contenido
    Given el usuario está logueado en la aplicación
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then debería ver el producto "Sauce Labs Backpack" en el carrito

  Scenario: Eliminar un producto del carrito
    Given el usuario tiene el producto "Sauce Labs Backpack" en el carrito
    When elimina el producto "Sauce Labs Backpack"
    Then el carrito debería estar vacío

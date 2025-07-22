Feature: Checkout
  Scenario: Checkout exitoso
    Given el usuario logueado tiene el producto "Sauce Labs Backpack" en el carrito
    When el usuario hace el checkout con First Name "Nombre Prueba", Last Name "Apellido Prueba" y Zip Code "12345"
    Then el producto no se debería encontrar en el carrito
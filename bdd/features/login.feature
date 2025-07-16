Feature: Login en SauceDemo

  @login @positive
  Scenario: Login exitoso con usuario válido
    Given el usuario navega a la página de login
    When ingresa el usuario "standard_user" y la contraseña "secret_sauce"
    Then debería ver la página de productos

  @login @negative
  Scenario: Login fallido con contraseña incorrecta
    Given el usuario navega a la página de login
    When ingresa el usuario "standard_user" y la contraseña "wrong_password"
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"

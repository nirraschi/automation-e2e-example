Proyecto de Automatización E2E con Playwright y BDD
Objetivo del repositorio
Este repositorio demuestra mis habilidades como QA Automation Engineer probando aplicaciones web con dos enfoques distintos:

1️⃣ Playwright puro (playwright-test/)
Tests rápidos, técnicos y orientados a CI/CD.

Uso de @playwright/test.

Casos como login, carrito de compras, etc.

2️⃣ BDD con Cucumber (bdd/)
Casos de prueba legibles para el equipo funcional.

Escenarios escritos en Gherkin.

Implementación en steps/ y estructura con Page Object Model en pages/.

⚙️ Instalación
npm install
npx playwright install

🚀 ¿Cómo correr los tests?
🔹 Playwright puro
npx playwright test

Corre los archivos .spec.ts o .spec.js de la carpeta playwright-test/
Pensado para regresiones técnicas y pipelines CI/CD

🔹 BDD con Cucumber + Playwright
npm run bdd

Corre los archivos .feature en la carpeta bdd/features/
Los pasos (Given/When/Then) están mapeados en bdd/steps/

La lógica está separada en bdd/pages/ siguiendo el patrón Page Object Model


🧰 Tecnologías usadas
Playwright @playwright/test
Cucumber + Gherkin (@cucumber/cucumber)
TypeScript
Page Object Model (POM)

🧑‍💻 ¿Por qué esta estructura?
Quise mostrar dos formas de trabajar:

Flujo técnico	Flujo funcional
Playwright puro: Ideal para pipelines rápidos y validaciones técnicas.	
BDD con Cucumber: Ideal para equipos donde QA funcional y negocio necesitan entender los casos.



🙋‍♀️ Contacto
Si querés saber más sobre mi trabajo, conectemos en LinkedIn. https://www.linkedin.com/in/nirvanaraschi/
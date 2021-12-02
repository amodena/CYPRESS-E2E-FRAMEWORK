# CYPRESS-E2E-FRAMEWORK

El codigo utilizado para la ejercitacion se encuentra en:
  *cypress/pages/amazonPrimeVideo.js
  *cypress/integration/amazon_prime_video.spec.js
  
Se utilizó la web de Amazon Prime Video en lugar de Netflix por problemas con los XHR en ésta última.
Se intentó respetar lo mayor posible las consignas, los cambios mas significativos en comparación con lo pedido fueron los siguientes:

* loginToNetflixErrorTest
      -No se utilizaron métodos
      -El botón de 'Recuerdame' ya se encuentra deshabilitado por defecto, por lo que se tildó y luego destildó.
      -El mensaje a validad fue 'Habilita las cookies para continuar', en lugar de 'Contraseña incorrecta'.
      -Podría estar mucho mas optimizado y ordenado en pocos test(it), se desarrolló así pensando en que sea vean mejor en el test runner en caso de enviar un demo en video.
      
* fakeEmailTest
      -No hay ningun cuadro de texto en la landing page, por lo que se reemplazó la consigna por un intento de creación de cuenta (createAccountError).
      -Se utilizó Page object model.
      
* findTag
      -Busca elementos que tengan el tag, pero en caso de no encontrar ninguno no aparece el mensaje correspondiente.
      
      

Aclaracion:
El test runner de cypress se ejecuta maximizado, por lo cual no fue necesario configurarlo.

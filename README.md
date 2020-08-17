# Journal App

_Aplicación tipo agenda, que permite hacer ingresos tipo notas._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋
_Crear una cuenta gratuita en: https://cloudinary.com,  ya que la ocuparemos para guardar nuestras imágenes._<br>
_Crear una App Web en Firebase y habilitar la autenticación por Correo Electrónico y Google._ <br>
_Crear Base de Datos con la opción Empezar en Modo de Producción y modificamos la regla de Database por la que les dejo a continuación:_
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
_También debes instalar Globalmente Firebase como Administrador, en mi caso seria de la siguiente forma:_
```
sudo npm install -g firebase-tools
```
_Para más información sobre como agregar firebase a sus proyectos, les dejo el siguiente enlace_: https://firebase.google.com/docs/web/setup?hl=es

_Debes contar con node y npm.
Para verificar su instalación puedes teclear el siguiente comando en tu consola:_

```
node -v
npm -v
```

### Instalación 🔧

_Debes clonar el repositorio._

```
git clone https://github.com/JoseGutierrezRiffo/Journal-App-React.git
```

## Ejecutando la Aplicación. ⚙️

_Antes que nada, para poder ejecutar la aplicación, debes estar situado en la raíz del proyecto clonado, luego realizar la instalación de todas las dependencias asociadas al proyecto con el siguiente comando:_
```
npm install
```

_¡IMPORTANTE! Antes de comenzar, debes crear el archivo .env con la estructura que muestra el archivo de ejemplo ".env.example"_
```
REACT_APP_FIREBASE_APIKEY=
REACT_APP_FIREBASE_AUTHDOMAIN=
REACT_APP_FIREBASE_DATABASEURL=
REACT_APP_FIREBASE_PROJECTID=
REACT_APP_FIREBASE_STOREGEBUCKET=
REACT_APP_FIREBASE_MESSAGINGSENDERID=
REACT_APP_FIREBASE_APPID=

REACT_APP_CLOUDINARY=
```
_Ya teniendo la estructura, solo falta que completes los campos con los datos que te proporciona firebase, además de proporcionar la API Base URL de Cloudinary_
```
REACT_APP_FIREBASE_APIKEY=api-key
REACT_APP_FIREBASE_AUTHDOMAIN=project-id.firebaseapp.com
REACT_APP_FIREBASE_DATABASEURL=https://project-id.firebaseio.com
REACT_APP_FIREBASE_PROJECTID=project-id
REACT_APP_FIREBASE_STOREGEBUCKET=project-id.appspot.com
REACT_APP_FIREBASE_MESSAGINGSENDERID=sender-id
REACT_APP_FIREBASE_APPID=app-id

REACT_APP_CLOUDINARY=api-base-url
```
_Una vez que tengas lista la nueva aplicación en firebase, ya estamos listo para iniciar la aplicación, ejecuta el siguiente comando:_
```
npm start
```

_Esto tomara un par de segundos en compilar la aplicación, al finalizar la compilación ese debera abrir una nueva pestaña en tu navegador, de lo contrario puedes en la consola el siguiente link:_
```
http://localhost:3000
```


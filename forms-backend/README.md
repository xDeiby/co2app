# Setup

#### Paquetes
- instalación de paquetes, desde la raíz del proyecto
``
    yarn 
``
``
    npm install 
``

#### Variables de entorno
- Crear un archivo ***.env*** con las variable que se encuentran en ***.env.example***
- Si se tiene instalado mongodb, la ***url*** de conección tiene la forma ***mongodb://127.0.0.1:27017/<nombre_db>***
- Definir el puerto ***PORT***, se recomienda 3001, ya que el frontend ya tiene hardcodeado el puerto 3001, de lo contrario, cambiar en ambos lados
- Definir la llave secreta para los tokens generados ***JWT_SECRET***

#### Supuestos

Se crea una aplicación con autenticación de usuarios, donde cada usuario colaborador puede ver y registrar sus viajes. Por otro lado, la directora/or es quien puede ver todos los viajes realizados por los trabajadores y la información de co2 del viaje y por persona.


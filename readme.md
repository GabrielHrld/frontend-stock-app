# Origin Software - Stocks App

Prueba de desarrollo para Origin Software. Desarrollada por Gabriel Federico Rodriguez.

## Autores

- [@HeraldHRLD](https://github.com/HeraldHRLD)

## Pre requisitos

Para que esta aplicación funcione debemos tener instalado

- Git
- Node
- Docker

### Instalación de Git :

```bash

  1- Dirigirse al siguiente link y descargar la versión correspondiente al Sistema Operativo.
  https://git-scm.com/download/

  2- Seguir los pasos de instalación oficiales.

```

### Instalación de Node :

#### Windows:

```bash

  Para instalar node v14.16.1 en Windows es necesario instalar un administrador de paquetes
  el que utilizaremos hoy es Chocolatey.


  1- Instalar Chocolatey abriendo la terminar en modo administrador y corriendo el siguiente
  comando.

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol =
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient)
.DownloadString('https://chocolatey.org/install.ps1')

  2- Una vez instalado correremos el comando "choco -v" en la terminal para corroborar que se
  instaló correctamente. Deberíamos ver algo así.
```

![img1](https://i.imgur.com/sOZEryf.png)

```bash
 3- Instalamos Node con el siguiente comando

 choco install nodejs.install --version=14.16.1

 4- Terminado el proceso de instalación procedemos a correr los siguientes comandos.

 node -v

 npm -v

 Deberíamos ver algo así (las versiones mostradas no son acordes a las instaladas
 en este proceso).
```

![img5](https://i.imgur.com/UVE3mIo.png)

```bash
Felicidades, ya tenemos instalado Node y NPM en Windows.
```

#### Linux

```bash
  correr los siguientes comandos (Distribuciones Ubuntu/Debian)

  1- sudo apt update

  2- curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -

  3- sudo apt -y install nodejs

  Felicidades, ya tenemos instalado Node y NPM en Linux. Deberíamos ver algo así.
  (Nuevamente las versiones no son acordes, imagen ilustrativa)
```

![img6](https://i.imgur.com/UVE3mIo.png)

### Instalación de Docker

#### Windows

```bash
  1- Dirigirse hacia el siguiente link y descargar el instalador. Ejecutarlo e
  instalar con la configuración establecida por default.

  https://docs.docker.com/docker-for-windows/install/
```

#### Linux

```

  1- sudo apt-get remove docker docker-engine docker.io containerd runc

  2- sudo apt install apt-transport-https ca-certificates curl software-properties-common

  3- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

  4- sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

  5- sudo apt update

  6- apt-get policy docker-ce

  7- sudo apt install docker-ce

  8- sudo systemctl status docker

  Al correr el siguiente comando podremos ver algo parecido a esto y corroborar que Docker está
  corriendo

  ● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2021-07-01 06:27:28 UTC; 1min 22s ago


  Felicidades, ya tenemos Docker instalado.
```

## Preparar el entorno

```
  1- Para iniciar la aplicación debemos clonar el repositorio	de este link https://github.com/HeraldHRLD/server-stock-app
    en una carpeta.

  2- Clonar este repositorio en una carpeta ajena a la anterior clonada.

  3- Una vez clonado, correr los siguientes comandos

  docker run -d -p 33060:3306 --name mysql-local -e MYSQL_ROOT_PASSWORD=admin mysql:8.0.15

  docker exec -it mysql-local mysql -p

  **Nos va a solicitar una contraseña**
  es la siguiente:

  admin
```

**COPIAR LOS SIGUIENTES COMANDOS SQL**

```
  CREATE database test;

  USE test;

  CREATE TABLE `test`.`users` (
    `id` VARCHAR(25) NOT NULL,
    `username` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `lastname` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);


  CREATE TABLE `test`.`auth` (
    `id` VARCHAR(25) NOT NULL,
    `username` VARCHAR(45) NOT NULL,
    `password` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`));

  CREATE TABLE `test`.`users_stocks` (
    `id` VARCHAR(25) NOT NULL,
    `symbol` VARCHAR(10) NOT NULL,
    `name` VARCHAR(80) NOT NULL,
    `currency` VARCHAR(4) NOT NULL,
    `user` VARCHAR(25) NOT NULL,
    PRIMARY KEY (`id`));

  ----------------------------------------
  Una vez copiemos y peguemos esos comandos en la consola, ejecutar el comando

  exit

  para salir de la consola MYSQL.

  4- Dirigirse hacia la carpeta donde hayamos clonado el reposito del servidor.

  5- Crear un archivo ".env" basándonos en el archivo ".env.example" y rellenar.

  Debemos tener un resultado así
```

![img8](https://i.imgur.com/9bDs5Dc.png)

```

 6- Correr los siguientes comandos.

  npm install

  npm run dev

  Nuestra aplicación correrá en el puerto 3000


 7- Dirigirse a la carpeta en la que hayamos clonado este repositorio.

 8- Crear un archivo ".env" basándonos en el archivo ".env.example" y rellenar.

 Debemos tener un resultado así
```

![img9](https://i.imgur.com/gmI6vfj.png)

# Iniciar la aplicación

```bash
Correr el siguiente comando en la carpeta principal donde hayamos clonado este repositorio.

- npm run start
```

# Felicidades, la aplicación ya está corriendo 😁!

## Notas

- La api de Twelve Data en ocasiones puede ser un poco lenta.

## Imágenes

![img1](https://i.imgur.com/ooQiaPE.png)

![img2](https://i.imgur.com/bVKS9a7.png)

![img3](https://i.imgur.com/kgQplHl.png)


## About the project: / Sobre o projeto:

The following project was developed to attend the requirements of this [Briefing/(Prototype and Requirements)](https://github.com/longvision/React-Native-Mobile-Startup-Test/blob/master/Lodjinha/ChallengeREADME.md). The app was developed using React-Native, Redux, as well as other tools.

O projeto a seguir foi desenvolvido visando atender os requisitos deste [Briefing/(Protótipo e requisitos)](https://github.com/longvision/React-Native-Mobile-Startup-Test/blob/master/Lodjinha/ChallengeREADME.md). O app foi desenvolvido utilizando-se React-Native e Redux, entre outras ferramentas.
<!-- GETTING STARTED -->

## Screens / Telas:

- [Home Screen / Tela da Home](https://longvision.s3.amazonaws.com/loj5.png)
- <img src="https://longvision.s3.amazonaws.com/loj5.png">
- [Product Detail / Detalhes dos Produtos](https://longvision.s3.amazonaws.com/loj4.png)
- <img src="https://longvision.s3.amazonaws.com/loj4.png">
- [Featured Products / Produtos Promovidos](https://longvision.s3.amazonaws.com/loj6.png)
- <img src="https://longvision.s3.amazonaws.com/loj6.png">
- [Side Drawer Menu / Menu Lateral](https://longvision.s3.amazonaws.com/loj2.png)
- <img src="https://longvision.s3.amazonaws.com/loj2.png">
- [Product Added / Produto Adicionado](https://longvision.s3.amazonaws.com/loj3.png)
- <img src="https://longvision.s3.amazonaws.com/loj3.png">
- [Developer / Desenvolvedor](https://longvision.s3.amazonaws.com/loj1.png)
- <img src="https://longvision.s3.amazonaws.com/loj1.png">


# Installing the app / Instalando o app

To use the app you should make a local copy of the files and follow the below steps.
Para conseguir utilizar o aplicativo faça uma cópia local dos arquivos e siga os passos abaixo.

### Environment requirements / Requisitos de ambiente

Before proceeding to the configurations and use the project, it is advised to configure the environment to create and test react-native apps, therefore you can follow the link below (only temporarily available in portuguese): 


Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)


### Installing / Instalando
#### Basically to run the software there are 4 steps:
Install `node_modules`, configure `ios` and `android` folders, `build` the project and `run` the project.

#### Basicamente para rodar o programa é preciso 4 etapas:
instalar os `node_modules`, configurar as pastas `ios` e `android`, fazer o `build` do projeto e `rodar` o projeto.


## 1. Installing `node_modules` / Instalando os `node_modules`:

1. In order to install and use this project, the process is very simple. Just type inside the folder address, the below commands in your mac or windows terminal. 

1. Para instalar e utilizar esse projeto o processo é bem simples, basta digitar um dos comandos abaixo no terminal, dentro do caminho da pasta do projeto.:

```sh
yarn install
```
ou
```sh
npm install
```


1. After that will have created all dependencies of the project, duly linked and installed, as well as the configuration files that will be copied inside the project. 

1. Com isso o projeto será criado com todas as dependências do projeto devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---
## 2. Configurint ios and android folders. / Configurando as pastas ios e android:
#### Android extra step / Passo Adicional no Android

In order to enable gesture handlers in Android, its necessary the following verification, which is simple, open the file 
`android/app/src/main/java/<pacote_do_projeto>/MainActivity.java` and set the code to be the same as below.

Para que os gestos sejam habilitados no Android é necessário a seguinte verificação, que é bem simples, abra o arquivo `android/app/src/main/java/<pacote_do_projeto>/MainActivity.java`, e veja se o código está como o abaixo:

```java
// ...
import com.facebook.react.ReactActivity;
//Adicionar código abaixo caso não exista
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

```java
public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() { ... }
//Adicionar código abaixo caso não exista
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
```
#### IOs extra step. / Passo Adicional no iOS

To run the project in your XCode simulator:

https://stackoverflow.com/questions/50453883/react-native-build-failed-react-rctbridge-h-file-not-found


IOS Steps:
1. Open the terminal. Abra o terminal.
2. Go to the ios folder. Vá para a pasta ios.
3. Close XCode. Saia do Xcode.
4. Run the following command: Rode o commando:   ```$ run pod install```.
5. Open `.xcworkspace`file. Abra o arquivo `.xcworkspace`.
6. Clean (cmd+shift+k) and build (cmd+b) the project:  Dê um Clean (cmd+shift+k) e o build (cmd+b) no projeto.

---
## 3. Making the project build, and running the app: / Fazendo o build do projeto para rodar a aplicação:

Its important have installed XCode or Android Studio to build the app.
É preciso ter instalado o Xcode ou o android studio para que possa fazer o build do app.

As well as its necessary to have installed node and npm globally in your machine. Just download and install from the following link:
Assim como é necessário ter instalado o node e o npm globalmente em sua máquina. Basta baixar e instalar do link a seguir:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

1. Make the build with the below command to create the app on XCode (iOS): / Faça o build com o seguinte comando abaixo para criar o app no Xcode (iOS):

```sh
react-native run-ios
```
or use the below command to run the Android simulator (on Android Studio):
ou utilize o comando abaixo para rodar no simulador do Android (Android Studio):

```sh
react-native run-android
```
## 4. Run the app using the below command: / Rode a aplicação utilizando o comando abaixo:

```sh
yarn start
```
or
ou 

```sh
npm start
```
## Questions and Contact: / Dúvidas e Contato

Ricardo Naoki Horiguchi - [Github](https://github.com/longvision) - **r.n.hori@gmail.com**

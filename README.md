
## Sobre o Projeto

The following project was developed to attend the requirements of this [Briefing/(Prototype and Requirements)](https://github.com/longvision/React-Native-Mobile-Startup-Test/blob/master/Lodjinha/ChallengeREADME.md). The app was developed using react-native, Redux, other tools.

<!-- GETTING STARTED -->

## Screens:

- [Home Screen](https://longvision.s3.amazonaws.com/loj5.png)
- <img src="https://longvision.s3.amazonaws.com/loj5.png">
- [Product Detail](https://longvision.s3.amazonaws.com/loj4.png)
- <img src="https://longvision.s3.amazonaws.com/loj4.png">
- [Featured Products](https://longvision.s3.amazonaws.com/loj6.png)
- <img src="https://longvision.s3.amazonaws.com/loj6.png">
- [Side Drawer Menu](https://longvision.s3.amazonaws.com/loj2.png)
- <img src="https://longvision.s3.amazonaws.com/loj2.png">
- [Product Added](https://longvision.s3.amazonaws.com/loj3.png)
- <img src="https://longvision.s3.amazonaws.com/loj3.png">
- [Developer](https://longvision.s3.amazonaws.com/loj1.png)
- <img src="https://longvision.s3.amazonaws.com/loj1.png">


# Começando

Para conseguir utilizar o aplicativo faça uma cópia local dos arquivos e siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)


### Instalação
#### Basicamente para rodar o programa é preciso 4 etapas:
instalar os `node_modules`, configurar as pastas `ios` e `android`, fazer o `build` do projeto e `rodar` o projeto.

## 1. Instalando os node_modules:

1. Para instalar e utilizar esse projeto o processo é bem simples, basta digitar um dos comandos abaixo no terminal:

```sh
yarn install
```
ou
```sh
npm install
```


1. Com isso o projeto será criado com todas as dependências do projeto devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---
## 2. Configurando as pastas ios e android:
#### Passo Adicional no Android

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
#### Passo Adicional no iOS

To run the project in your XCode simulator:

https://stackoverflow.com/questions/50453883/react-native-build-failed-react-rctbridge-h-file-not-found


 iOS Steps:
1. Abra o terminal.
2. Vá para a pasta ios.
3. Saia do Xcode.
4. Rode o commando   ```$ run pod install```.
5. Abra o arquivo .xcworkspace.
6. Dê um Clean (cmd+shift+k) e o build (cmd+b) no projeto.

---
## 3. Fazendo o build do projeto para rodar a aplicação:

É preciso ter instalado o Xcode ou o android studio para que possa fazer o build do app.
Assim como é necessário ter instalado o node e o npm globalmente em sua máquina. Basta baixar e instalar do link a seguir:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

1. Faça o build com o seguinte comando abaixo para criar o app no Xcode (iOS):

```sh
react-native run-ios
```

ou utilize o comando abaixo para rodar no simulador do Android (Android Studio):

```sh
react-native run-android
```
## 4. Rode a aplicação utilizando o comando abaixo:

```sh
yarn start
```
ou
```sh
npm start
```
## Dúvidas e Contato

Ricardo Naoki Horiguchi - [Github](https://github.com/longvision) - **r.n.hori@gmail.com**

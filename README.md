# Flashlight com React Native  :iphone:
Desafio _DIO_: construindo um _App_ de lanterna usando sensor de movimento com _React Native_.

<p float='left'>
<img src="https://user-images.githubusercontent.com/89210954/176247681-75aaa32e-8e34-4416-a4db-ddbed3498072.png" width="300" />
<img src="https://user-images.githubusercontent.com/89210954/176247739-8aa17d25-ed6a-408f-bbe5-18b23b4725c8.png" width="300" />
</p>

### Tópicos:
- Criação de projeto de lanterna
    - Utilização de _Expo-Cli_
        - _Expo-camera_
        - _Expo-shake_ e _Expo-sensors_
- Estilização do _App_
- Evento nativo de _Shake_
- Criação de _APK_ para compartilhar _App_

## Apk com Expo
1. Vá até a pasta onde seu projeto está via _command line_, neste caso:
~~~batchfile
/c/workspace/reactnative-flashlight/project
~~~

2. Digite o comando `expo whoami`, se a mensagem de retorno for `Not logged in, run expo login to authenticate`, entre no site do [expo.dev](https://expo.dev/) e faça login

3. Volte ao _command line_ de preferência e digite `expo login`, faça o login digitando seu _username_/e-mail e sua senha
~~~batchfile
Username/Email Address: ************@********
Password: *********
~~~

4. Após ter um retorno de `Sucess. You are now logged in as *******`, digite o comando `expo build:android`, aguarde até que apareça as escolhas de _Apk_ ou _App Bundle_, selecione _Apk_

5. Ao aparecer mensagem `Build finished` vá ao site do expo, logado anteriormente, em projetos, clique no projeto que acabou de subir e em _download_

![git](https://user-images.githubusercontent.com/89210954/176261389-4e3e1a81-567f-45dd-9d62-11263d8c50ea.png)

6. PRONTO! Só fazer sua release. :stuck_out_tongue_winking_eye:

> _Digital Innovation One_ : [dio.me](https://www.dio.me/)
>
> _React Native_ : [reactnative.dev](https://reactnative.dev/)
>
> _Expo_ : [expo.dev](https://expo.dev/)

# Bootcamp GOStack da Rocketseat(2020) - React Native

Projeto desenvolvidos nas aulas do Bootcamp GOStack da Rocketseat em 2020.

## Iniciar
react-native start --reset-cache (para evitar bug de inicialização)
react-native run-android  

API para integrações:
https://github.com/Marcelovqvd/Rocketseat2020-Back-end-com-Node.js

## Axios
Opções para conexão do dispotivio com localhost:
- iOS com Emulador: localhost;
- iOS com aparelho físico: IP da máquina;
- Android com Emulador: localhost com abd reverse;
- Android com Emulador do Android Studio: 10.0.2.2
- Android com Emulador Genymotion: 10.0.3.2
- Android com aparelho físico: IP da máquina

#### Utilizando adb reverse:
Redirecionar portas
adb reverse tcp:3333 tcp:3333

Utilizando IP
Buscar o IP da máquina: ifconfig
wlp9s0 (wifi) ou enp4s0 (cabo) 
baseURL: 'http://ip:3333',
ex. baseURL: 'http://192.168.0.12:3333',

#### adb devices
Depois da o comando adb -s <número do device> reverse tcp:3333 tcp:3333

#### Console.log
Para visualizar os logs - chacoalhar o Android e clicar em Debug.
Inspec no browser que abrirá
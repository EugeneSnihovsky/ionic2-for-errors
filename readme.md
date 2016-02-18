# Welcome to at-mobile project

## Installation

To install all the required modules - navigate to project folder and run the following commands:
```sh
npm install
```

## Prepare for usage

##### Warning! Before all you need to install android SDK and configure it. Best guide places [here](https://blog.nraboy.com/2014/09/install-android-cordova-ionic-framework-ubuntu/). Shell script from guide places [here](https://github.com/nraboy/ubuntu-ionic-installer/archive/master.zip).
Guide a bit outdated. You can change shell script manually and install latest version of node.js

##### Especially you need to change shell script to install ionic 2
```sh
npm install -g ionic@beta
```

Then you need to install desired ios/android platform. From project folder
```sh
ionic platform add android@5
```
You can check installed/available platform list
```sh
ionic platform list
```
Or remove installed platform
```sh
ionic platform remove android
```

## Usage
### In browser
Run application in browser with live reload server
```sh
ionic serve
```

Run application in browser with live reload server and ability to check how it looks on android and ios devices
```sh
ionic serve --lab
```
### In emulators
Run application on desktop emulator
```sh
ionic emulate android
```
Before it you need to create and configure emulated device
```sh
android avd
```
Also if you have multiple emulated devices - you can run application on specific device by setting device target. Without it app will start on default device
```sh
ionic emulate android --target deviceName
```
### In real devices
Run application on real devices
```sh
ionic run android
```
##### P.s: before it you need to unlock your device from your desktop, or this command will run application on default emulator.

## Algoritm to unlock real device on your PC (android <-> ubuntu)
1. Connect device to pc
2. Turn on debug mode from usb on your phone
3. Type in terminal
```sh
adb devices
```
4. If you see something like this
```sh
xxxxxxxx no permissions
```
or
```sh
???????? no permissions
```
Do the steps below
5. Try to use your USB vendor ID from [common list](http://developer.android.com/tools/device.html). Or you can do it manually.

Type in terminal
```sh
usb-devices
```
Search our device by **Product**. Remember params: **Bus, Dev#, Vendor, ProdId**.

Type in terminal
```sh
lsusb
```
Check the presence of your device by **Bus, Device, ID=Vendor:ProdId**.

6. Create file **51-android.rules** at **/etc/udev/rules.d/**

7. Fill file with
```sh
SUBSYSTEM=="usb", ATTRS{idVendor}=="xxxx", MODE="0666"
```
Where **xxxx** - is your **Vendor**.

8. Give permissions to our file
```sh
sudo chmod 644   /etc/udev/rules.d/51-android.rules
sudo chown root. /etc/udev/rules.d/51-android.rules
```
9. Restart services
```sh
sudo service udev restart
sudo killall adb
```
10. Reconnect our device and type in terminal
```sh
adb devices
```
If all done right - you will see
```sh
xxxxxxxx device
```
#### Algoritm examples
Example output data by devices with command **lsub**
```sh
Bus 002 Device 004: ID 0bb4:0c03 HTC (High Tech Computer Corp.)
```
Example output data by devices with command **usb-devices**
```sh
T:  Bus=02 Lev=01 Prnt=01 Port=00 Cnt=01 Dev#=  4 Spd=480 MxCh= 0
D:  Ver= 2.00 Cls=00(>ifc ) Sub=00 Prot=00 MxPS=64 #Cfgs=  1
P:  Vendor=0bb4 ProdID=0c03 Rev=02.16
S:  Manufacturer=MediaTek
S:  Product=JY-G5S
S:  SerialNumber=5LNFZH45D6JFYS45
C:  #Ifs= 2 Cfg#= 1 Atr=c0 MxPwr=500mA
I:  If#= 0 Alt= 0 #EPs= 2 Cls=08(stor.) Sub=06 Prot=50 Driver=usb-storage
I:  If#= 1 Alt= 0 #EPs= 2 Cls=ff(vend.) Sub=42 Prot=01 Driver=(none)
```
Example for fill data in **51-android.ruless**
```sh
SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
```

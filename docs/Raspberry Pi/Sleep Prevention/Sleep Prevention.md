---
sidebar_position: 2
---

# Preventing the Raspberry Pi from Sleeping

## Background
**Lightdm** is a cross-desktop display manager that is used in debian based distributions. It is the default display manager for Ubuntu, Linux Mint, and Raspbian/RaspberryPi OS. It is used to manage the login screen, and to start the desktop environment. It is also used to start the X server, which is the graphical user interface that is used to interact with the Raspberry Pi.

While there are several methods of achieving a similar result, this guide will focus on using the `xserver-command` option in the `lightdm.conf` file to disable screen blanking and power management for the X server.

## Setup
1. In Raspberry Pi terminal, run the following command to open the lightdm.conf file
```bash
sudo nano /etc/lightdm/lightdm.conf
```

2. Insert the following at the bottom of the lightdm.conf file to disable screen blanking and power management for the X server
```shell title="lightdm.conf" 
...
xserver-command=X -s 0 dpms
```

3. To save and exist the file, press `ctrl + x` then type `y` and press `enter`

4. Reboot the Raspberry Pi to apply the changes using
```bash
sudo reboot now
```


## Additional Information
###### For more information see the following links
###### - https://wiki.debian.org/LightDM

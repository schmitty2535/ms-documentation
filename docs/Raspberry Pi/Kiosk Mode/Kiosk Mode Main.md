---
sidebar_position: 4
---

# Kiosk Mode

## What is Kiosk Mode?

Generally, kiosk mode is usually meant to refer to a particular “mode” that most browsers offer. “Kiosk Mode” is offered by browser applications (Internet Explorer, Chrome, Firefox etc) to run the application full screen without any browser user interface such as toolbars and menus. The intent of most people setting up “kiosk mode” is to prevent the user from running anything other than the browser based content in the full screen browser window.

Kiosks tend to be deployed in a self-service environment which means the user of the kiosk is not formally associated with the kiosk. In short, the user doesn't own the kiosk and isn't responsible for the proper functioning of the kiosk. The user just wants the kiosk to provide a defined service.

## How to set up Kiosk Mode on Raspberry Pi

**1.** Connect to the Raspberry Pi using a keyboard and mouse and open up a terminal

**2.** Enable VNC in raspi-config type  `sudo raspi-config`and select Interface Options followed by VNC and select "Yes" if its not already enabled.

:::info

Allowing VNC enables you to remotely access your raspberry pi from another computer on the same network with a program such as RealVNC's VNC Viewer program. [https://www.realvnc.com/en/connect/download/viewer/](https://www.realvnc.com/en/connect/download/viewer/)

:::


**3.** Go to raspi-config and again and select boot options followed by "Desktop/CLI" and Enable Desktop Autologin

**4.** Install xdotool and unclutter by running the following command `sudo apt-get install xdotool unclutter sed`

:::info

Install xdotool and unclutter, xdotool: This tool will allow our bash script to execute key presses without anyone being on the device. Unclutter: This will enable us to hide the mouse from the display.

:::

**5.** Create your kiosk bash script by running the following `sudo nano /home/pi/kiosk.sh`Then copy and paste the following lines into the script file, and change "[https://google.com](https://google.com/)" (located in the last line) to the web address of the page you wish to open on boot.&#x20;

```bash title="kiosk.sh" showLineNumbers
#!/bin/bash
xset s noblank
xset s off
xset -dpms

unclutter -idle 0.5 -root &

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/'
/home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences
// highlight-next-line
/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk https://google.com
```

When done press CTRL+X and they Y and finally ENTER

:::caution

Pay close attention to http vs. https in your URL

:::

**6.** Run the following and record the output for later use `echo $DISPLAY`

**7.** Create a service file to instruct the operating system what file you wish to be executed as well as specifying that the GUI should boot before starting up the software `sudo nano /lib/systemd/system/kiosk.service`Then copy the following code and if necessary, modify the "Environment=DISPLAY=0" to whatever value you received from **step 6**

```bash title="kiosk.service" showLineNumbers
[Unit]
Description=Chromium Kiosk
Wants=graphical.target
Wants=graphical.target

[Service]
Environment=DISPLAY=:0.0
Environment=XAUTHORITY=/home/pi/.Xauthority
Type=simple
ExecStart=/bin/bash /home/pi/kiosk.sh
Restart=on-abort
User=pi
Group=pi

[Install]
WantedBy=graphical.target
```

When done press CTRL+X and they Y and finally ENTER

**8.** Enable the kiosk service by running the following `sudo systemctl enable kiosk.service`

**9.** With the Kiosk service now enabled you can either choose to restart the Raspberry Pi or start the service now by running the following command. `sudo systemctl start kiosk.service`

**10.** To check the status run the following `sudo systemctl status kiosk.service`

Additional commands include

```
   sudo systemctl stop kiosk.service
```

and

```
   sudo systemctl disable kiosk.service
```

## Additional Information

:::tip
### Troubleshooting Timing Issues
If you restart the Raspberry Pi and the kiosk service does not start automatically, you can check the status of the service by running the following command `sudo systemctl status kiosk.service`. If the error is a result of not being able to locate the display :0.0, consider adding a delay into the script. 

The following code includes a 5-second delay before the executing the delay which accesses the display. This delay can be reduced based on the time required for the display to boot up.
```bash title="kiosk.sh" showLineNumbers
#!/bin/bash
xset s noblank
xset s off
xset -dpms

# highlight-next-line
sleep 5

unclutter -idle 0.5 -root &

sed -i 's/"exited_cleanly":false/"exited_cleanly":true/'
/home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences
// highlight-next-line
/usr/bin/chromium-browser --noerrdialogs --disable-infobars --kiosk https://google.com
```
:::

:::tip

After editing the code it may be necessary to disable the kiosk.service, then enable and start it again.

:::

:::tip

To get out of kiosk mode, click CTRL+F4

:::

###### For more information see the following links
###### - https://m.kioware.com/learn/what-is-kiosk-mode
###### - https://www.wikihow.com/Execute-a-Script-at-Startup-on-the-Raspberry-Pi
###### - https://pimylifeup.com/raspberry-pi-kiosk/


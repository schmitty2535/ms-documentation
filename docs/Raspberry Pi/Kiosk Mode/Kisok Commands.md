---
sidebar_position: 2
---

# Kiosk Command List

Since kiosk mode was configured to be a service, we must control it using the `systemctl` command. The following commands are used to control the kiosk service.

## Enable Kiosk Service

```bash
sudo systemctl enable kiosk.service
```

## Start Kiosk Mode

```bash
sudo systemctl start kiosk.service
```

## Check Status of Kiosk Mode

```bash
sudo systemctl status kiosk.service
```

## Stop Kiosk Mode

```bash
   sudo systemctl stop kiosk.service
```

## Disable Kiosk Mode

```bash
   sudo systemctl disable kiosk.service
```

:::tip

If you are in the browser and wish to exit the kiosk mode UI click **CTRL+F4** and the browser will close and return you to the desktop.

:::

In the context of a Linux operating system, a service is a program that runs in the background to perform a specific function. Services can be configured to start automatically when the system boots and run continuously in the background, or they can be started manually when needed. They are often used to provide network services, such as web servers, database servers, and file servers, but they can also be used to perform other functions, such as scheduling tasks or processing data. Some examples of common services on a Linux system include the Apache web server, the MySQL database server, and the SSH server for remote access.
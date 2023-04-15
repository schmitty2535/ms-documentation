---
sidebar_position: 5
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

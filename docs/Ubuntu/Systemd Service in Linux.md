---
sidebar_position: 3
---

# Systemd Services in Linux

## What is systemd

`Systemd`[^1] is a software suite that unifys service configuration and behavior across Linux distributions. It can be defined as a "System and Service Manager" which is responsible for managing various [daemons](https://en.wikipedia.org/wiki/Daemon_(computing)) and utilities such as device management, login management, network connection, and event logging. Below is an image which describes the architecture of `systemd`.

[![img](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Systemd_components.svg/440px-Systemd_components.svg.png)](https://en.wikipedia.org/wiki/File:Systemd_components.svg)

## Usage

Listing all Services

```bash
systemctl list-units --type=service
```

Displaying Status of Service

```bash
systemctl status serviceName
```

View Service Configuration

```bash
systemctl cat serviceName
```



## Creating a Custom systemd Service

In order to create a `systemd` service, you must create a "Unit file" within one of the following directories. The following list is accessable through the `man systemd.unit` command.

```
Load path when running in system mode (--system).
       ┌───────────────────────────────┬─────────────────────────────────────────────┐
       │ Path                          │ Description                                 │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /etc/systemd/system.control   │ Persistent and transient configuration      │
       ├───────────────────────────────┤ created using the dbus API                  │
       │ /run/systemd/system.control   │                                             │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /run/systemd/transient        │ Dynamic configuration for transient units   │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /run/systemd/generator.early  │ Generated units with high priority (see     │
       │                               │ early-dir in systemd.generator(7))          │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /etc/systemd/system           │ System units created by the administrator   │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /run/systemd/system           │ Runtime units                               │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /run/systemd/generator        │ Generated units with medium priority (see   │
       │                               │ normal-dir in systemd.generator(7))         │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /usr/local/lib/systemd/system │ System units installed by the administrator │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /lib/systemd/system           │ System units installed by the distribution  │
       │                               │ package manager                             │
       ├───────────────────────────────┼─────────────────────────────────────────────┤
       │ /run/systemd/generator.late   │ Generated units with low priority (see      │
       │                               │ late-dir in systemd.generator(7))           │
       └───────────────────────────────┴─────────────────────────────────────────────┘
```

The most common for admin created services and my recommendation is `/etc/systemd/system`.

To in order to create your system unit file, run the follow command within the desired directory from the list above.

```bash
nano serviceName.service
```

Start by defining the description of the service

```
[Unit]
Description=Example service description.
```

Next, define how the service should start and its run level

```
[Install]
WantedBy=multi-user.target
```

`multi-user.target` defines a system state where all network services are started up and the system will accept logins, but a local GUI is not started. If an internet connection is required, then the service should wait until the basic network functionalities are established. To achieve this, add the following under the `[Unit]` section of the file.

```
After=network.target
```

To define the service itself, add the following `[Service]` section to the unit file.

```
[Service]
Type=simple
ExecStart=/home/abhi/Dev/echo-server/server
WorkingDirectory=/home/abhi/Dev/echo-server
Restart=always
RestartSec=5
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=%n
```

The following describes each line of this section:

- `Type=simple` signals that we will use `ExecStart` line to specify the path to the executable file which the `systemd` will start.
- `WorkingDirectory` specifies where service will run out of. This becomes important when taking into account permisions for directories.
- `Restart=always` and `RestartSec=5` tells the service that it should automatically restart after 5 seconds following the service failing or being aborted.
- `StandardOutput=syslog`, `StandardError=syslog`, and  `SyslogIdentifier=%n` lines automatically redirect the services output to a specified log file.

Save the file with the following keystrokes  `Ctr+x`, `y`, `enter`.

## Running and Monitoring the Service

To make the service file visible you must reload `systemctl` with the following command.

```
sudo systemctl daemon-reload
```

Now enable the service

```
sudo systemctl enable serviceName.service
```

If successful, a output stating that a Symlink was created will be logged.

Finally start the service with this command,

```
sudo systemctl start serviceName.service
```

No output will be printed to the terminal, so run the following to check the status.

```
sudo systemctl status serviceName.service
```

To see logs of the service,

```
journalctl -f -u serviceName.service
```



## Removing the systemd service

1. **Stop the service if it is running**

```
$ systemctl stop serviceName.service
```

2. **Disable the service**

```
$ systemctl disable serviceName.service
```

3. **Delete the Unit file**

```
$ sudo rm /etc/systemd/system/serviceName.service
```

4. **Reload systemctl**

```
$ systemctl daemon-reload
```



[^1]: More information about `systemd` can be found here https://www.linode.com/docs/guides/what-is-systemd/


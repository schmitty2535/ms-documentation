---
sidebar_position: 1
---

# Building an MQTT Server Using Raspberry Pi

**1. Install the mosquitto MQTT Broker**

`mosquitto` is a popular MQTT broker that is well-supported on Debian-based Linux platforms such as Raspbian. It’s easy to install using `apt`:

```text
sudo apt install mosquitto mosquitto-clients
```

You’ll need to enter your password the first time you run `sudo`.

You don’t strictly need the `mosquitto-clients` package for running the broker, but installing it allows you to run the MQTT client code locally which is great for testing.

It also means you can use the Raspberry Pi as a proper MQTT client as well as a broker. This means you could, for example, add a user interface to control other MQTT clients around your home directly from the Raspberry Pi.

**2. Enable the mosquitto broker**

Enable the broker and allow it to auto-start after reboot using the following command:-

```text
sudo systemctl enable mosquitto
```

The broker should now be running. You can confirm by checking the `systemd` service status:-

```text
sudo systemctl status mosquitto
```

This should produce an output similar to:-

```text
● mosquitto.service - LSB: mosquitto MQTT v3.1 message broker
   Loaded: loaded (/etc/init.d/mosquitto; generated; vendor preset: enabled)
   Active: active (running) since Sat 2018-12-29 16:27:56 GMT; 22h ago
     Docs: man:systemd-sysv-generator(8)
   CGroup: /system.slice/mosquitto.service
           └─1685 /usr/sbin/mosquitto -c /etc/mosquitto/mosquitto.conf

Dec 29 16:27:56 raspberrypi systemd[1]: Starting LSB: mosquitto MQTT v3.1 message broker...
Dec 29 16:27:56 raspberrypi mosquitto[1679]: Starting network daemon:: mosquitto.
Dec 29 16:27:56 raspberrypi systemd[1]: Started LSB: mosquitto MQTT v3.1 message broker.
```

**3. Subscribe to the MQTT Topic Locally**

In order to test the broker, you need to **subscribe** to an MQTT **topic**.

A topic is simply a string that looks like a file system path. It has the general form:-

```text
a/b/c/...
```

There are no restrictions on the number of elements. There are some special characters: apart from the slash `/` itself, the characters `+` and `#` are wildcards, which you don’t really need to know about yet, other than not to use them in a topic name.

The great thing about MQTT is that you can just make up topics to suit your needs. You don’t need to register them anywhere. For the sake of this test, you can use a topic called `test/message`.

In the existing terminal, subscribe to the `test/message` topic:-

```text
mosquitto_sub -h localhost -t "test/message"
```

This will send a subscription message to the MQTT broker which is currently running on the same system \(as specified by the `-h localhost` option\). But it could be running somewhere else, as you’ll see later.

So long as the `mosquitto_sub` programme is running you’re listening to the `test/message` topic as an MQTT client.

**4. Publish to the MQTT Topic Locally**

Because your current terminal is occupied listening to the topic, you’ll need to open another terminal. You can do this using another SSH session or on the Raspbian GUI, depending how your system is configured.

Once open, publish message to the `test/message` topic like this:-

```text
mosquitto_pub -h localhost -t "test/message" -m "Hello, world"
```

If you look back at the first terminal now you should see this:-

```text
Hello, world
```

Congratulations, you have just published your first MQTT message!

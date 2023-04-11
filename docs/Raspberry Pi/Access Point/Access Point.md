---
sidebar_position: 1
---

Run the following commands one at a time:
```bash
sudo apt install dnsmasq hostapd
sudo nano /etc/dhcpcd.conf
```


insert the following
```bash title="kiosk.sh" showLineNumbers
interface wlan0 
static ip_address=192.168.4.1/24 
nohook wpa_supplicant
```
to exit click ctl + X  then type letter ‘y’ and click enter to exit to save

Run the following commands one at a time:
```bash
sudo systemctl restart dhcpcd
sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
sudo nano /etc/dnsmasq.conf
```
insert the following
```bash title="dnsmasq.conf" showLineNumbers
interface=wlan0
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
```
Run the following commands one at a time:
```bash
sudo systemctl reload dnsmasq
sudo nano /etc/hostapd/hostapd.conf
```
insert the following
```bash title="hostapd.conf" showLineNumbers
interface=wlan0
driver=nl80211
ssid=NameOfNetwork
hw_mode=g
channel=7
wmm_enabled=0
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=AardvarkBadgerHedgehog
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```

```bash
sudo nano /etc/default/hostapd
```
Edit this line and delete the ‘#’ at the beginning of command line 
- DAEMON_CONF="/etc/hostapd/hostapd.conf"

Run the following commands one at a time:
```bash
sudo systemctl unmask hostapd 
sudo systemctl enable hostapd 
sudo systemctl start hostapd
```

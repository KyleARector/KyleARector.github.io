---
layout: post
title: Dash Button Hub/Hacking
date: 2016-05-23 23:00
comments: false
categories: []
---
<p>Last year, Amazon came out with a conveniently sized, Wi-Fi enabled button that will order a pre-selected product (from Amazon, of course) after a single press. The buttons were even bargain priced at right around 5 dollars. Immediately, people began trying to hack the little device and repurpose the button pushes for everything from <a href="https://medium.com/@brody_berson/hacking-amazon-s-5-dash-button-to-order-domino-s-pizza-9d19c9d04646#.6ahvngcee">ordering a pizza</a> to
<a href="https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8#.4md9unrdn"> logging the number of times their baby needed changed.</a>
<img src="/images/2016/dash_button_1.png" alt="dash" />
Most of the aforementioned methods rely on monitoring network traffic, and reacting when the mac address of the desired button shows up in an ARP probe. This is where I started, but I was not entirely happy with the amount of resources required for constant monitoring. This is when I stumbled upon dnsmasq and the dhcp_script method, and I designed my solution around that. 
<br/><br/>
First, I wanted to establish a separate network for my Dash Buttons to connect to. I followed this wonderful <a href="https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/">tutorial</a>. While it was specifically written for the Raspberry Pi 3 onboard Wi-Fi, it will still work with the latest distro of Raspian on any Pi, and most new USB Wi-Fi adapters should use the same driver. 
<br/><br/>
Using the SSID and password set up in the previous step, I started the process of pairing the Dash Button with the access point. If the process is cancelled after giving the device the ssid and password, but before you choose a product to be shipped to you, no unintentional orders will be placed when using the buttons. Because I wanted to sort the buttons by MAC address, I ran hostapd interactively (<code>sudo /usr/sbin/hostapd /etc/hostapd/hostapd.conf</code>), pressed the buttons individually, and noted their MAC address as they appeared in the terminal. Next I created the following short shell script to be run with the dhcp_script method:
<br/><br/>
<code>
#! /bin/bash
<br/><br/>
var="$2"
<br/><br/>
cd /home/pi/Dev<br/>
sudo python dashControl.py $var<br/>
cd<br/>
</code>
<br/>
This script is executed anytime a device connects to the network, rather than constantly monitoring traffic. It also sends the MAC address (second argument from the dhcp_script call) along to a python script, where I perform some sorting, and then a few HTTP requests to SmartThings. Of course HTTP requests could have been made directly from the shell script, but I chose python for a little versatility. That python script can be seen below:
<br/><br/>
<code>
import requests<br/>
import json<br/>
import sys


<br/><br/>
mac = sys.argv[1]

<br/><br/>
with open(config.json) as infile:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;data = json.load(infile)
<br/>
infile.close()<br/>

root_uri = data["root_uri"]<br/>
auth_token = data["auth_token"]
<br/>
headers = {"Authorization": "Bearer " + auth_token}<br/>



if mac == "my:ma:ca:dd:re:ss":
<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;payload = {"button": "2"}
<br/> 
    &nbsp;&nbsp;&nbsp;&nbsp;req = requests.post(root_uri + "/control", headers=headers, json=payload)<br/>

elif mac == "ur:ma:ca:dd:re:ss":
<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;payload = {"button": "1"}
<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;req = requests.post(root_uri + "/control", headers=headers, json=payload)

<br/>
</code>
<br/>
Once those steps were complete, I modified the dnsmasq configuration file (<code>sudo nano /etc/dnsmasq.conf</code>), and added the line <code>dhcp-script=/root/bin/dashControl.sh</code>, with my whole file appearing as such:
<br/><br/>
<code>
interface=wlan0<br/>    
bind-interfaces<br/>     
server=8.8.8.8<br/>      
domain-needed<br/>       
bogus-priv<br/>          
dhcp-script=/root/bin/dashControl.sh<br/>
dhcp-range=172.24.1.50,172.24.1.150,12h<br/> 
</code>
<br/>
At this point, I restarted the dnsmasq service (<code>sudo service dnsmasq restart</code>), and verified that everything was behaving as intended.
<br/><br/>
The best part of this endeavor is the wide variety of actions that can be performed at the press of a button. Granted, the Dash Button lifespan is only about 1000 presses, but they are relatively inexpensive, and can be replaced in the code or configuration file very easily. Using the Pi as the access point allows MAC address sorting, and actions can easily be set up via HTTP, Bluetooth, or over the local network. One example might be issuing a shutdown command to a local PC. Also, there are even more possibilities when issuing a GET request to the <a href="https://ifttt.com/maker">Maker channel on IFTTT.</a> Think of it as a physical “DO” button.  
</p>


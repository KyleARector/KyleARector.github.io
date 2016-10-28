---
layout: post
title: LogMeIn Hamachi on Raspberry Pi
date: 2016-10-28 00:00
comments: false
categories: []
---
<p>
When I was in college, a <a href="http://mbmccormick.com/">friend</a> of mine set up a mesh VPN network for a group of us to share files over. We used the free tier of the LogMeIn VPN service, Hamachi. At the time, I did not realize how useful VPN was. Fast forward to today, and I still use Hamachi to network a few machines at home, and one at work.
<br/><br/>
As part of my recent fascination with building a Raspberry Pi powered Smart Home, I wanted to be able to access the system securely, and without having to set up port forwarding and exposing the Pi to the internet at large. Hamachi provides a great solution to this, has desktop clients to connect Macs and PCs, and even has methods for generating VPN profiles for tablets and mobile phones. The following is how I set up Hamachi on my Raspberry Pi 3 (or 2) running Raspian Jessie:
<br/><br/>
First, create a free <a href="https://secure.logmein.com/home">LogMeIn</a> account, if you do not already have one. Update Raspian with <code>sudo apt-get update</code>, then <code>sudo-apt get upgrade</code>. Next, install the Linux Standard Base and Core components by running:
<br/><br/>
<code>
sudo apt-get install lsb lsb-core
</code>
<br/>
Once that is complete, navigate to the <a href="https://www.vpn.net/linux">Hamachi for Linux page</a>. Under the header "Hamachi for Linux on ARM" locate the most recent ARM HF Debian package. At the time of writing, the most recent available is "logmein-hamachi_2.1.0.165-1_armhf.deb." Grab the package from the Hamachi site with:
<br/><br/>
<code>
sudo wget https://www.vpn.net/installers/logmein-hamachi_2.1.0.165-1_armhf.deb
</code>
<br/>
Next install the package by running:
<br/><br/>
<code>
sudo dpkg -i logmein-hamachi_2.1.0.165-1_armhf.deb
</code>
<br/>
Once everything is installed, log into Hamachi:
<br/><br/>
<code>
sudo hamachi login
</code>
<br/>
After getting the "ok" from the login process, tell Hamachi what to call the system by running the following command, putting your desired name inside the quotes:
<br/><br/>
<code>
sudo hamachi set-nick "YourNameHere"
</code>
<br/>
Next, attach the system to your LogMeIn account by running the following, replacing the placeholder with your email address:
<br/><br/>
<code>
sudo hamachi attach hello@yoursite.com
</code>
<br/>
After sending the attach request, sign into the LogMeIn site. Click on "My Networks" under the "Networks" header, and create a new network if you do not already have one set up. My personal favorite is a mesh network, as there is no master node that has to be online for the rest to connect to one another. At the top of the networks page, you should see a pending join request. Verify that it is from the device type and nickname that you set, and approve it. The Raspberry Pi can now be assigned to any of your networks.
<br/><br/>
Hamachi does not start automatically after restarting or powering on the Pi, but can be started manually by running the hamachi login command. Alternatively, Hamachi can be added as a service that runs at startup buy running:
<br/><br/>
<code>
sudo update-rc.d logmein-hamachi defaults
</code>
<br/>
Now, you have a secure, low power network node that you can access from anywhere. Some possible applications include a Smart Home controller (I am biased), or a media server.
</p>

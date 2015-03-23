---
layout: post
title: Gesture Controlled Door Lock
date: 2015-03-17 19:30
comments: true
categories: []
---
<p>The Internet of Things. Colloquially known as the "IoT," the term refers to the collection of internet or network enabled devices that is prevalent in the modern world. One might argue that every thing under the sun need not be connected to most other things, but I am loving the way companies such as GE and Belkin are creating basic home devices that can be controlled from anywhere. That being said, do we really need a dog feeder controlled by <a href="http://www.instructables.com/id/Twitter-Controlled-Pet-Feeder/">tweets?</a>
<br/><br/>
I recently became the proud owner of a MYO gesture control armband, available from <a href="https://www.thalmic.com/en/myo/">Thalmic Labs</a>. The arband can connect to PC's or Mac's through a proprietary Bluetooth dongle, or to mobile devices directly (Though the connection must be managed in individual mobile apps!). Being immensely interested in IoT projects, I set out to use the armband to interact with various devices in my home. Naturally, my first choice was something that was not already network (or anything) enabled: The front door. 
<br/><br/>
In order to connect the door lock to any sort of device, a physical interface was required. I mocked up a quick 3 section cylindrical housing for the lock mechanism, the servo to turn the lock, and an adapter to connect the servo to the lock. Once the 3D printed pieces were completed, I hooked the servo up to an Arduino Uno, and also to a Bluetooth module. My Windows application handles the data captured by the MYO, and sends it to the Arduino over Bluetooth. An important note: When sending data via Bluetooth serial connection, your COM port may not be the same as mine. Be sure to check the settings on your machine (Control Panel>Devices and Printers>Change Bluetooth settings) to determine the outgoing and incoming COM ports with the connected Arduino. The outgoing port number will need to be changed in the code:
<br/><br/>
<code>
String^ portName;<br/>
int baudRate=9600;<br/>
portName = "Com6"; // Bluetooth Port<br/>
SerialPort^ arduino;<br/>
arduino = gcnew SerialPort(portName, baudRate);<br/>
</code>
<br/><br/>
For a demo of my first version, check out the video below.
<br/><br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/56N3QiX7IQU" frameborder="0" allowfullscreen></iframe>
<br/><br/>
All of my code and 3D models are available <a href="https://github.com/KyleARector/MYO_Door_Jedi">here</a>.
</p>

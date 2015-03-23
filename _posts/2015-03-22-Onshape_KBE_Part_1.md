---
layout: post
title: Onshape and KBE - Part 1 - Normal Control
date: 2015-03-22 00:00
comments: true
categories: []
---
<p>
In the last week or so, I have been privileged enough to request and receive a beta invitation to use a browser and mobile app based CAD software called <a href="http://www.onshape.com"> Onshape.</a> This software is intended to deliver the next generation CAD experience, offering a true modeling environment (not just model viewing) on nearly any platform, as well as real time virtual collaboration and very granular revision control. Being very interested in advancing the development of CAD user experience, I am putting Onshape through its paces. 
<br/><br/>
In my current position, my mentor and I work to implement Knowledge Based Engineering (KBE) practices in the PLM environment. KBE is an umbrella term which covers modeling best practices from avoidance of B-Rep to morph-able modeling techniques. For my first test, I was concerned with determining how Onshape handles the normal directions of lines, planes, curves, and surfaces. 
<br/><br/>
My scenario is simple: starting with an empty part, build a new plane by offsetting one of the 3 datum planes. For my example, I chose the Right plane, seen below. The plane that I created naturally offsets in the normal direction of the parent (Right) plane. This first operation allows me to determine that the normal direction of the parent is toward the left side of the screen, or positive X in the 3D coordinates of the part. 
<br/><br/>
<img src="/images/2015/kbe_onshape_1.jpg" alt="img1" />
<br/><br/>
The next step involves using the Opposite Direction command within the plane creation dialog for Plane 1. In this manner, my created plane flips to the opposite direction, maintaining the 10 inch offset. 
<br/><br/>
<img src="/images/2015/kbe_onshape_2.jpg" alt="img2" />
<br/><br/>
This is where the fun begins. In certain CAD systems (Looking at you, CATIA), a second, invisible operation takes place when the user selects the Opposite Direction command. The parent plane, in my example the Right plane, is inverted, and then the child plane is created off of this inverted plane. This means that the child plane will actually have a normal direction OPPOSITE of the parent, breaking the inheritance structure.
<br/><br/>
You might be wondering to yourself, why should I care? What does it matter if the normal direction is in the opposite direction, I can just manage that later, right? As seen above, the normal of a plane or surface determines the direction that child geometries will be offset in, or what side of a trim operation to keep. In the world of KBE, not controlling normals is a sin. In order to create a part that will reliably change configurations to a variety of inputs, normal directions must be considered. For example, if a plane were an input to a part, and the second configuration of that part consumed a plane with the OPPOSITE normal direction, the results any child operations (splits, anyone?) will be reversed. That means rework time. 
<br/><br/>
What does this have to do with Onshape? Luckily those developing this marvelous CAD package had the foresight to not insert a random invert command when the user wished to offset a plane in the opposite direction. As such, the normal of my Plane 1 is in the same direction as the parent, Right plane. 
<br/><br/>
<img src="/images/2015/kbe_onshape_3.jpg" alt="img3" />
<br/><br/>
This concludes this particular round of investigation, but I greatly look forward to seeing what else Onshape has to offer in the KBE space.
</p>

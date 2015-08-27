---
layout: post
title: The CATIA Planes Problem
date: 2015-03-19 00:00
comments: false
categories: []
---
<p>Let me start this post by noting that I have been working in some form of CATIA V5 for nearly 7 years now. This count includes 5 academic years, and 2 professional, as well as all the additional time I have spent fiddling with the CAD package on the side. Until recently, I thought there was very little that the Dassault product could do to surprise me; That is when I discovered the plane problem.
<br/><br/>
The interpretation my colleagues and I share is that this issue was not intended by Dassault, but occurred as a necessity of how the software was written. If it is an intentional feature, I would like to apologize ahead of time. 
<br/><br/>
First, we need to look at how planes typically work in CATIA. Planes are infinite. They are only bounded by the size of the 3D workspace set by the program. In CATIA, the default is 20 cubic kilometers. Planes are also wireframe geometry, meaning that they have no physical representation in the part. As such, these pieces of geometry should have no center of gravity, nor any physical properties that can drive weights, inertia measures, or anything along those lines. Right? Wrong.
<br/><br/>
In CATIA V5 (Up to at least V5-6R2012), one may create a center of gravity on a plane by generating a datum point, and applying the formula <code> centerofgravity(Your_Planes_Name)</code> to it. 
<br/><br/>
<img src="/images/2015/catia_planes_1.jpg" alt="img1" />
<br/><br/>
The COG will appear as a point directly in the center of the graphical representation of the plane. Normally, this would not be a problem, but when a system of one or more planes is created, the COG of the system will be between the two representations of the planes. That is to say, the little square on screen that represents the plane actually has mass properties that are inaccessible to the user. The mass attributed to the graphical representation of the infinite plane pulls the center of gravity away from where it really should be, if in fact one should be able to generate a COG on an infinite sheet. As mentioned above, this may just be a matter or programmatical convenience or overlooked issue by Dassault.
<br/><br/>
<img src="/images/2015/catia_planes_2.jpg" alt="img2" />
<br/><br/>
Moving forward, I would recommend not using the centerofgravity() method on planes in CATIA V5, unless your desired result is a point right smack dab in the middle of the square. Be sure to keep in mind that while that point fits neatly inside those 4 lines, the real center of the plane could technically be anywhere.

</p>

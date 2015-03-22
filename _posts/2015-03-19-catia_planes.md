---
layout: post
title: The CATIA Planes Problem
date: 2015-03-19 00:00
comments: true
categories: []
---
<p>Let me start this post by noting that I have been working in some form of CATIA V5 for nearly 7 years now. This count includes 5 academic years, and 2 professional, as well as all the additional time I have spent fiddling with the CAD package on the side. Until recently, I thought there was very little that the Dassault product could do to surprise me; That is when I discovered the plane problem.
<br/><br/>
The interpretation my colleagues and I share is that this issue was not intended by Dassault, but occurred as a necessity of how the software was written. If it is an intentional feature, I would like to apologize ahead of time. 
<br/><br/>
First, we need to look at how planes typically work in CATIA. Planes are infinite. They are only bounded by the size of the 3D workspace set by the program. In CATIA, the default is 20 cubic kilometers. Planes are also wireframe geometry, meaning that they have no physical representation in the part. As such, these pieces of geometry should have no center of gravity, nor any physical properties that can drive weights, inertia measures, or anything along those lines. Right? Wrong.
<br/><br/>
</p>

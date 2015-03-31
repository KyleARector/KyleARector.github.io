---
layout: post
title: Using CATScript and ADODB for Design Tables
date: 2015-03-31 00:00
comments: true
categories: []
---
<p>
For those not familiar, design tables are spreadsheets that contain data that can be used to drive configurations of 3D model data in CAD. Take an I-beam for example; the cross section of the beam will not change general shape, but different dimensions (height and width) may change to create a new version of the same type of part. See the below image for an example.
<br/><br/>
<img src="/images/2015/catia_design_table_1.jpg" alt="img2" />
<br/><br/>
Out of the box, CATIA V5 has decent design table functionality. By selecting an existing excel file, or by creating a new one, a user can create a design table object in the specification tree. This object can then be accessed directly through the formula, rule, or knowledge pattern editors in order to associate data from the table to parameters in the part. This methodology can become a bit drawn out, as the user needs to first establish which design table is to be used, create a sheet type object, and subsequently a sheet object. Additionally, if writing to a design table is required, the actual Excel file must be opened each time a new entry is made. Typically, this is not a problem, as the Excel process opens and closes in the background. In complex knowledge patterns (creating and logging locations of an aircraft's worth of planes), this read/write time can have a huge impact on update performance. The more the Excel document must be opened, the longer it will take for the entire knowledge pattern to execute.
<br/><br/>
This problem can be avoided by treating the Excel file like a database, and accessing it via CATScript and an ADODB connection. The code below demonstrates the creation of a table (sheet) in the database (spreadsheet):
<br/><br/>
<code>Dim query As String, filePath As String, dBString As String <br/>
Dim dBConn As Variant<br/>
Set dBConn = CreateObject(&quot;ADODB.Connection&quot;)<br/>
Dim recordSet As Variant<br/>
Set recordSet = CreateObject(&quot;ADODB.Recordset&quot;)<br/>
filePath =  &quot;C:\Users\Kyle\Desktop\Data.xlsx &quot;<br/>
dBString =  &quot;Provider=Microsoft.ACE.OLEDB.12.0;Data Source= &quot; & filePath &  &quot;;Extended Properties='Excel 12.0 Xml;HDR=YES'; &quot;<br/>
dBConn.Open dBString<br/>
query =  &quot;CREATE TABLE Sheet2 ( Column1 int , Column2 varchar(255) , Column3 varchar(255)) &quot;<br/>
recordSet.Open query, dBConn<br/>
dBConn.Close<br/>
</code>
</p>

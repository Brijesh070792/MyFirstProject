<!DOCTYPE html>
<html>
<title>www.mainframeschool.com</title>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
 
 
  
  $("#cobol").click(function(){
    $("p1").show()
	$("p2").hide(500)
	$("p3").hide(500)
	$("p4").hide(500)
	$("p5").hide(500)
  });
  
  $("#jcl").click(function(){
    $("p1").hide(500)
	$("p2").show(500)
	$("p3").hide(500)
	$("p4").hide(500)
	$("p5").hide(500)
	
  });
  
  $("#db2").click(function(){
    $("p1").hide(500)
	$("p2").hide(500)
	$("p3").show()
	$("p4").hide(500)
	$("p5").hide(500)
	
  });
  $("#cics").click(function(){
    $("p1").hide()
	$("p2").hide()
	$("p3").hide()
	$("p4").show()
	$("p5").hide()
  });
  $("#vsam").click(function(){
    $("p1").hide()
	$("p2").hide()
	$("p3").hide()
	$("p4").hide()
	$("p5").show()
	
  });
  $("#home").click(function(){
    $("p1").hide()
	$("p2").hide()
	$("p3").hide()
	$("p4").hide()
	$("p5").hide()
	
	
  });
    $("P99").click(function(){
      $(".p100").animate({
      height: 'toggle'
	  
    });
	
  });
  
  
  
  $("p1").css("display", "none");
  $("p2").css("display", "none");
  $("p3").css("display", "none");
  $("p4").css("display", "none");
  $("p5").css("display", "none"); 
});
</script>
</head>
<body>
<style>

#myDIV {
  border: 1px solid gray;
	
  background-color: pink;
  border: 15px solid green;
  padding-right: 1em;
  padding-left: 1em;
  max-width: 44em; 
}

/* Chrome, Safari, Opera */
@-webkit-keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}

/* Standard syntax */
@keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}

/*body {
  background-color: LightGray;
  background-image: url("brain.jp"); 
  background-repeat: repeat-x,y;
  background-position: right top;
}*/

body {
    margin: auto;
    padding-right: 1em;
    padding-left: 1em;
    max-width: 44em; 
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    font-family		: Verdana, sans-serif;
    font-size		: 100%;
    line-height		: 140%;
    color		: #eee; 
    background-color	: #22252a;
}


div {
  border: 1px solid gray;
	
  background-color: pink;
  border: 15px solid green;
  padding-right: 1em;
  padding-left: 1em;
  max-width: 44em; 
}

h1 {
  text-align: center;
  text-transform: uppercase;
  color: #4CAF50;
}

h6 {
  
  text-transform: uppercase;
  color: #f12345;
}

}
.scroll-element div {
  box-sizing: content-box;
}
</style>

<div id="myDIV"><h6><center>Mainframe Schools
<br>Worlds Best Website for MF interview</center></h6></div>
<button id="home">HOME</button>
<button id="cobol">COBOL</button>
<button id="jcl">JCL</button>
<button id="db2">DB2</button>
<button id="cics">CICS</button>
<button id="vsam">VSAM</button>


<BR>
<p2>
<DIV><h1> <Center>JCL interview question</center></h1></DIV>
<h6><br><P99>1) Explain what is JCL?</P99></h6><br>
<p100>

JCL stands for Job Control Language.  It is the command language of Multiple Virtual Storage (MVS). It is the normally used in Operating System in the IBM Mainframe computers.
</p100>
<h6><br><P99>2) Explain what is the use of JCL?</P99></h6><br>

<p100>
It is used for the deleting creating, the Data Sets, GDG’S and VSAM clusters.
It is used for comparing the files and PDS members
It is used for compiling and executing the programs which includes batch programs as well
It is used for merging and sorting of file data
3) Mention the types of job control statements>

</p100>
<h6><br><P99>3) The types of job control statements are</P99></h6><br>
<p100>

JOB – to identify the Job
DD  –  to supply the I/O files needed for the execution of the program
EXEC – to identify which program has to be executed
</p100>
<h6><br><P99>4) Explain how JCL works</P99></h6><br>
<p100>

JCL recognizes the program to be executed, the inputs that are required and location of the input/output and informs the Operating System through Job control Statements.

</p100>
<h6><br><P99>5) Mention what is the JCL statement consists of</P99></h6><br>
<p100>

JCL statement consists of
ZXG$V37X
Name field (optional)
Operation field
Operand
Comments
</p100>
<h6><br><P99>6) What is the syntax of JCL statement</P99></h6><br>
<p100>

The syntax of JCL statement is,

//Job-name JOB Positional-param, Keyword-param

</p100>
<h6><br><P99>7) Explain what is DD statement is used in JCL</P99></h6><br>
<p100>

DD statement is used in JCL is used to identify the source of input and the placement of output information.

</p100>
<h6><br><P99>8) Explain what EXEC statement is and what is the syntax of EXEC statement used in JCL</P99></h6><br>
<p100>

EXEC statement holds the job step program or procedure information.  The syntax of EXEC statement used in JCL is

//Step-name EXEC Positional-param, Keyword-param

</p100>
<h6><br><P99>9) Explain what are JCLLIB and STEPLIB in JCL</P99></h6><br>
<p100>

Both libraries specifies the private libraries that should be searched before the default system libraries does in order to locate a program to be executed.

JCLLIB identifies the libraries that the system will search for include groups or procedures named in EXEC statements
JOBLIB applies to all steps in the job while STEPLIB applies only to the particular step.
</p100>
<h6><br><P99>10) Explain what is DSN parameter and DISP parameter is used for</P99></h6><br>
<p100>

DISP parameter: It is used to specify the disposition of dataset which is coded on DSN parameter
DSN parameter: It is used to specify the data set name
</p100>
<h6><br><P99>11) Explain what JCL Procedures</P99></h6><br>
<p100>

The JCL Procedures are nothing but a set of statements inside a JCL, grouped together to perform a particular function. 
Procedure can be used to achieve parallel execution of a program using multiple input files.

</p100>
<h6><br><P99>12) What is Cataloged Procedures</P99></h6><br>
<p100>

From the JCL, when the procedure is separated out and coded in a different data store, then it is referred as a Cataloged Procedure.

</p100>
<h6><br><P99>13) Mention what happens when COND is coded in JOB statement and when COND is coded inside EXEC statement</P99></h6><br>
<p100>

When COND is coded in JOB statement, the condition is tested for every job step. When the condition is true for any particular job step,
 it is bypassed along with the job steps.
When COND is coded inside EXEC statement of a job step, and the condition is true,
 then only that particular job step is bypassed, and execution will be carried out from the next job step
</p100>
<h6><br><P99>14) Mention what is DSN in JCL and what are the parameters to declare the DSN</P99></h6><br>
<p100>

In JCL, a dataset name determines the name of a file, and it is referred by “DSN.”

The DSN value can comprise of sub-names each of 1 to 8 characters length, separated by periods and of total length of 44 characters (alphanumeric).

</p100>
<h6><br><P99>15) Explain how would you create a temporary dataset? And where will you use them</P99></h6><br>
<p100>

Temporary dataset can by created either by specifying the temporary file indicator as in SDN=&&Temp or by not specifying any DSName.

</p100>
<h6><br><P99>16) Explain what is SOC4 error</P99></h6><br>
<p100>

SOC4 error is for storage violation error and can be due to many reasons. For example, invalid address due to script error.

</p100>
<h6><br><P99>17) Explain in ways data can be passed to a COBOL program from JCL?</P99></h6><br>
<p100>

Data can be passed to a COBOL program from JCL through

Files
SYSIN DD statement
PARM parameter
</p100>
<h6><br><P99>18) Explain how you can access an uncataloged dataset in a JCL?</P99></h6><br>
<p100>

You can access an uncataloged dataset in a JCL by using the VOL and UNIT serial parameters in the dataset DD statement.

</p100>
<h6><br><P99>19) Explain what is “Cond= even” and “Cond=only”?</P99></h6><br>
<p100>

Cond=even indicates to execute this step EVEN if any previous step is terminated abnormally.
Cond=only indicates to execute this ONLY if any previous step is terminated abnormally
</p100>
<h6><br><P99>20) Explain what is the use of IEBGENER utility?</P99></h6><br>
<p100>

The use of IEBGENER utility is used for copying the data from

one PS to another PS
OR Member of a PDS  to another PS
OR PS to member of PDS.
</p100>
<h6><br><P99>21) Is it possible to code instream data in a PROC?</P99></h6><br>
<p100>

No, it is not possible to code instream data in a PROC.

</p100>
<h6><br><P99>22) Explain in DD statement what is the use of DCB parameter?</P99></h6><br>
<p100>

In DD statement the use of DCB parameter is to give the detail information of the physical characteristics of a dataset.

</p100>
<h6><br><P99>23) Explain how you can direct the data to spool using SYSOUT option?</P99></h6><br>
<p100>

You can direct the data to spool using SYSOUT option “SYSOUT=*”

</p100>
<h6><br><P99>24) Explain what is the difference between JES3 and JES2?</h6></br>

The difference between JES3 and JES2 is that,

JES3 assigns datasets for all the steps before the job is scheduled.
JES2 assigns datasets required by a step just before the step executes.
</p100>
<h6><br><P99>25) Mention what is the difference between specifying DISP=OLD and DISP=SHR for a dataset?</P99></h6><br>
<p100>

The difference between specifying DISP=OLD and DISP=SHR for a dataset is that,

DISP=OLD: It reads data from beginning of dataset. But incase if you try to modify or write, then it will overwrite existing data. i.e old data is lost
DISP=SHR: Its read-only file. In this, multiple user can share the data
</p100>
</p2>

<p3>
<br>
<h6> DB2 Work is under process.</P99></h6><br>
<p100>
</p3>

<p4>
<br>
<h6> CICS Work is under process.</P99></h6><br>
<p100>
</p4>

<p5>
<br>
<h6> VSAM Work is under process.</P99></h6><br>
<p100>
</p5>
<p1>
<h1> <Center>Cobol interview question</center></h1>
<h6>1. What is COBOL?</P99></h6><br>
<p100>
COBOL is abbreviated as Common Business Oriented Language and it is one of the oldest programming languages. It primarily used for business, 
finance and administrative systems for companies.
</p100>
<h6><br><P99>2. What are the different data types in COBOL?</P99></h6><br>
<p100>
There are three data types in Cobol:
Alpha-numeric (X)
Alphabetic (A) and
Numeric (9)
</p100>
<h6><br><P99>3. What is the difference between subscript and index?</P99></h6><br>
<p100>
Subscript refers to the occurrence of an array  but index is the displacement from the beginning of the array.
An index can only be modified using PERFORM, SEARCH & SET.
</p100>
<h6><br><P99>4. What is the difference between performing a SECTION and a PARAGRAPH?</P99></h6><br>
<p100>
SECTION will have all the paragraphs that are part of the section, to be performed.
PARAGRAPH will have only that paragraph to be performed.
</p100>
<h6><br><P99>5. What is the difference between CONTINUE & NEXT SENTENCE?</P99></h6><br>
<p100>
CONTINUE is like a null statement and it continues execution, while NEXT SENTENCE transfers control to the next sentence.
</p100>
<h6><br><P99>6. What are the different OPEN modes available in Cobol?</P99></h6><br>
<p100>
Open modes can be used for
Input
Output
Input – Output
Extend
</p100>
<h6><br><P99>7. What is Static and Dynamic linking?</P99></h6><br>
<p100>

In static linking, called subroutine  links  into the calling program, while in dynamic linking, the subroutine & the main program will exist as separate modules. 
Dynamic and Static linking can be achieved by choosing either the DYNAM or NODYNAM link edit option.

cobol

</p100>
<h6><br><P99>8. What is the use of EVALUATE statement?</P99></h6><br>
<p100>

Evaluate is just like a case statement or it can be used like a Nested IFs. The difference between EVALUATE and case is that  ‘break’ is not used in Evaluate statement 
and the control comes out of the EVALUATE once a match is found.

</p100>
<h6><br><P99>9. What is the difference between PERFORM … WITH TEST AFTER and PERFORM … WITH TEST BEFORE?</P99></h6><br>
<p100>

If TEST BEFORE is specified, the condition is tested at the beginning of each repeated execution of the specified PERFORM range.

If TEST AFTER is specified, the condition is tested at the end of the each repeated execution of the PERFORM range. The range is executed at least once in TEST AFTER.

</p100>
<h6><br><P99>10. What is the point of the REPLACING option of a copy statement?</P99></h6><br>
<p100>

REPLACING allows for the same copy to be used more than once in the same code by changing the replace value.

COPY <Name> REPLACING BY

</p100>
<h6><br><P99>11. What kind of error is trapped by ON SIZE ERROR option?</P99></h6><br>
<p100>

ON SIZE ERROR option is raised when there is

fixed-point overflow
Zero raised to the zero power
Division by 0
Zero raised to a negative number
A negative number raised to a fractional power.
</p100>
<h6><br><P99>12. What is the difference between Structured COBOL Programming and Object Oriented COBOL programming?</P99></h6><br>
<p100>

Structured programming is logical way of programming where the functionalities are divided into modules and helps write the code logically.

Object Oriented Cobol language is a Natural way of programming in which you identify the objects, and then write functions and procedures around that object.

</p100>
<h6><br><P99>13. What is the LOCAL-STORAGE SECTION?</P99></h6><br>
<p100>

Local-Storage is allocated each time the program is called and will be de-allocated when the program stops via an EXIT PROGRAM, GOBACK, or STOP RUN.
 It is defined in the DATA DIVISION after WORKING-STORAGE SECTION

</p100>
<h6><br><P99>14. What are INPUT PROCEDURE and OUTPUT PROCEDURE?</P99></h6><br>
<p100>

In the INPUT PROCEDURE, the input file is opened, records are read and edited and then are released to the sorting operation. Finally the file will be closed.

[plain]RELEASE recordname FROM inputrecord[/plain]

In the OUTPUT PROCEDURE, output file is opened, the sorted record is returned to the Output record and then the record will be written.
Finally the file will be closed.

[plain]RETURN file RECORD into outputrecord[/plain]

</p100>
<h6><br><P99>15. What is the use of LINKAGE SECTION?</P99></h6><br>
<p100>

The linkage section is used to pass data from one program to another program or to pass data from a procedure to a program. It is part of 
a called program that maps to data items in the calling program’s working storage.

</p100>
<h6><br><P99>16. What are the access modes of START statement?</P99></h6><br>
<p100>

Access modes are SEQUENTIAL or DYNAMIC for the start statement.

</p100>
<h6><br><P99>17. What is an in-line PERFORM?</P99></h6><br>
<p100>

An IN-LINE PERFORM Statement allows the routine being performed to be nested within the perform statement itself instead of being a seperate paragraph

The PERFORM and END-PERFORM statements are used to block the cobol statements between them. In line PERFORM work as long as there are 
no internal GO TOs, not even to an exit.

</p100>
<h6><br><P99>18. Which division and paragraphs are mandatory for a COBOL program?</P99></h6><br>
<p100>

Identification division and Program ID are mandatory for a COBOL program.

</p100>
<h6><br><P99>19. What is the difference between Global and External Variables?</P99></h6><br>
<p100>

Global variables are accessible only to the batch program whereas external variables can be referenced from any batch program 
residing in the same system library.

</p100>
<h6><br><P99>20. What is Pic 9v99 Indicates?</P99></h6><br>
<p100>

Pic 9v99 is a three position Numeric field with an implied or assumed decimal point after the first position.

Here,  v means an implied decimal point.

</p100>
<h6><br><P99>21. What guidelines should be followed to write a structured COBOL program?</P99></h6><br>
<p100>

Following guidelines to be following while writing Cobol program:

Use ‘EVALUATE’ statement for constructing cases.
Use scope terminators for nesting.
Use in-line Perform statement for writing ‘do’ constructions.
Use Test Before and Test After in the Perform statement while writing Do-While statements.
</p100>
<h6><br><P99>22. How do we get current date from system with century?</P99></h6><br>
<p100>

Current date with the century is achieved by using Intrinsic function called FUNCTION CURRENT-DATE.

</p100>
<h6><br><P99>23. What are all the divisions of a COBOL program?</P99></h6><br>
<p100>

There are four divisions in a cobol program:

IDENTIFICATION DIVISION
ENVIRONMENT DIVISION
DATA DIVISION
PROCEDURE DIVISION
</p100>
<h6><br><P99>24. What is a SSRANGE and NOSSRANGE?</P99></h6><br>
<p100>

These are options for a compiler to find the subscript out of range. NOSSRANGE is the default option where there will not be any run 
time error if index or subscript went out of a range.

</p100>
<h6><br><P99>25.  What is COMP-1? COMP-2?</P99></h6><br>
<p100>

COMP-1  is a Single precision floating point and uses four bytes. COMP2  is the double precision floating number and uses eight bytes.

</p100>
<h6><br><P99>26. What is the difference between PIC 9.99 and PIC9v99?</P99></h6><br>
<p100>

PIC 9.99 is a four position field that actually contains a decimal point where as PIC 9v99 is three position numeric field with assumed decimal position.

</p100>
<h6><br><P99>27. What is the Purpose of Pointer in the string?</P99></h6><br>
<p100>

The Purpose of Pointer is to specify the leftmost position within receiving field where the first transferred character will be stored.

</p100>
<h6><br><P99>28. What is binary search?</P99></h6><br>
<p100>

First, we have to compare the item to be searched with the item at the center.

If it matches, it is good to go with the value else repeat the process with the left half or the right half depending on where the item lies.

</p100>
<h6><br><P99>29. What is the difference between a binary search and a sequential search?</P99></h6><br>
<p100>

In a binary search, the table element key values will be in ascending or descending sequence. The table is ‘halved'(Divided into two) to search for equal to, 
greater than or less than conditions until the element is found.

In a sequential search, the table is searched from top to bottom, so the elements do not have to be in a specific sequence.

The binary search is much faster for more tables, while sequential Search works well with lesser ones. SEARCH ALL is used for binary search; 
SEARCH for sequential search.

</p100>
<h6><br><P99>30. Can a Search can be done on a table with or without Index?</P99></h6><br>
<p100>

No, the table must be indexed to search on a table.

</p100>
<h6><br><P99>31. What are the different rules to perform a Search?</P99></h6><br>
<p100>

The SEARCH can be applied to a table

Which has OCCURS clause
INDEXED BY phrase
Search Index must have some initial value
Set the index value to 1
</p100>
<h6><br><P99>32. Which is the default, TEST BEFORE or TEST AFTER for a PERFORM statement?</P99></h6><br>
<p100>

TEST BEFORE is the default statement and the condition is checked before executing the instructions under Perform.

</p100>
<h6><br><P99>33. What are the different rules of SORT operation?</P99></h6><br>
<p100>

SORT can be performed when

Input and Output files must remain closed
Working file must have a select clause
Input and Output files have FD entries
Work file should have short description in File Section
</p100>
<h6><br><P99>34. A table has two indexes defined. Which one will be used by the SEARCH?</P99></h6><br>
<p100>

The index named first can be used by search.

</p100>
<h6><br><P99>35. When is a scope terminator mandatory?</P99></h6><br>
<p100>

Scope terminators are mandatory for in-line PERFORMS and EVALUATE statements. Make scope terminator as explicit for good coding standards.

</p100>
<h6><br><P99>36. Why is it necessary that file needs to be opened in I-O mode for REWRITE?</P99></h6><br>
<p100>

Before the REWRITE is performed, the record must be open and read from the file. Therefore, the file must be opened in I-O mode for rewrite functionality.

</p100>
<h6><br><P99>37. How can we find that module can be called – whether DYNAMICALLY or STATICALLY?</P99></h6><br>
<p100>

The ONLY way is to look at the output of the linkage editor or the load module.

If the module is being called DYNAMICALLY then it will not exist in the main module, if it is being called STATICALLY then it will be exist in the load module.

</p100>
<h6><br><P99>38. Which Search verb is equivalent to PERFORM…VARYING?</P99></h6><br>
<p100>

The serial SEARCH verb is equivalent to Perform.. Varying statement and it is nothing but search without ALL.

</p100>
<h6><br><P99>39. How many Sections are there in Data Division?</P99></h6><br>
<p100>

There are six sections in Data Division:

File Section
Working Storage Section
Local Storage Section
Screen Section
Report Section
Linkage Section
</p100>
<h6><br><P99>40. What is the difference between comp and comp-3 usage?</P99></h6><br>
<p100>

Comp is for binary usage, while comp-3 indicates packed decimal.

</p100>
<h6><br><P99>41. What does Exit do?</P99></h6><br>
<p100>

If EXIT is used, it won’t be more than only sentence within a  paragraph.

</p100>
<h6><br><P99>42. Give some examples of command terminators?</P99></h6><br>
<p100>

End IF and End Evaluate are the examples of command terminators.

</p100>
<h6><br><P99>43. What is the difference between Call and a Link?</P99></h6><br>
<p100>

A call is an actual COBOL command which provokes an external program and returns. Link is same as Call but it does not belong to a COBOL verb.

</p100>
<h6><br><P99>44. Which mode is used to operate the sequential file?</P99></h6><br>
<p100>

An O-I mode (Output/Input mode) is used for starting and initiation of processing files. Processing of files is determined by 
successful execution of an OPEN statement.

</p100>
<h6><br><P99>45. How many bytes S(8) comp field occupy and its maximum value?</P99></h6><br>
<p100>

S(8) can store 4 bytes and the highest value is 99999999.

</p100>
<h6><br><P99>46. How arrays can be defined in COBOL?</P99></h6><br>
<p100>

Arrays can be defined as –

05 Array1 PIC X(9) which occurs 10 times

05 Array2 PIC X(9) which occurs 20 times

</p100>
<h6><br><P99>47. What are literals?</P99></h6><br>
<p100>

A literal is a data item which consists value by itself. It cannot be referred by a name. They are constant data items. There are two types of literals:

String / Alphanumeric Literals
Numeric Literals
</p100>
<h6><br><P99>48. What is a report item?</P99></h6><br>
<p100>

A report item is a field to be printed which has Edit Symbols.

</p100>
<h6><br><P99>49. Can we redefine the field of X(200) to less than 200?</P99></h6><br>
<p100>

Yes, we can redefine the values from bigger number to smaller number.

</p100>
<h6><br><P99>50. What is length is Cobol?</P99></h6><br>
<p100>

Length is like a special register to have the length of a group or an elementary item.

</p1>




	</body>
</html>

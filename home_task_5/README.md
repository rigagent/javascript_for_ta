# Practical tasks
1. Write the function propsCount(currentObject), which accepts an object and determines the number of properties of this object .


2. Create an arbitrary object that has 5 fields. It is necessary to write the showProps ( obj ) function , which accepts this object and outputs a list of its properties recorded in an array . Also enter an array of object property values .


3. Create the Person class , in which the constructor accepts the name and surname parameters , and also contains the showFullName () method, which displays the person's first and last name.
	Student class is inherited from the Person class , the constructor of which, in addition to name and surname , accepts the year parameter (year of admission to the university).
	In the Student class it is necessary to redefine the method showFullName ( middleName ) so that not only the name, surname, but also the patronymic ( middleName ) of the student is displayed.
	Also in the Student class it is necessary to implement the showCourse () method , which will display the current course of the student (from 1 to 6). The value of the course will be determined as the difference between the current year (determine independently) and the year of admission to the university .


4. Create a class Worker which will be have constructor , which accepts the following properties : fullName ( name and last name ), dayRate ( rate by day works ), workingDays ( number worked out days ).
   - the class must have a showSalary() method that will display the employee's salary. The salary is the product of the dayRate, rate by the number of days worked workingDays .
   - add a private field #experience and assign it a value of 1.2 and use it as an additional multiplier when determining the salary - create the showSalaryWithExperience() method. Output the value of the salary with this coefficient.
   - add getters and setters for the field experience . Set the value experience = 1.5 and display it on the screen.
   - output the salary value with the new experience .
   - create several instances of the class (employees) with different salaries , as shown in the example below. Sort the salary of employees with the most experience in ascending order and display the result in the format: worker _ fullName : salary_value 
   - implement dynamic sorting for any number of worker instances of the Worker class .


5. Create a parent class GeometricFigure that has an empty method to determine the area getArea() and the toString() method to output the class name.
Create 3 descendant classes Triangle , Square and Circle , which are inherited from the GeometricFigure class . Each of the child classes has its own implementation of the method getArea () to determine the area of the shape. In the constructors of the child classes, provide the properties necessary to determine the area of the figure, for example, for a circle - the radius r .
	Create an external function handleFigures ( figures ), which will accept an array of objects of child classes figures , check whether the object belongs to the parent class taking into account inheritance, output the name of the created object of the corresponding figure, the calculated area of the figure and the total area of all figures. To implement the function, you can use the reduce() method.



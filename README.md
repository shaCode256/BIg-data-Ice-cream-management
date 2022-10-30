# Sales Simulator
An operational subsystem that will be represented by a simulator that sends messages to the Kafka broker with data
Sales, as part of the big data ice cream management system.


## The essence of the solution:
A system made up of three sub-systems which together allow real-time monitoring of ice cream flavors in stock
In the branches, using Dashboard, as well as creating a prediction model, for a certain branch, what is going to be a profile
his sales on a certain day
1. Ice cream shop chain offers five flavors of ice cream: chocolate, vanilla, strawberry, lemon and halva.
2. The system aggregates the branch data and their characteristics (at least 100 branches):
• branch name
• Settlement
• Owner details
• Current stock for every ice cream flavor
3. The system will display in real time through a dashboard and appropriate graphs full of each of the flavors
in each branch (Chart Bar), the total inventory of flavors in all branches (Chart Pie) and a forecast
Sales of a certain branch for a certain taste for the coming week.
4. The system will make it possible to learn from past data about the consumption of ice cream flavors and create a future consumption forecast
From the following data:
• day in the week
• a month
• Answers
• Is it a holiday week
Weather that day (very hot, hot, pleasant, cold, very cold)
• Consumption level (for every taste):
o zero (under a kilo)
o Little (up to 20 kilos)
o Medium (up to 60 kilos)
o tall (up to 120 kilos)
o Very tall (over 120 kilos)
• Settlement size): eight values with an ordinal scale
• Type of population (Jews, Arabs, mixed).
• Age groups in the settlement (
(0-5 years old) o
o Children and youth (age 6-18)
) age 19-45) adults o
(46-55) adults o

Three subsystems are:
• *A: an operational subsystem that will be represented by a simulator that sends messages to the broker with data
Sales.

• B: Dashboards subsystem and real-time data.
o The subsystem will store in a Redis type database the status of each flavor
Ice cream in each of the branches.
o One of the screens will be used to request learning a model from subsystem C) that will prepare a set
data and transfer to BigML,) as well as it will be possible to predict consumption on the same screen
Ice cream at a certain branch, on a certain date for a certain ice cream flavor.

• C: historical data storage subsystem and background data responsible for the ELT process
:(Extract, Load, Transform)
o The subsystem will save details about the settlements in a MySQL database
and their characteristics (they must be loaded once from the links below).
o Upon arrival of a message with sales data, the current weather data will be extracted
In the settlement and inquiry about a holiday in the coming week from network services (see below), data
The message and the additional data will be saved within MongoDB as a document.
o Given an instruction, the system prepares a set of data, adding to each known event the
locality characteristics and turns to the Com.BigML service to create a tree-type prediction model
decision (see explanations in the links below).

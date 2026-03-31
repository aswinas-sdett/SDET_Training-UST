# Feature: Check the visibility of constraints
#     @correctValues
#     Scenario: No constraints showing on correct values 
#         Given User is on Homeloan page
#         When User fills in  LoanAmount as "4500000" 
#         And User fills in Tenure as "20"
#         And User fills in ROI as "10"
#         Then MonthlyEMI is "₹ 43,430"


#     @incorrectValues
#     Scenario: Constraints showing on incorrect values
#         Given User is on Homeloan page
#         When User fills in  LoanAmount as "4500000000" 
#         And User fills in Tenure as "99"
#         And User fills in ROI as "0"
#         Then LoanAmount constraint appears
#         And Tenure constraint appears
#         And ROI constraint appears
        
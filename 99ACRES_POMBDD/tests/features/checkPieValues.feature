@pie
Feature: Check the correctness of Pie Chart

    Background: Filling the form
        Given User is on Homeloan page
        When User fills in  LoanAmount as "4500000" 
        And User fills in Tenure as "20"
        And User fills in ROI as "10"
        # Ther is no submit button as form is auto-calculating
    Scenario: Check the values in pie Chart
        Then the value of Interest Amount is "56.82 %"
        And the value of Principal Amount is "43.18 %"
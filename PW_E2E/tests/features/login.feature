Feature: Login Functionality

    Scenario: Log in with valid credentials
        Given User is on login page
        When User enters username
        And User enters password
        And User clicks Login button
        Then User is logged in successfully
        And User is able to navigate to product page


    Scenario: Log in with locked out user credentials
        Given User is on login page
        When User enters locked out username
        And User enters password
        And User clicks Login button
        Then User gets error message
        And User is still on login page

    Scenario: Log in with invalid username
        Given User is on login page
        When User enters invalid username
        And User enters password
        And User clicks Login button
        Then User gets invalid username error message
        And User is still on login page

    Scenario: Log in with problem user credentials
        Given User is on login page
        When User enters problem username
        And User enters password
        And User clicks Login button
        Then User is logged in successfully
        And User is able to navigate to product page
        And The image of product is an image of a dog
# Feature: Login Functionality

    # Scenario: Log in with valid credentials
    #     Given User is on login page
    #     When User enters username
    #     And User enters password
    #     And User clicks Login button
    #     Then User is logged in successfully
    #     And User is able to navigate to product page


    # Scenario: Log in with locked out user credentials
    #     Given User is on login page
    #     When User enters locked out username
    #     And User enters password
    #     And User clicks Login button
    #     Then User gets error message
    #     And User is still on login page

    # Scenario: Log in with problem user credentials
    #     Given User is on login page
    #     When User enters problem username
    #     And User enters password
    #     And User clicks Login button
    #     Then User is logged in successfully
    #     And User is able to navigate to product page
    #     And The image of product is an image of a dog

# --------------------------------------------------------------------------------------
#OPTIMISING CODE BY ACCOMODATING VALUES INTO SINGLE CODE
# --------------------------------------------------------------------------------------


# Feature: Login Functionality

#     Scenario: Log in with valid credentials
#         Given User is on login page
#         When User enters username as "standard_user"
#         And User enters password as "secret_sauce"
#         And User clicks Login button
#         Then User is logged in successfully
#         And User is able to navigate to product page

#     Scenario: Log in with glitch user credentials
#         Given User is on login page
#         When User enters username as "performance_glitch_user"
#         And User enters password as "secret_sauce"
#         And User clicks Login button
#         Then User is logged in successfully
#         And User is able to navigate to product page

#     Scenario: Log in with problem user credentials
#         Given User is on login page
#         When User enters username as "problem_user"
#         And User enters password as "secret_sauce"
#         And User clicks Login button
#         Then User is logged in successfully
#         And User is able to navigate to product page
#         And The image of product is an image of a dog



# --------------------------------------------------------------------------------------
#OPTIMISING CODE BY UNIFYING SCENARIOS FOR DYNAMIC VALUES USING EXAMPLES
# --------------------------------------------------------------------------------------

# Feature: Login Functionality

#     Scenario Outline: Log in with different credentials
#         Given User is on login page
#         When User enters username as "<username>"
#         And User enters password as "<password>"
#         And User clicks Login button
#         Then User is logged in successfully
#         And User is able to navigate to product page
#         Examples:
#         | username                  |password               |
#         |standard_user              |secret_sauce           |
#         |locked_out_user            |secret_sauce           |
#         |performance_glitch_user    |secret_sauce           |
#         |problem_user               |secret_sauce           |
#         |error_user                 |secret_sauce           |
#         |visual_user                |secret_sauce           |


# --------------------------------------------------------------------------------------
# IMPLEMENTING DATA TABLES INSTEAD OF EXAMPLES
# --------------------------------------------------------------------------------------




Feature: Login Functionality

    Scenario: Log in with different credentials
        Given User is on login page
        When User enters username as <username> and enter <password>
            | username                  |password               |
            |standard_user              |secret_sauce           |
            |locked_out_user            |secret_sauce           |
            |performance_glitch_user    |secret_sauce           |
            |problem_user               |secret_sauce           |
            |error_user                 |secret_sauce           |
            |visual_user                |secret_sauce           |
        And User clicks Login button
        Then User is logged in successfully
        And User is able to navigate to product page
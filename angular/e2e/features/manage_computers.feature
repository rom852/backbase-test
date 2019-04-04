Feature: Editing computers

  Background:
    Given previously added 1 computers exists in table


  Scenario: User should be able to change company name of existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table
    And user clicks on last computer name
    And assert Edit computer page is opened
    And user changes COMPANY to value Timex Sinclair
    And user saves changes
    And user searches for last added computer
    And assert last added computer displayed correctly in table


  Scenario: User should be able to change introduced date of existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table
    And user clicks on last computer name
    And assert Edit computer page is opened
    And user changes INTRODUCED_DATE to value 2019-01-31
    And user saves changes
    And user searches for last added computer
    And assert last added computer displayed correctly in table


  Scenario: User should be able to change introduced date of existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table
    And user clicks on last computer name
    And assert Edit computer page is opened
    And user changes DISCONTINUED_DATE to value 2019-01-31
    And user saves changes
    And user searches for last added computer
    And assert last added computer displayed correctly in table


  Scenario: User should be able to change computer name of existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table
    And user clicks on last computer name
    And assert Edit computer page is opened
    And user changes COMPUTER_NAME to value RANDOM_COMPUTER_NAME
    And user saves changes
    And user searches for last added computer
    And assert last added computer displayed correctly in table

   @NotReady
  Scenario: User should be able to delete existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table
    And user clicks on last computer name
    And assert Edit computer page is opened
    And user deletes computer

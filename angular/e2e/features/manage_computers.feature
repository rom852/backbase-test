Feature: Adding, editing and deleting computers

  Background:
    Given previously added 1 computers exists in table


  @P0  @Working
  Scenario: User should be able to delete existing computer
    Given user opens Computers application
    And assert Computers main page is opened
    And user searches for last added computer
    And assert last added computer displayed correctly in table


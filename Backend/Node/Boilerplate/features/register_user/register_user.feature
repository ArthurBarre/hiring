Feature: User Registration
  In order to associate a fleet to a primary entity
  We need to create a user. This user will be the owner of fleets

  @critical
  Scenario Outline: I can register a user
    Given the following user data
      | id | firstName | lastName | email        | password |
      | 1  | John      | Doe      | john@doe.com | 123456   |
      | 2  | Jane      | Doe      | jane@doe.com | 654321   |
      | 3  | Jim       | Beam     | jim@beam.com | 112233   |
    When I register the user with id "<id>", first name "<firstName>", last name "<lastName>", email "<email>", and password "<password>"
    Then the user should be registered in the system with id "<id>", first name "<firstName>", last name "<lastName>", email "<email>", and password "<password>"

### User should see application main page when open application
1. Open application in browser

Expected result:
- Header exists and clickable
- Filter field and button exists
- "Add new" button exists
- table with columns Computer name,     Introduced,     Discontinued,   Company exists
- pagination bar exists

### User should see total number of computers in header
Preconditions:
- 11 computers exists in list

1. Open application in browser
Expected result:
text is present in header: "11 computers found"



### User should be able to search for existing computer: by exact match
Preconditions:
- Added computer exists in list

1. Open application in browser
2. type full computer name in search field
3. Click "Search" button

Expected result:
- searched computer displayed in the table


### User should be able to search for existing computer: by partial match
Preconditions:
- Added computer exists in list with name: "Computer №123"

1. Open application in browser
2. type part of computer name in search field:
   
 
|value|
|---|
|Com |
|com |
|om|
|№|
|123|


3. Click "Search" button

Expected result:
- searched computer displayed in the table


### User should be able to edit existing computer
Preconditions:
- Added computer exists in list

1. Open application in browser
2. Find computer in list, click on computer name
   *  >Expected result: 
      >- edit computer page is opened   
      >- fields is prefilled with current data   

3. change field **field** value and click "Save" button

|field|
|---|
|Computer name |
|Introduced |
|Discontinued|
|Company|

Expected result:
- computer exists in table with updated data

### User should be able to delete existing computer
Preconditions:
- Added computer exists in list

1. Open application in browser
2. Find computer in list, click on computer name
   *  >Expected result: 
      >- edit computer page is opened   
      >- fields is prefilled with current data   
      
3. Click "Delete" button

Expected result:
- computer deleted from the table

### User should be able to navigate between table pages
Preconditions:
- 21 computers exists in list

1. Open application in browser
   *  >Expected result: 
      >- 21 computers on 3 pages is displayed 
2. Click "Next" button on pagination bar
   *  >Expected result: 
      >- next page is displayed
3. Click "Previous" button on pagination bar
   *  >Expected result: 
      >- previous page is displayed      
      
      
### User should see error message if mandatory field "Name" is empty

### User should see field highlighted with red if types Introduced date in invalid format

### User should see field highlighted with red if types Discontinued date in invalid format

### User should see success toast after adding computer

### User should see success toast after deleting computer

### User should be able to sort computers by Computer name

### User should be able to sort computers by Introduced date

### User should be able to sort computers by Discontinued date

### User should be able to sort computers by Company

<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* build a e-commerce site that handles the inventory management process as well.
* need a customer view and a admin view
* customer view needs to handle showing products, shopping cart and payment, search functionality with error handling when the item does not exist, pics of inventory, error handling for out of stock items
* admin view needs to handle adding inventory, set prices, produce sales and business reports
*
*
*
*
<h2>
    2. Planning the Solution
</h2>
* wireframe.
* build out each component and method completely before moving on
* MVP:
* cust view components- search, product view->product display, cart view->product display
*admin view components- cost of sales reports, sales report, inventory ordering report


* Story Board:
* cust view: main product view => 
* Header- static; title, cart link, <= MVP, additional features => About page link
* products => map products, set up search bar and functionality, display each item with minimal info, have onclick that directs to a single item page to display all the details of each item.
* cart => displays each item with a count increase that updates item subtotal with error handling for inventory running out. has checkout in same view with subtotal, tax and total updating in sync with updating quantities in the cart.
*
* Styling => it's a joke shop, fun colors, fun items, animations etc. maroon and gold/yellow based colors for main theme.
* Data => took a long time to search for pics for each item...
*
<h2>
    3. Executing the Plan
</h2>
* set coding times with breaks
* work through each piece and method before moving on to the next item
* break down each component into seperate blocks to get done, continue updating step 2 with each block to add to the story board
* MVP first and then added functions if time affords
*
*
*
*
<h2>
    4. Reflection / Refactor
</h2>
* refactor the data to account for inventory qty and error handling, updated planning...
*
*
*
*reflection => context was annoying to work with, redux is preferable for passing data to components. had to work around where the data and functions were available to use. 
*
*
*
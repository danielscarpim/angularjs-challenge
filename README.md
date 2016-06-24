# AngularJS Code Challenge

## Description
This is the boilerplate project for the AngularJS Code Challenge.

## Dependencies
* NodeJS (>=0.10.0)

## Setup
* `npm install -g gulp bower`
* `npm install`
* `bower install`

## Gulp tasks

* `gulp serve` to launch a browser sync server on your source files

## Architectural Decisions [optional]

I tried not to change the project too much and I kept most of the templates and directives. However, I did change quite a few things.

### StorageService

I used ngStorage to manage data storage and I put all the methods for saving, loading and deleting data inside StorageService.js. This is pretty much the same concept I use when fetching and saving data to the server with $http. I also put some default data so you can see something before creating any accounts.

### MainController

I simplified this controller a lot, removing some unnecessary functions and variables. I merged all the accounts into one array that is loaded from StorageService. Since every account has a type property, I could use it to sort them in the view instead of using two separate arrays.
To delete an account, I passed the selected item into the erase function and used it to find the correct item in the array, without the need to use underscore or even use unique ids.

### Templates

I merged the two account templates into one, then used filters and ng-if to show/hide them in the view.

### Sidebar

I simplified the way we filter the accounts. By setting a scope variable to the desired type, I could show and hide each account type without the need for more complex functions. I used ng-class to highlight the current view.

### Balance

I created a new area, showing the total balance of all accounts combined. It is updated whenever we create or delete an account.

### Styles

I changed pretty much everything. Simplifying the markup and removing all the tables. The layout is responsible with breakpoints at 800 and 500px. At 800px and below, the sidebar goes to the top and works more like tabs.

### Testing

I didn't have time to do any tests, sorry about that.

### Possible improvements

I would love to get rid of the dialog when creating a new account, and add the new itens direcly into the list. I would also like to build a way to edit existing accounts, and also add confirmation before deleting any data.
I did all those things in [this project](https://github.com/danielscarpim/workshop-simulator).
Form validation would also be nice.
var addUserButton = document.getElementById('add-user-button');
var userTable = document.getElementById('main-table');
var index = 0;
var newUser = false;
var keys = [];

init();
addUserButton.onclick = addUser;

function init() {
	// if we have old records we should build them in correct order 
	// (next index key is always greater than previous)
	if (localStorage.length) {
		// firstly we sort our keys
		for(key in localStorage) {
			keys.push(+key);
		}
		keys.sort(sortKeys);

		// secondly we build DOM 
		for(var i = 0; i < keys.length; i++) {
			index = +keys[i];
			addUserRow(localStorage.getItem(keys[i]));
		}
	} 
	newUser = true;
}

function addUserRow(username){
	var row = document.createElement('div');

	// if it's old record we don't add it again to localStorage
	if (newUser) {
		index++;
		localStorage.setItem(index, username.toString());
	}

	var id = index;
  	row.innerHTML = '<div class="table-row">\
				<div class="table-cell user-name">' + username + '</div>\
				<div class="table-cell">\
					<button class="button edit-button">Edit</button>\
					<button class="button remove-button">Remove</button>\
				</div>\
			</div>';

	row.getElementsByClassName('edit-button')[0].onclick = function() {
		editUserName(row, id);
	};
	row.getElementsByClassName('remove-button')[0].onclick = function() {
		removeUser(userTable, row, id);
	};
  	
  	userTable.appendChild(row);
}

/*
	ADD NEW USER
	--------------------------
*/
function addUserPromise() {
	return new Promise(function(resolve, reject) {
		var name = prompt('Please input username', '');
		if (name == null) return;
		if (name) {
			resolve(name);
		} else {
			reject('Error!');
		}
	});
}

function addUser() {
	addUserPromise()
		.then(function(e) {
			addUserRow(e);
		})
		.catch(function(e) {
	    	alert('Please, fill user name.');
	    });
}

/*
	REMOVE USER
	--------------------------
*/
function removeUserPromise() {
	return new Promise(function(resolve, reject) {
		var result = confirm('Do you really want to remove this user?');
		if (result) {
			resolve();
		} 
	});
}

function removeUser(parent, childElem, userId) {
	removeUserPromise().
		then(function() {
			parent.removeChild(childElem);
			localStorage.removeItem(userId);
		});
}

/*
	EDIT USERNAME
	--------------------------
*/
function editUserPromise(userId) {
	return new Promise(function(resolve, reject) {
		var newName = prompt('Edit username:', localStorage.getItem(userId));
		if (newName == null) return;
		if (newName) {
			resolve(newName);
		} else {
			reject('Error!');
		}
	});
}

function editUserName(row, userId) {
	editUserPromise(userId)
		.then(function(e) {
			row.getElementsByClassName('user-name')[0].innerHTML = e;
			localStorage.setItem(userId, e);
		})
		.catch(function(e) {
	    	alert('Please, fill user name.');
	    });
}

function sortKeys(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

# Amalgam API JavaScript library
This library provides access to Amalgam blockchain from JavaScript applications.

# Install
```
$ npm install amalgam-js --save
```

Here is full documentation:
https://github.com/amalgam-blockchain/amalgam-js/tree/master/doc

## Browser 
```html 
<script src="./amalgam.min.js"></script>
<script>
amalgam.api.findAccounts(['account1', 'account2'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.jsdelivr.net/npm/amalgam-js/dist/amalgam.min.js<br/>
```html
<script src="https://cdn.jsdelivr.net/npm/amalgam-js/dist/amalgam.min.js"></script>
```

## Server

https://api.amalgam.money By Default

## Examples
### Get Accounts
```js
amalgam.api.findAccounts(['account1', 'account2'], function(err, result) {
	console.log(err, result);
});
```

## Issues
When you find issues, please report them!

## License
MIT

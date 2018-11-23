# Documentation

- [Install](#install)
- [Browser](#browser)
- [Config](#config)
- [Database API](#database-api)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Accounts](#accounts)
    - [Authority / validation](#authority--validation)
    - [Witnesses](#witnesses)
- [Account By Key API](#account-by-key-api)
- [Network Broadcast API](#network-broadcast-api)
- [Market API](#market-api)
- [Operations](#operations)
- [Auth](#auth)
- [Formatter](#formatter)
- [Utils](#utils)

# Install
```
$ npm install git+https://github.com/amalgam-blockchain/amalgam-js --save
```

# Browser 
```html 
<script src="./amalgam.min.js"></script>
<script>
amalgam.api.getAccounts(['account1', 'account2'], function(err, response){
    console.log(err, response);
});
</script>
```

# Config
Default config should work with Amalgam. However you can change it to work with local node as 
```js
amalgam.api.setOptions({ url: 'http://127.0.0.1:8090' });
```
Both WebSocket (ws/wss) and JSON-RPC (http/https) protocols are supported to connect to nodes.

### set
```
amalgam.config.set('address_prefix','AML');
```
### get
```
amalgam.config.get('chain_id');
```

# Database API

## Blocks and transactions

### Get Block Header
```
amalgam.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
amalgam.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
amalgam.api.getTransaction(id, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
amalgam.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Version
```
amalgam.api.getVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
amalgam.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
amalgam.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Witness Schedule
```
amalgam.api.getWitnessSchedule(function(err, result) {
  console.log(err, result);
});
```
### Get Reserve Ratio
```
amalgam.api.getReserveRatio(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Properties
```
amalgam.api.getHardforkProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Current Price Feed
```
amalgam.api.getCurrentPriceFeed(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
amalgam.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```

## Accounts

### List Accounts
```
amalgam.api.listAccounts(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var searchAccountsQuery = 'acc';
var limitResults = 10;
var orderBy = 'by_name';
amalgam.api.listAccounts(searchAccountsQuery, limitResults, orderBy, function(err, result) {
  if (!err) {
    result.forEach(function(item) {
      console.log('listAccounts', 'username: [', item, ']');
    });
  }
  else console.error(err);
});
```
### Find Accounts
```
amalgam.api.findAccounts(accounts, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var accounts = ['account1', 'account2'];
amalgam.api.findAccounts(accounts, function(err, result) {
  if (!err) {
    result.forEach(function(item) {
      console.log('findAccounts', 'username: [', item.name, '] id: [', item.id, ']');
    });
  }
  else console.error(err);
});
```
### Get Account Count
```
amalgam.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
amalgam.api.getAccountHistory(account, start, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Bandwidth
```
amalgam.api.getAccountBandwidth(account, type, function(err, result) {
  console.log(err, result);
});
### List Owner Histories
```
amalgam.api.listOwnerHistories(start, limit, function(err, result) {
  console.log(err, result);
});
```
### Find Owner Histories
```
amalgam.api.findOwnerHistories(owner, function(err, result) {
  console.log(err, result);
});
```
### List Account Recovery Requests
```
amalgam.api.listAccountRecoveryRequests(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Account Recovery Requests
```
amalgam.api.findAccountRecoveryRequests(accounts, function(err, result) {
  console.log(err, result);
});
```
### List Change Recovery Account Requests
```
amalgam.api.listChangeRecoveryAccountRequests(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Change Recovery Account Requests
```
amalgam.api.findChangeRecoveryAccountRequests(accounts, function(err, result) {
  console.log(err, result);
});
```
### List Escrows
```
amalgam.api.listEscrows(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Escrows
```
amalgam.api.findEscrows(from, function(err, result) {
  console.log(err, result);
});
```
### Get Escrow
```
amalgam.api.getEscrow(from, escrow_id, function(err, result) {
  console.log(err, result);
});
```
### List Withdraw Vesting Routes
```
amalgam.api.listWithdrawVestingRoutes(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Withdraw Vesting Routes
```
amalgam.api.findWithdrawVestingRoutes(account, order, function(err, result) {
  console.log(err, result);
});
```
### List Savings Withdrawals
```
amalgam.api.listSavingsWithdrawals(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Savings Withdrawals From
```
amalgam.api.findSavingsWithdrawalsFrom(account, function(err, result) {
  console.log(err, result);
});
```
### Find Savings Withdrawals To
```
amalgam.api.findSavingsWithdrawalsTo(account, function(err, result) {
  console.log(err, result);
});
```
### List Vesting Delegations
```
amalgam.api.listVestingDelegations(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Vesting Delegations
```
amalgam.api.findVestingDelegations(account, function(err, result) {
  console.log(err, result);
});
```
### List Vesting Delegation Expirations
```
amalgam.api.listVestingDelegationExpirations(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Vesting Delegation Expirations
```
amalgam.api.findVestingDelegationExpirations(account, function(err, result) {
  console.log(err, result);
});
```
### List ABD Conversion Requests
```
amalgam.api.listAbdConversionRequests(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find ABD Conversion Requests
```
amalgam.api.findAbdConversionRequests(account, function(err, result) {
  console.log(err, result);
});
```
### List Decline Voting Rights Requests
```
amalgam.api.listDeclineVotingRightsRequests(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Decline Voting Rights Requests
```
amalgam.api.findDeclineVotingRightsRequests(accounts, function(err, result) {
  console.log(err, result);
});
```
### List Limit Orders
```
amalgam.api.listLimitOrders(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Limit Orders
```
amalgam.api.findLimitOrders(account, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
amalgam.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
amalgam.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
amalgam.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
amalgam.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
amalgam.api.verifyAccountAuthority(account, signers, function(err, result) {
  console.log(err, result);
});
```
### Verify Signatures
```
amalgam.api.verifySignatures(hash, signatures, requiredOwner, requiredActive, requiredPosting, requiredOther, function(err, result) {
  console.log(err, result);
});
```

## Witnesses

### List Witnesses
```
amalgam.api.listWitnesses(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Find Witnesses
```
amalgam.api.findWitnesses(owners, function(err, result) {
  console.log(err, result);
});
```
### List Witness Votes
```
amalgam.api.listWitnessVotes(start, limit, order, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Votes By Account
```
amalgam.api.getWitnessVotesByAccount(account, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Votes By Witness
```
amalgam.api.getWitnessVotesByWitness(account, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
amalgam.api.getWitnessesByVote(account, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
amalgam.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
amalgam.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```

# Account By Key API

### Get Key References
```
amalgam.api.getKeyReferences(keys, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
var publicKeys = ['AML...', 'AML...'];
amalgam.api.getKeyReferences(publicKeys, function(err, result) {
  if (!err) {
    result.forEach(function(item) {
      console.log('getKeyReferences', 'username: [', item[0], ']');
    });
  }
  else console.error(err);
});
```

# Network Broadcast API

### Broadcast Transaction
```
amalgam.api.broadcastTransaction(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Transaction Synchronous
```
amalgam.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
amalgam.api.broadcastBlock(block, function(err, result) {
  console.log(err, result);
});
```

# Market API

### Get Ticker
```
amalgam.api.getTicker(function(err, result) {
  console.log(err, result);
});
```
### Get Volume
```
amalgam.api.getVolume(function(err, result) {
  console.log(err, result);
});
```
### Get Order Book
```
amalgam.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Trade History
```
amalgam.api.getTradeHistory(start, end, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Recent Trades
```
amalgam.api.getRecentTrades(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Market History
```
amalgam.api.getMarketHistory(bucketSeconds, start, end, function(err, result) {
  console.log(err, result);
});
```
### Get Market History Buckets
```
amalgam.api.getMarketHistoryBuckets(function(err, result) {
  console.log(err, result);
});
```

# Operations

### Account Create
```
amalgam.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * accountCreate() new account registration
 * @param {Base58} wif - private active key
 * @param {String} fee - the cost of creating an account. It will be listed by virtue of the voice of the new account
 * @param {String} creator - name of user who registers an account
 * @param {String} newAccountName - new account username
 * @param {Object} owner - object containing a new owner key
 * @param {Object} active - object containing a active key
 * @param {Object} posting - object containing a posting key
 * @param {String} memoKey - new memo key
 * @param {String} jsonMetadata - additional data for a new account (avatar, location, etc.)
*/
var wif = '5K...';
var fee = '90.000 AML';
var creator = 'account1';
var newAccountName = name;
var owner = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.owner, 1]]
};
var active = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.active, 1]]
};
var posting = {
  weight_threshold: 1,
  account_auths: [],
  key_auths: [[newKeys.posting, 1]]
};
var memoKey = newKeys.memo;
var jsonMetadata = '{}';
amalgam.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  if (!err) {
    console.log('accountCreate', result);
  }
  else console.error(err);
});
```
### Delegate Vesting Shares
```
amalgam.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
amalgam.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
amalgam.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
amalgam.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
amalgam.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
amalgam.broadcast.convert(wif, owner, requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
amalgam.broadcast.custom(wif, requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
amalgam.broadcast.customBinary(wif, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
amalgam.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Escrow Dispute
```
amalgam.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
amalgam.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, abdAmount, amalgamAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
amalgam.broadcast.escrowTransfer(wif, from, to, agent, escrowId, abdAmount, amalgamAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
amalgam.broadcast.feedPublish(wif, publisher, exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
amalgam.broadcast.limitOrderCancel(wif, owner, orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
amalgam.broadcast.limitOrderCreate(wif, owner, orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
amalgam.broadcast.limitOrderCreate2(wif, owner, orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
amalgam.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
amalgam.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
amalgam.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
amalgam.broadcast.setWithdrawVestingRoute(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
amalgam.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
#### Example:
```js
/**
 * transfer() transfer amalgam or amalgam gold
 * @param {Base58} wif - private owner key
 * @param {String} from - username who send, whose owner key
 * @param {String} to - username who get
 * @param {String} amount - number of coins in the format: 0.001 AML
 * @param {String} memo - a comment
*/
var wif = '5J...';
var from = 'account1';
var to = 'account2';
var amount = '0.001 AML';
var memo = 'gift';
amalgam.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  if (!err) {
    console.log('transfer', result);
  }
  else console.error(err);
});
```
### Transfer To Vesting
```
amalgam.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
amalgam.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
amalgam.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Witness Set Properties
```
amalgam.broadcast.witnessSetProperties(wif, owner, props, extensions, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
amalgam.broadcast.transferToSavings(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
amalgam.broadcast.transferFromSavings(wif, from, requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
amalgam.broadcast.cancelTransferFromSavings(wif, from, requestId, function(err, result) {
  console.log(err, result);
});
```

# Auth

### Verify
```
amalgam.auth.verify(name, password, auths);
```
#### Example:
```js
var username = 'account1';
var password = 'P5...';  // master password
// object in which the key type public key (active, memo, owner, posting), and the value of the array in the array itself is the public key
var auths = {
  posting: [['AML...']]
};
var verifyResult = amalgam.auth.verify(username, password, auths);
console.log('verify', verifyResult);
```

### Generate Keys
```
amalgam.auth.generateKeys(name, password, roles);
```
#### Example:
```js
/**
 * generateKeys() generating new keys for a new account
 * @param {String} name - new account username
 * @param {String} password - master-password for a new account
*/
var name = 'account1';
var password = 'qwerty12345';
var newKeys = amalgam.auth.generateKeys(name, password, ['owner', 'active', 'posting', 'memo']);
console.log('newKeys', newKeys);
```

### Get Private Keys
```
amalgam.auth.getPrivateKeys(name, password, roles);
```
#### Example:
```js
var username = 'account1';
var password = 'P5H...'; // master password
var roles = ['owner', 'active', 'posting', 'memo']; // optional parameter, if not specify, then all keys will return
var keys = amalgam.auth.getPrivateKeys(username, password, roles);
console.log('getPrivateKeys', keys);
```

### Is Wif
```
amalgam.auth.isWif(privWif);
```
#### Example:
```js
var privWif = '5J...';
var resultIsWif = amalgam.auth.isWif(privWif);
console.log('isWif', resultIsWif);
```

### To Wif
```
amalgam.auth.toWif(name, password, role);
```
#### Example:
```js
var username = 'account1';
var password = 'P5H...'; // master password
var role = 'posting'; // private key type, one of owner, active, posting, memo
var privateKey = amalgam.auth.toWif(username, password, role);
console.log('toWif', privateKey);
```

### Wif Is Valid
```
amalgam.auth.wifIsValid(privWif, pubWif);
```
#### Example:
```js
var privWif = '5J...'; // private key
var pubWif = 'AML...'; // public key
var resultWifIsValid = amalgam.auth.wifIsValid(privWif, pubWif);
console.log('wifIsValid', resultWifIsValid);
```

### Wif To Public
```
amalgam.auth.wifToPublic(privWif);
```
#### Example:
```js
var privWif = '5J...'; // private key
var resultWifToPublic = amalgam.auth.wifToPublic(privWif, pubWif);
console.log('wifToPublic', resultWifToPublic);
```

### Sign Transaction
```
amalgam.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```
var password = amalgam.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

### Vest To Amalgam
```
var amalgamPower = amalgam.formatter.vestToAmalgam(vestingShares, totalVestingShares, totalVestingFundAmalgam);
console.log(amalgamPower);
```

# Utils

### Validate Username
```
var isValidUsername = amalgam.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = amalgam.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```

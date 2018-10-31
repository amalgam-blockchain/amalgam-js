module.exports = [
  {
    "roles": ["active", "owner"],
    "operation": "transfer",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_to_vesting",
    "params": [
      "from",
      "to",
      "amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "withdraw_vesting",
    "params": [
      "account",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_create",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "min_to_receive",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_cancel",
    "params": [
      "owner",
      "orderid"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "feed_publish",
    "params": [
      "publisher",
      "exchange_rate"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "convert",
    "params": [
      "owner",
      "requestid",
      "amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_create",
    "params": [
      "fee",
      "creator",
      "new_account_name",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_update",
    "params": [
      "account",
      "owner",
      "active",
      "posting",
      "memo_key",
      "json_metadata"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "witness_update",
    "params": [
      "owner",
      "url",
      "block_signing_key",
      "props",
      "fee"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_witness_vote",
    "params": [
      "account",
      "witness",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "account_witness_proxy",
    "params": [
      "account",
      "proxy"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "custom",
    "params": [
      "required_auths",
      "id",
      "data"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_json",
    "params": [
      "required_auths",
      "required_posting_auths",
      "id",
      "json"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "set_withdraw_vesting_route",
    "params": [
      "from_account",
      "to_account",
      "percent",
      "auto_vest"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "limit_order_create2",
    "params": [
      "owner",
      "orderid",
      "amount_to_sell",
      "exchange_rate",
      "fill_or_kill",
      "expiration"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "request_account_recovery",
    "params": [
      "recovery_account",
      "account_to_recover",
      "new_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "recover_account",
    "params": [
      "account_to_recover",
      "new_owner_authority",
      "recent_owner_authority",
      "extensions"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "change_recovery_account",
    "params": [
      "account_to_recover",
      "new_recovery_account",
      "extensions"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_transfer",
    "params": [
      "from",
      "to",
      "agent",
      "escrow_id",
      "abd_amount",
      "amalgam_amount",
      "fee",
      "ratification_deadline",
      "escrow_expiration",
      "json_meta"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_dispute",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_release",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "receiver",
      "escrow_id",
      "abd_amount",
      "amalgam_amount"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "escrow_approve",
    "params": [
      "from",
      "to",
      "agent",
      "who",
      "escrow_id",
      "approve"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_to_savings",
    "params": [
      "from",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "transfer_from_savings",
    "params": [
      "from",
      "request_id",
      "to",
      "amount",
      "memo"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "cancel_transfer_from_savings",
    "params": [
      "from",
      "request_id"
    ]
  },
  {
    "roles": ["posting", "active", "owner"],
    "operation": "custom_binary",
    "params": [
      "id",
      "data"
    ]
  },
  {
    "roles": ["owner"],
    "operation": "decline_voting_rights",
    "params": [
      "account",
      "decline"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "delegate_vesting_shares",
    "params": [
      "delegator",
      "delegatee",
      "vesting_shares"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd1",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd2",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd3",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd4",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd5",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd6",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd7",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd8",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd9",
    "params": [
      "from"
    ]
  },
  {
    "roles": ["active", "owner"],
    "operation": "tbd10",
    "params": [
      "from"
    ]
  }
];

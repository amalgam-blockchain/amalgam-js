export default [
    {
      "api": "database_api",
      "method": "get_block_header",
      "params": ["block_num"]
    },
    {
      "api": "database_api",
      "method": "get_block",
      "params": ["block_num"]
    },
    {
      "api": "database_api",
      "method": "get_ops_in_block",
      "params": ["block_num", "only_virtual"]
    },
    {
      "api": "database_api",
      "method": "get_transaction",
      "params": ["id"]
    },
    {
      "api": "database_api",
      "method": "get_config"
    },
    {
      "api": "database_api",
      "method": "get_version"
    },
    {
      "api": "database_api",
      "method": "get_dynamic_global_properties"
    },
    {
      "api": "database_api",
      "method": "get_chain_properties"
    },
    {
      "api": "database_api",
      "method": "get_witness_schedule"
    },
    {
      "api": "database_api",
      "method": "get_reserve_ratio"
    },
    {
      "api": "database_api",
      "method": "get_hardfork_properties"
    },
    {
      "api": "database_api",
      "method": "get_current_price_feed"
    },
    {
      "api": "database_api",
      "method": "get_feed_history"
    },
    {
      "api": "database_api",
      "method": "list_witnesses",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_witnesses",
      "params": ["owners"]
    },
    {
      "api": "database_api",
      "method": "get_active_witnesses"
    },
    {
      "api": "database_api",
      "method": "list_accounts",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_accounts",
      "params": ["accounts"]
    },
    {
      "api": "database_api",
      "method": "get_account_history",
      "params": ["account", "start", "limit"]
    },
    {
      "api": "database_api",
      "method": "get_account_bandwidth",
      "params": ["account", "type"]
    },
    {
      "api": "database_api",
      "method": "list_owner_histories",
      "params": ["start", "limit"]
    },
    {
      "api": "database_api",
      "method": "find_owner_histories",
      "params": ["owner_auths"]
    },
    {
      "api": "database_api",
      "method": "list_account_recovery_requests",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_account_recovery_requests",
      "params": ["accounts"]
    },
    {
      "api": "database_api",
      "method": "list_change_recovery_account_requests",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_change_recovery_account_requests",
      "params": ["requests"]
    },
    {
      "api": "database_api",
      "method": "list_escrows",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_escrows",
      "params": ["escrows"]
    },
    {
      "api": "database_api",
      "method": "list_withdraw_vesting_routes",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_withdraw_vesting_routes",
      "params": ["routes"]
    },
    {
      "api": "database_api",
      "method": "list_savings_withdrawals",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_savings_withdrawals",
      "params": ["withdrawals"]
    },
    {
      "api": "database_api",
      "method": "list_vesting_delegations",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_vesting_delegations",
      "params": ["delegations"]
    },
    {
      "api": "database_api",
      "method": "list_vesting_delegation_expirations",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_vesting_delegation_expirations",
      "params": ["delegations"]
    },
    {
      "api": "database_api",
      "method": "list_abd_conversion_requests",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_abd_conversion_requests",
      "params": ["requests"]
    },
    {
      "api": "database_api",
      "method": "list_decline_voting_rights_requests",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_decline_voting_rights_requests",
      "params": ["requests"]
    },
    {
      "api": "database_api",
      "method": "list_limit_orders",
      "params": ["start", "limit", "order"]
    },
    {
      "api": "database_api",
      "method": "find_limit_orders",
      "params": ["orders"]
    },
    {
      "api": "database_api",
      "method": "get_transaction_hex",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "get_required_signatures",
      "params": ["trx", "available_keys"]
    },
    {
      "api": "database_api",
      "method": "get_potential_signatures",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_authority",
      "params": ["trx"]
    },
    {
      "api": "database_api",
      "method": "verify_account_authority",
      "params": ["account", "signers"]
    },
    {
      "api": "database_api",
      "method": "verify_signatures",
      "params": ["hash", "signatures", "required_owner", "required_active", "required_posting", "required_other"]
    },
    {
      "api": "account_by_key_api",
      "method": "get_key_references",
      "params": ["key"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_transaction",
      "params": ["trx"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_transaction_synchronous",
      "params": ["trx"]
    },
    {
      "api": "network_broadcast_api",
      "method": "broadcast_block",
      "params": ["block"]
    },
    {
      "api": "market_history_api",
      "method": "get_ticker"
    },
    {
      "api": "market_history_api",
      "method": "get_volume"
    },
    {
      "api": "market_history_api",
      "method": "get_order_book",
      "params": ["limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_trade_history",
      "params": ["start", "end", "limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_recent_trades",
      "params": ["limit"]
    },
    {
      "api": "market_history_api",
      "method": "get_market_history",
      "params": ["bucket_seconds" , "start", "end"]
    },
    {
      "api": "market_history_api",
      "method": "get_market_history_buckets"
    }
];

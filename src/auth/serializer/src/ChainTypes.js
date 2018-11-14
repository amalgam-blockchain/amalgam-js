var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations= {
    transfer: 0,
    transfer_to_vesting: 1,
    withdraw_vesting: 2,
    limit_order_create: 3,
    limit_order_cancel: 4,
    feed_publish: 5,
    convert: 6,
    account_create: 7,
    account_update: 8,
    witness_update: 9,
    account_witness_vote: 10,
    account_witness_proxy: 11,
    custom: 12,
    custom_json: 13,
    set_withdraw_vesting_route: 14,
    limit_order_create2: 15,
    request_account_recovery: 16,
    recover_account: 17,
    change_recovery_account: 18,
    escrow_transfer: 19,
    escrow_dispute: 20,
    escrow_release: 21,
    escrow_approve: 22,
    transfer_to_savings: 23,
    transfer_from_savings: 24,
    cancel_transfer_from_savings: 25,
    custom_binary: 26,
    decline_voting_rights: 27,
    delegate_vesting_shares: 28,
    witness_set_properties: 29,
    tbd1: 30,
    tbd2: 31,
    tbd3: 32,
    tbd4: 33,
    tbd5: 34,
    tbd6: 35,
    tbd7: 36,
    tbd8: 37,
    tbd9: 38,
    tbd10: 39,
    fill_convert_request: 40,
    interest: 41,
    fill_vesting_withdraw: 42,
    fill_order: 43,
    fill_transfer_from_savings: 44,
    hardfork: 45,
    return_vesting_delegation: 46,
    producer_reward_operation: 47,
    clear_null_account_balance_operation: 48
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};

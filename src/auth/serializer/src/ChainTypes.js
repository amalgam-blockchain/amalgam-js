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
    tbd1: 29,
    tbd2: 30,
    tbd3: 31,
    tbd4: 32,
    tbd5: 33,
    tbd6: 34,
    tbd7: 35,
    tbd8: 36,
    tbd9: 37,
    tbd10: 38,
    fill_convert_request: 39,
    interest: 40,
    fill_vesting_withdraw: 41,
    fill_order: 42,
    shutdown_witness: 43,
    fill_transfer_from_savings: 44,
    hardfork: 45,
    return_vesting_delegation: 46,
    producer_reward_operation: 47
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};

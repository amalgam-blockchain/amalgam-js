import get from "lodash/get";
import { key_utils } from "./auth/ecc";

module.exports = amalgamAPI => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function vestingAmalgam(account, gprops) {
    const vests = parseFloat(account.vesting_shares.split(" ")[0]);
    const total_vests = parseFloat(gprops.total_vesting_shares.split(" ")[0]);
    const total_vest_amalgam = parseFloat(
      gprops.total_vesting_fund_amalgam.split(" ")[0]
    );
    const vesting_amalgamf = total_vest_amalgam * (vests / total_vests);
    return vesting_amalgamf;
  }

  function processOrders(open_orders, assetPrecision) {
    const abdOrders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("AMLD") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    const amalgamOrders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("AML") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    return { amalgamOrders, abdOrders };
  }

  function calculateSaving(savings_withdraws) {
    let savings_pending = 0;
    let savings_abd_pending = 0;
    savings_withdraws.forEach(withdraw => {
      const [amount, asset] = withdraw.amount.split(" ");
      if (asset === "AML") savings_pending += parseFloat(amount);
      else {
        if (asset === "AMLD") savings_abd_pending += parseFloat(amount);
      }
    });
    return { savings_pending, savings_abd_pending };
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    vestToAmalgam: function(
      vestingShares,
      totalVestingShares,
      totalVestingFundAmalgam
    ) {
      return (
        parseFloat(totalVestingFundAmalgam) *
        (parseFloat(vestingShares) / parseFloat(totalVestingShares))
      );
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + " " + asset;
    },
    numberWithCommas,
    vestingAmalgam,
    createSuggestedPassword
  };
};

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

  function estimateAccountValue(
    account,
    { gprops, feed_price, open_orders, savings_withdraws, vesting_amalgam } = {}
  ) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;
    let orders, savings;

    if (!vesting_amalgam || !feed_price) {
      if (!gprops || !feed_price) {
        promises.push(
          amalgamAPI.getStateAsync(`/@{username}`).then(data => {
            gprops = data.props;
            feed_price = data.feed_price;
            vesting_amalgam = vestingAmalgam(account, gprops);
          })
        );
      } else {
        vesting_amalgam = vestingAmalgam(account, gprops);
      }
    }

    if (!open_orders) {
      promises.push(
        amalgamAPI.getOpenOrdersAsync(username).then(open_orders => {
          orders = processOrders(open_orders, assetPrecision);
        })
      );
    } else {
      orders = processOrders(open_orders, assetPrecision);
    }

    if (!savings_withdraws) {
      promises.push(
        amalgamAPI
          .getSavingsWithdrawFromAsync(username)
          .then(savings_withdraws => {
            savings = calculateSaving(savings_withdraws);
          })
      );
    } else {
      savings = calculateSaving(savings_withdraws);
    }

    return Promise.all(promises).then(() => {
      let price_per_amalgam = undefined;
      const { base, quote } = feed_price;
      if (/ AMLD$/.test(base) && / AML$/.test(quote))
        price_per_amalgam = parseFloat(base.split(" ")[0]);
      const savings_balance = account.savings_balance;
      const savings_abd_balance = account.savings_abd_balance;
      const balance_amalgam = parseFloat(account.balance.split(" ")[0]);
      const saving_balance_amalgam = parseFloat(savings_balance.split(" ")[0]);
      const abd_balance = parseFloat(account.abd_balance);
      const abd_balance_savings = parseFloat(savings_abd_balance.split(" ")[0]);

      let conversionValue = 0;
      const currentTime = new Date().getTime();
      (account.other_history || []).reduce((out, item) => {
        if (get(item, [1, "op", 0], "") !== "convert") return out;

        const timestamp = new Date(get(item, [1, "timestamp"])).getTime();
        const finishTime = timestamp + 86400000 * 3.5; // add 3.5day conversion delay
        if (finishTime < currentTime) return out;

        const amount = parseFloat(
          get(item, [1, "op", 1, "amount"]).replace(" AMLD", "")
        );
        conversionValue += amount;
      }, []);

      const total_abd =
        abd_balance +
        abd_balance_savings +
        savings.savings_abd_pending +
        orders.abdOrders +
        conversionValue;

      const total_amalgam =
        vesting_amalgam +
        balance_amalgam +
        saving_balance_amalgam +
        savings.savings_pending +
        orders.amalgamOrders;

      return (total_amalgam * price_per_amalgam + total_abd).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    reputation: function(reputation) {
      if (reputation == null) return reputation;
      reputation = parseInt(reputation);
      let rep = String(reputation);
      const neg = rep.charAt(0) === "-";
      rep = neg ? rep.substring(1) : rep;
      const str = rep;
      const leadingDigits = parseInt(str.substring(0, 4));
      const log = Math.log(leadingDigits) / Math.log(10);
      const n = str.length - 1;
      let out = n + (log - parseInt(log));
      if (isNaN(out)) out = 0;
      out = Math.max(out - 9, 0);
      out = (neg ? -1 : 1) * out;
      out = out * 9 + 25;
      out = parseInt(out);
      return out;
    },

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

    commentPermlink: function(parentAuthor, parentPermlink) {
      const timeStr = new Date()
        .toISOString()
        .replace(/[^a-zA-Z0-9]+/g, "")
        .toLowerCase();
      parentPermlink = parentPermlink.replace(/(-\d{8}t\d{9}z)/g, "");
      return "re-" + parentAuthor + "-" + parentPermlink + "-" + timeStr;
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + " " + asset;
    },
    numberWithCommas,
    vestingAmalgam,
    estimateAccountValue,
    createSuggestedPassword
  };
};

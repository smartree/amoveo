//use market:teset3() to generate this compiled binary.

function market_key(market_id, expires, server_pubkey, period, oid){
    return ["market", 1, market_id, expires, server_pubkey, period, oid];
}
function market_contract(direction, expires, maxprice, server_pubkey, period, amount, oid, bet_height) {
  //var a = string_to_array(atob("AAAAJxAAAAAAAXgA"));
    var a;
    var a2 = string_to_array(atob("AAAAAAJ4AA=="));
    var b = string_to_array(atob("AAAAAAN4AA=="));
    var c = string_to_array(atob("AAAAAAR4AA=="));
    var d = string_to_array(atob("AAAAAAV4AA=="));
    var e = string_to_array(atob("AAAAAAZ4AgAAAEE="));
    var f;
    if (direction == 1) {
        a = string_to_array(atob("AAAAJxAAAAAAAXgA"));
        f = string_to_array(atob("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"));
    } else if (direction == 2) {
        a = string_to_array(atob("AAAAAAAAAAAAAXgA"));
        f = string_to_array(atob("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"));
    } else {
        console.log("that is an invalid direction");
        console.log(direction);
        return("invalid direction to bet");
    }
    var g = a.concat(
        integer_to_array(bet_height, 4)).concat(
            a2).concat(
                integer_to_array(expires, 4)).concat(
                    b).concat(
                        integer_to_array(maxprice, 4)).concat(
                            c).concat(
                                integer_to_array(oid, 4)).concat(
                                    d).concat(
                                        integer_to_array(period, 4)).concat(
                                            e).concat(
                                                string_to_array(atob(server_pubkey))).concat(
                                                    f);
    console.log("compiled contract");
    console.log(JSON.stringify(g));
    var contract =  btoa(array_to_string(g));
    var codekey = market_key(oid, expires, server_pubkey, period, oid);
    return new_bet(contract, codekey, amount, [-7, direction, maxprice]);
}
function new_bet(code, key, amount, meta) {
    //key is insttructions on how to re-create the contract, so we can do pattern matching when updating channels.
    return ["bet", code, amount, key, meta];
}

function market_trade(cd, amount, price, bet, oid) {
                //var code_key = market_key(oid_final, expires, my_pubkey, period, oid_final);
    var market_spk = cd.me;
    console.log("market trade spk before ");
    console.log(JSON.stringify(market_spk));
    var cid = market_spk[6];
    var time_limit = 10000;//actually constants:time_limit div 10
    var space_limit = 100000;
    var cGran = 10000;
    var a = Math.floor((amount * price) / cGran);
    market_spk[3][0] = bet;
    market_spk[3] = ([-6]).concat(market_spk[3]);//add new bet to front
    market_spk[8] = market_spk[8] + 1; //nonce
    market_spk[5] = market_spk[5] + time_limit;// time_gas/10
    market_spk[4] = Math.max(market_spk[4], space_limit); //space_gas
    market_spk[7] = market_spk[7] - a; //amount
    console.log("market trade spk after ");
    console.log(JSON.stringify(market_spk));
    return market_spk;
}

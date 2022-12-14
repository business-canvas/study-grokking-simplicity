// data
const subscriber = {
  email: "sam@pmail.com",
  rec_count: 16
}

// data
const rank1 = "best"
const rank2 = "good"
const rank3 = "bad"

// calculation
function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) {
    return rank1
  } else {
    return rank2
  }
}

// data
const coupon = {
  code: "10PERCENT",
  rank: rank3
}

// calculation
function selectCouponsByRank(coupons, rank) {
  const ret = []
  for (let c = 0; c < coupons.length; c++) {
    const coupon = coupons[c]
    if (coupon.rank === rank) {
      ret.push(coupon.code)
    }
  }
  return ret
}

// data
const message = {
  from: "newsletter@coupondog.co",
  to: "sam@pmail.com",
  subject: "Your weekly coupons inside",
  body: "Here are your coupons ..."
}

// calculation
function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber)
  if (rank === rank1) {
    return {
      from: "newsletter@coupondog.co",
      to: "sam@pmail.com",
      subject: "Your weekly coupons inside",
      body: "Here are your coupons: " + bests.join(", ")
    }
  } else {
    return {
      from: "newsletter@coupondog.co",
      to: "sam@pmail.com",
      subject: "Your weekly coupons inside",
      body: "Here are your coupons: " + goods.join(", ")
    }
  }
}

// calculation
function emailsForSubscribers(subscribers, goods, bests) {
  const emails = []
  for (let s = 0; s < subscribers.length; s++) {
    const subscriber = subscribers[s]
    const email = emailForSubscriber(subscriber, goods, bests)
    emails.push(email)
  }
  return emails
}

// action
function sendIssue() {
  const coupons = fetchCouponFromDB()
  const goodCoupons = selectCouponsByRank(coupons, rank2)
  const bestCoupons = selectCouponsByRank(coupons, rank1)
  const subscribers = fetchSubscribersFromDB()
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons)
  for (let e = 0; e < emails.length; e++) {
    const email = emails[e]
    eamilSystem.send(email)
  }
}

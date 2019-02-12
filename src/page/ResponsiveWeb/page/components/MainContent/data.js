export const product01 = {
  title: '固定期限产品',
  titleEm: ['甄选优质基金', '省时省力', '坐等收益'],
  products: [
    {
      month: '3',
      info: '3.50%',
      money: 1880,
      canBuy: true
    },
    {
      month: '3-6',
      info: '3.60%',
      money: 2880,
      canBuy: true
    },
    {
      month: '6-12',
      info: '4.50%',
      money: 3880,
      canBuy: true
    },
    {
      month: '12-24',
      info: '5.50%',
      money: 4880,
      canBuy: true
    },
    {
      month: '24',
      info: '6.50%',
      money: 5880,
      canBuy: true
    },
  ]
}

export const product02 = {
  title: '债权/散标产品',
  titleEm: ['自主投资', '期限灵活'],
  products: [
    {
      month: '3',
      sub: '日常生活消费',
      info: '3.50%',
      money: 18800,
      canBuy: true,
      btnText: '投标'
    },
    {
      month: '5',
      sub: '资金周转',
      info: '3.60%',
      money: 28800,
      canBuy: true,
      btnText: '投标'
    },
    {
      month: '7',
      sub: '个人消费',
      info: '4.50%',
      money: 38800,
      canBuy: false,
      btnText: '还款中'
    },
    {
      month: '1',
      sub: '日常生活消费',
      info: '5.50%',
      money: 48800,
      canBuy: false,
      btnText: '还款中'
    },
    {
      month: '12',
      sub: '资金周转',
      info: '6.50%',
      money: 58800,
      canBuy: false,
      btnText: '已满标'
    },
  ]
}
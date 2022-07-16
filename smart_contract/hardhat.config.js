// https://eth-rinkeby.alchemyapi.io/v2/awJ5AfALmWbCOUSmXeQ4Vdz7-Puv7aRv

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/awJ5AfALmWbCOUSmXeQ4Vdz7-Puv7aRv',
      accounts: [ 'a9f300ab5a07047977e4be18da26cbc1071ca0872c00db3b8145dae28feadac9' ]
    }
  }
}

require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/<key>",
      accounts: [e091b796d76b2261e7931178ed2d1f64f8218dec9bcd5f67028a7705e3ac1a33]
    }
  },
}
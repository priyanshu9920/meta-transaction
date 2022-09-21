// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('Box');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x8d0Fc34A956e264F87D64B84fC43820cb5544c0D', BoxV2);
  console.log('Box upgraded');
}

main();

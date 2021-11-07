const func = async function (hre) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();

    await deploy('LSPCWrapper', {
        from: deployer,
        log: true,
    });
};
func.tags = ['LSPCWrapper'];
module.exports = func;


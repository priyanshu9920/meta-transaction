import Button from '@mui/material/Button';
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const injected = new InjectedConnector({ supportedChainIds: [80001] });

const MetamaskButton = () => {
    const { active, activate, deactivate} = useWeb3React();
    console.log(`ACTIVE: ${active}`);

    const handleButtonClick = () => {
        if (active) {
            deactivate();
        } else {
        activate(injected);
        }
    };
    return ( 
    <Button variant="contained"  color= {active ? "primary":"error"} onClick={handleButtonClick}>
        { active ? "Disconnect Wallet": "Connect Wallet"}
        </Button>
    );
};
export default MetamaskButton;

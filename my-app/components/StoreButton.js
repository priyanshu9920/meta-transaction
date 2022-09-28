import { ethers } from 'hardhat';
import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import abi from "../abi/abi.json";
const StoreButton = () => {
    const { library, account } = useWeb3React();
    const handleButtonClick = async () => {
        const contract = new ethers.Contract(
            "0x68865f4f8488696874a50d8BC4B501f80EFeD214",
             abi,
             library.provider
             );
         const signer = contract.connect(library.getSigner());
         await signer.store(val);
        
    };
    return <Button variant="contained" onClick={handleButtonClick}>Store value</Button>
}

export default StoreButton;

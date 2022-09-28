import { Box, Grid, StyledEngineProvider, TextField } from '@mui/material'
import { ethers, BigNumber} from 'hardhat';
import { useEffect } from 'react';


import abi from "../abi/abi.json";
import { useWeb3React } from '@web3-react/core';
import StoreButton from './StoreButton';

const SmartContractGrid = () => {
    const [val, setVal] = useState(0);
    const [newVal, setnewVal] = useState();
    const { library } = useWeb3React();
    useEffect(() => {
       const init=async() => {
         
         const contract = new ethers.Contract(
            "0x68865f4f8488696874a50d8BC4B501f80EFeD214",
             abi,
             library.provider
             );
         
         const smartContractVal = await contract.retrieve();
         
         
         setVal(BigNumber.from(smartContractVal).toNumber());
       };
       init();
    }, []);
    return (
        
         <Grid container justifyContent="center" alignItems="center">
    <Grid item xs={2}>
        <TextField placeholder={val} value={newVal} onChange={(e) => setnewVal(e.target.value)}/>
      
    </Grid>
        <Grid item xs={2}>
            <StoreButton val={newVal}/>
        </Grid>
  </Grid>   
    
   
  );
}
export default SmartContractGrid;

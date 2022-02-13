import React from "react";
import { Wrapper, Grid, Box } from "./Counter.styles";


function Counter({background="/images/counter-bg.jpg"}){
    return (
        <>
            <Wrapper background={background}>
                <Grid className="container">
                    <Box>
                        <span>90+</span>
                        <h3>online courses</h3>
                    </Box>
                    <Box>
                        <span>40+</span>
                        <h3>online instructors</h3>
                    </Box>
                    <Box>
                        <span>100+</span>
                        <h3>gym equipment</h3>
                    </Box>
                    <Box>
                        <span>2000+</span>
                        <h3>satisfied client</h3>
                    </Box>
                    
                </Grid>
            </Wrapper>
        </>
    )
}


export default Counter;
























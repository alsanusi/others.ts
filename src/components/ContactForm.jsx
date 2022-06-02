import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm(){
    return(
       <div className="ClassForm">
        <Card>
            <CardContent>
                <form></form>
                <Grid container spacing={1}>
                    <Grid xs={12} item>
                        Name
                        <TextField label="Your Name" placeholder="Enter Your Name" variant="outlined" fullwidth/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Your Email" placeholder="Enter Your Email" variant="outlined" fullwidth/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Message" multiline rows={6} placeholder="Type your message here" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid xs={12} item>
                        <Button variant="contained" color="White" fullwidth> Send </Button>
                    </Grid>
                </Grid>
            </CardContent>                           
        </Card>  
       </div> 
    )
}

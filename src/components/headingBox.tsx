import * as React from 'react';
import { Typography, Button, Grid } from '@mui/material';


export default function headingBox() {
    const description = 'AN ACT TO INCLUDE IN THE CURRICULA OF ALL PUBLIC AND PRIVATE SCHOOLS, COLLEGES AND UNIVERSITIES COURSES ON THE LIFE, WORKS AND WRITINGS OF JOSE RIZAL, PARTICULARLY HIS NOVELS NOLI ME TANGERE AND EL FILIBUSTERISMO, AUTHORIZING THE PRINTING AND DISTRIBUTION THEREOF, AND FOR OTHER PURPOSES';
    const capitalizedDesc = description.toLowerCase().replace(/(?:^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
    /*
        \S      non-space characters
        ^       beginning of string
        |       or
        \s      space character
        g       global (not just first occurence, but all occurences in the entire string)

        /(?:^|\s)\S/g   "get the first letter and every letter that comes after a space"
    */
    return (
        <Grid container spacing={2} sx={{margin: '88px 0'}}>
            <Grid item xs={5}>
                <Typography variant="h1">
                    Debates on the Rizal Law
                </Typography>
            </Grid>

            <Grid item xs={7}>
                <Typography variant="h4" sx={{'margin': '16px 0 16px 0'}}>
                    Republic Act No. 1425
                </Typography>
                <Typography variant="subtitle1" >
                    {capitalizedDesc}
                </Typography>
                <Button sx={{'margin': '16px 0 16px 0'}} variant="outlined" target="_blank" href="https://www.officialgazette.gov.ph/1956/06/12/republic-act-no-1425/">View Official Gazette page</Button>
            </Grid>
        </Grid>
    );
}
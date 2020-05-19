import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Newspapers(){
    const classes = useStyles();
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1840s: Palladium of Liberty</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1850s: Aliened American</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1860s: Black Press circa the Civil War</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1870s: 2nd Generation of Black Journalism</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1880s: Renaissance of the Black Press in Ohio</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="success">
                        <h4 className={classes.cardTitleWhite}>1890s: Beyond Ohio</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                        
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

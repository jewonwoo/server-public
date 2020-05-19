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

import about from "./about.js"
import sam from "./sourcesAndMethods.js"
import ack from "./acknowledgement.js"
const useStyles = makeStyles(styles);


export default function Introduction(){
    const classes = useStyles();
    return(
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>About this Project</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>

                            {about}
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Sources and Methods</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                            We are here.
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Acknowledgement</h4>
                        <p className={classes.cardCategoryWhite}>
                            
                        </p>
                        </CardHeader>
                        <CardBody>
                            {ack}
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

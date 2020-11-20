import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from "@material-ui/core/styles/makeStyles";

export default function ProfileOverviewItem({profile}) {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {profile.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {profile.location}
                </Typography>
                <Typography variant="body2" component="p">
                    {profile.birthday}
                    <br />
                    {profile.skills}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    name: {
        fontSize: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

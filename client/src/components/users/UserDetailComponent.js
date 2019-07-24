import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Chip, Grid, ButtonBase, Button } from "@material-ui/core";
import moment from "moment";
import { Bookmarks, FavoriteOutlined } from "@material-ui/icons";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const useStyles = makeStyles(theme => ({
  chip: {
    marginBottom: 4,
    marginLeft: 10
  },
  type: {
    width: 100,
    textAlign: "left",
    fontWeight: "bold"
  },
  image: {
    width: 175,
    height: 175
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

export default function UserDetailComponent({
    user = {
        name: "",
        surname: "",
        birthdate: moment().format("DD-MM-YYYY"),
        description: "",
        profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4",
        inscriptiondate: moment().format("DD-MM-YYYY"),
        followers: [
        {
            _id: "",
            name: "",
            surname: "",
            profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
        }
        ],
        favorites: [
        {
            _id: "",
            title: "",
            timetoread: 5,
            score: 5,
            user: {
            name: "",
            surname: "",
            profilepictureurl: ""
            }
        }
        ],
        bookmarks: [
        {
            _id: "",
            title: "",
            timetoread: 6,
            score: 8,
            description: "",
            mainimage: "",
            date: moment().format("DD-MM-YYYY"),
            type: {
                name: ""
            },
            tags: [""],
            user: {
            name: "",
            surname: "",
            profilepictureurl: ""
            }
        }
        ],
        posts: [
        {
            _id: "String",
            title: "String",
            timetoread: 6,
            score: 6
        }
        ]
    }
}) {
  const classes = useStyles();

  return (
    <>
    <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
    >
        {/* ---- INFOS ---- */}
        <Grid item sm={2} style={{ borderRight: "1px solid grey" }}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
            >

            {/* Image */}
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={user.profilepictureurl}
                />
              </ButtonBase>
            </Grid>
            {/* -- */}

            {/* - KPI - */}
            <Grid item>
              <Typography variant="caption" component="h4">
                <b>Full Name : </b>
                {
                      user.name +
                      " " +
                      user.surname
                } 
                <br />
                <b>Birthdate : </b>
                {user.birthdate}
                <br />
                <b>Description : </b>
                {user.description}
              </Typography>
            </Grid>

            {/* Follow */}
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                // onClick={handleFollow}
            >
                {/* <Follow
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                /> */}
                {/* {followed ? "Unfollow" : "Follow"} */}
                Follow
              </Button>
            </Grid>

        </Grid>

        {/* ----  CONTENT ----*/}
        <Grid item sm={7}>
 


        </Grid>
        {/* ---- */}

        {/* OTHER */}
        <Grid item sm={2} />
        
        </Grid>
    </Grid>
    </>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

export default function DashboardPostsTable({ posts = [] }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Time to Read</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* IF NO DATA */}
          {posts.length === 0 && (
            <TableRow key="nodata">
              <TableCell>No data found</TableCell>
            </TableRow>
          )}

          {/* DISPLAYING DATA */}
          {posts.map(post => (
            <TableRow key={post._id}>
              <TableCell component="th" scope="row">
                {post.title}
              </TableCell>
              <TableCell align="right">{post.timetoread}</TableCell>
              <TableCell align="right">{post.score}</TableCell>
              <TableCell align="right">
                {moment().format("DD-MM-YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

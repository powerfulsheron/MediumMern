import React from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Select, Input, MenuItem } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { getAllPosts } from "../../redux/actions/posts";
import { PostsList } from "./PostsList";
import empty from "../../img/undraw_empty_xct9.svg";
import bookmarks from "../../img/undraw_bookmarks_r6up.svg";
import dreamer from "../../img/undraw_dreamer_gxxi.svg";
import { getAllTypes } from "../../redux/actions/types";

class PostsContainer extends React.Component {
  state = {
    activeTab: 0,
    currentType: -1
  };

  componentWillMount() {
    this.props.getAllPosts();
    this.props.getAllTypes();
  }

  handleChange = (event, newValue) => {
    this.setState({ ...this.state, activeTab: newValue });
  };

  handleChangeType = (event, newValue) => {
    this.setState({ ...this.state, currentType: newValue.props.value });
  };

  handleFilterType = posts => {
    if (this.state.currentType !== -1) {
      return posts.filter(e => {
        return e.type._id === this.state.currentType;
      });
    } else {
      return posts;
    }
  };

  selectedType = () => {
    if (this.state.currentType !== -1) {
      return this.props.types.types.filter(e => {
        return e._id === this.state.currentType;
      })[0];
    }
    return null;
  };

  render() {
    return (
      <>
        {!this.props.auth.logged && <Redirect to="/login" />}
        <Tabs
          value={this.state.activeTab}
          indicatorColor="secondary"
          onChange={this.handleChange}
        >
          <Tab disableRipple={true} label="Recent posts" />
          <Tab disableRipple={true} label="Posts per type" />
          <Tab disableRipple={true} label="Bookmarked posts" />
        </Tabs>

        {/* RECENT POSTS */}
        {this.state.activeTab === 0 && this.props.posts.postsLoaded && (
          <PostsList
            key="postlist_recent"
            posts={this.props.posts.posts}
            img={empty}
            text="No post"
          />
        )}

        {/* RECENT POSTS */}
        {this.state.activeTab === 1 && (
          <>
            <Typography
              style={{
                marginLeft: 40,
                width: 400
              }}
              variant="button"
            >
              Select the type :{" "}
            </Typography>
            <Select
              id="type_id"
              name="type_id"
              style={{
                margin: 40,
                marginBottom: 20,
                width: 400
              }}
              onChange={this.handleChangeType}
              value={this.state.currentType}
              input={<Input name="type" id="type-helper" />}
            >
              <MenuItem value={-1}>DEFAULT</MenuItem>
              {this.props.types.types &&
                this.props.types.types.map(option => (
                  <MenuItem key={option._id} value={option._id}>
                    {option.name}
                  </MenuItem>
                ))}
            </Select>

            {this.selectedType() && (
              <Typography
                style={{ marginLeft: 48, marginBottom: 48 }}
                variant="subtitle1"
              >
                <b>{this.selectedType().description}</b>
              </Typography>
            )}
            <PostsList
              key="postlist_type"
              posts={this.handleFilterType(this.props.posts.posts)}
              img={dreamer}
              text="No posts found for this type"
            />
          </>
        )}

        {/* BOOKMARKS POSTS */}
        {this.state.activeTab === 2 && (
          <PostsList
            key="postlist_bookmarks"
            posts={this.props.account.user.bookmarks}
            img={bookmarks}
            text="No bookmarks"
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  account: state.account,
  posts: state.posts,
  types: state.types
});

const mapActionToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts(dispatch)),
  getAllTypes: () => dispatch(getAllTypes(dispatch))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(PostsContainer);

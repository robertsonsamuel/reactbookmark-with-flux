import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    console.log('2. In API.saveBookmark()');
     post("/api/links", newBookmark).done(data => ServerActions.receiveOneLink(data));
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  },
  deleteBookmark(bookmarkId){
    console.log('2. In API.deleteBookmark()');
    post('/api/deletelink',{id:bookmarkId}).done(data => ServerActions.receiveLinks(data.links));
  },
  likeBookmark(bookmark){
    console.log('2. In API.likeBookmark()');
    post('/api/likelink',bookmark).done(data => ServerActions.receiveLinks(data.links));
  }
};

export default API;

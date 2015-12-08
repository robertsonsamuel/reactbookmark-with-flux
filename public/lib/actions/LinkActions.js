import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark){
    console.log('1. In Linkactions.saveNewBookmark()');
    API.saveBookmark(newBookmark);
  },

  getAllBookmarks() {
    console.log("1. In LinkActions.getAllBookmarks()");
    API.fetchAllBookmarks();
  },
  deleteLink(bookmark){
    console.log('1. In LinkActions.deleteLink()');
    API.deleteBookmark(bookmark);
  },
  likeLink(bookmark){
    console.log('1. In LinkActions.likeLink()');
    API.likeBookmark(bookmark);
  }
};

export default LinkActions;

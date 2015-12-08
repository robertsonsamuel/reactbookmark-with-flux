import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveOneLink(link){
    /// Tell everyone about it
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_LINK,
      link
    })
  },
  receiveLinks(links) {
    console.log("3. In ServerActions.receiveLinks()", links);
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },
  deleteLink(incomingLink){
    console.log('3. In ServerActions.deleteLink()',incomingLink);
    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE_LINK,
      incomingLink
    });
  },
  likeLink(incomingLink){
    console.log('3. In ServerActions.likeLink()');
    AppDispatcher.dispatch({
      actionType: ActionTypes.LIKE_LINK,
      incomingLink
    })
  }
};

export default ServerActions;

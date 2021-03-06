import { 
SET_FEED,
SET_VC,
SET_VP,
SET_EP,
REQ_ACCESSTOKEN,
UPLOAD_CONTENT,
DOWNLOAD_CONTENT
  } from 'redux/actions/actionTypes'

const initialState = {
  feed: null,
  vc: null,
  vp: null,
  verifyEndPoint: null,
  accessToken: null,
  downloadCert: null,
  downloadToken: null,
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED:
      return {
        ...state,
        feed: action.payload.feed,
      }
    case SET_VC:
      return{
        ...state,
        vc: action.payload.vc,
      }
    case SET_VP:
      return{
        ...state,
        vp: action.payload.vp,
      }
    case SET_EP:
      return{
        ...state,
        verifyEndPoint: action.payload.verifyEndPoint,
      }
    case REQ_ACCESSTOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      }
    case UPLOAD_CONTENT:
      return {
        ...state,
        downloadCert: action.payload.downloadCert,
      }
    case DOWNLOAD_CONTENT:
      return {
        ...state,
        downloadToken: action.payload.downloadToken,
      }     
    default:
      return state;
  }
}

export default contentReducer

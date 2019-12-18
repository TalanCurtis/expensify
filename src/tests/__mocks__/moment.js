// import moment from "moment";
// can't import ^ have to do it the jest way below
const moment = require.requireActual('moment')

export default ( timestamp = 0 ) => {
  return moment(timestamp);
}
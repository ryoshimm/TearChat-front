import { combineReducers } from 'redux'
import Admin from './containers/Admin/reducer'
import AdminUserList from './containers/AdminUserList/reducer'
import App from './containers/App/reducer'
import ColumnPublicMessage from './containers/ColumnPublicMessage/reducer'
import ColumnPrivateMessage from './containers/ColumnPrivateMessage/reducer'
import CreateRoom from './containers/CreateRoom/reducer'
import ManagerPc from './containers/ManagerPc/reducer'
import OperationPcDisplay from './containers/OperationPcDisplay/reducer'
import RoomPcView from './containers/RoomPcView/reducer'
import Register from './containers/Register/reducer'
import RoomList from './containers/RoomList/reducer'
import Session from './containers/Session/reducer'
import Table from './containers/Table/reducer'


export default combineReducers({
  Admin,
  AdminUserList,
  App,
  ColumnPublicMessage,
  ColumnPrivateMessage,
  CreateRoom,
  ManagerPc,
  RoomPcView,
  Register,
  RoomList,
  OperationPcDisplay,
  Session,
  Table,
})

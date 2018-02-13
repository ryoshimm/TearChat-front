import request from 'superagent'
import { tokenCheckSuccess, tokenCheckFailed } from '../action'


const endpoint = 'http://localhost:5000/api'


export const apiTokenCheck = (input_access_token) => async (dispatch) => {
  try {
    const token = 'Bearer ' + input_access_token

    const res = await request
      .get(endpoint + '/auth/token_check')
      .set({Authorization: token})

    const {user_id, user_name} = res.body

    // ローカルストレージに保存
    Object.keys(res.body).forEach(key => {
      localStorage.setItem(key, res.body[key])
    })

    dispatch(tokenCheckSuccess(user_id, user_name))
  } catch (err) {
    dispatch(tokenCheckFailed())
  }
}

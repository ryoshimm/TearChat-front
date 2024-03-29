/**
 * INITIALIZED
 */
// 全ての初期化が成功時，ロード終了
export const successInitialized = () => {
  return {
    type: 'SUCCESS_INITIALIZED',
    isLoading: true,
  }
}

// 退出時初期化
export const successClearSession = () => {
  return {
    type: 'SUCCESS_CLEAR_SESSION',
  }
}

// 部屋情報取得
export const successInitializedRoomInfo = (room) => {
  return {
    type: 'SUCCESS_INITIALIZED_ROOM_INFO',
    room: room,
  }
}

// socket追加
export const addNewSocket = (socket) => {
  return {
    type: 'ADD_NEW_SOCKET',
    socket: socket,
  }
}

// KPアサイン
export const assignKp = (bool) => {
  return {
    type: 'ASSIGN_KP',
    isKp: bool,
  }
}

// 自分のchannelIdアサイン
// KPの場合はchannelIdを0にセット
export const assignSelfChannelId = (selfChannelId) => {
  return {
    type: 'ASSIGN_SELF_CHANNEL_ID',
    selfChannelId: selfChannelId,
  }
}

/**
 * UPDATE
 */
// アクティブユーザ更新
export const updateActiveUsers = (activeUsers) => {
  return {
    type: 'UPDATE_ACTIVE_USERS',
    activeUsers: activeUsers,
  }
}

// メンバー更新
export const updateMembersInfo = (membersInfo) => {
  return {
    type: 'UPDATE_MEMBERS_INFO',
    membersInfo: membersInfo,
  }
}

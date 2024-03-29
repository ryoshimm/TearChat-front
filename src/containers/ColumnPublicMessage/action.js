export const successInitializedPublicMessages = (publicMessages) => {
  return {
    type: 'SUCCESS_INITIALIZED_PUBLIC_MESSAGES',
    publicMessages: publicMessages,
  }
}

export const successUpdatePublicMessage = (message) => {
  return {
    type: 'SUCCESS_UPDATE_PUBLIC_MESSAGE',
    message: message,
  }
}

export const successClearPublicMessage = () => {
  return {
    type: 'SUCCESS_CLEAR_PUBLIC_MESSAGE'
  }
}

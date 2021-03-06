'use strict'

const createSaveMessage = require('./saveMessage')
const createlogMessage = require('./logMessage')
const createConversationArray = require('./ConversationArray')

module.exports = (conversationService, messageService, timeout) => {
  
  if(!conversationService || !messageService) {
    return ({
      logIncoming: () => {},
      logOutgoing: () => {}
    })
  }
  const activeConversations = createConversationArray({ conversationService, timeout })
  const saveMessage = createSaveMessage(activeConversations, conversationService, messageService)
  return {
    logIncoming: createlogMessage(saveMessage, 'incoming'),
    logOutgoing: createlogMessage(saveMessage, 'outgoing')
  }
}
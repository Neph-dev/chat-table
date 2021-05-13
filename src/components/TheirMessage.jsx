function TheirMessage({ lastMessage, message }) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    
    return(
      <div className='message-row'>
        {isFirstMessageByUser && (
          <div
            className='message-avatar'
            style= {{ backgroundImage: `url(${message?.sender?.avatar})` }}
          />
        )}
        
        {
        //return image
          message?.attachments?.length > 0 ?
          <img 
            src={message.attachments[0].file}
            alt='image-attachment'
            className= 'message-image'
            style={{ marginLeft: isFirstMessageByUser ? '4px': '48px' }}
          /> : (
          <div 
            //return text
            className='message' 
            style={{ 
              float: 'left',
              backgroundColor: 'grey',
              color: 'white',
              marginLeft: isFirstMessageByUser ? '4px': '48px'
            }}>
            {message.text}
          </div>)
        }
        
      </div>
      )
  }
  
  export default TheirMessage;
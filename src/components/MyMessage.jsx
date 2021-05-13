function MyMessage({ message }){
  
    //check if the message is an image
    if(message?.attachments?.length > 0){
      return(
        <img 
          src={message.attachments[0].file}
          alt='message-image'
          className= 'message-image'
          style={{ float:'right' }}
        />
        )
    }
    
    return(
      <div 
      //return text
        className='message' 
        style={{ 
          float: 'right',
          marginRight: '18px',
          color: 'white',
          backgroundColor: 'black'
        }}>
        {message.text}
      </div>
      )
  }
  
  export default MyMessage
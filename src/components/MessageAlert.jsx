import'./MessageAlert.css'

export const MessageAlert = ({message,messageButton, funcion}) => {
  return (
    <div className="messageAlert">
        <span>{message}</span>
        <button onClick={funcion} className="button-message-alert">{messageButton}</button>
    </div>
  )
}

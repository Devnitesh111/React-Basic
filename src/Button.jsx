import PropTypes from 'prop-types'

const Button = ({content,next})=>{
//  const {content} = props

return (
  <>
    <button>{content}</button>
    <button>{next}</button>
    </>
   
)
}
// Button.defaultProps = {
//   content : "yodefaultpropbataaayakoho",
//   next : 99
// }
// Button.propTypes = {
//   next : PropTypes.string.isRequired
// }
export default Button 
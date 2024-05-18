import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM  from 'react-dom'

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const modalPortalElement=document.getElementById('modal-overlays')
const Modal = (props) => {
  return (
    // <Fragment>
    //   <Backdrop onClose={props.onClose}/>
    //   <ModalOverlay>
    //     {props.children}
    //   </ModalOverlay>
    // </Fragment>
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,
        modalPortalElement)}
        {ReactDOM.createPortal(<ModalOverlay
            
        > {props.children}</ModalOverlay>,
        modalPortalElement)}
    </Fragment>
  )
}

export default Modal

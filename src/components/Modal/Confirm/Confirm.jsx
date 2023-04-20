import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import './confirm.scss';

const Confirm = (props) => {
    return (
        <div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={props.isOpen}
                    onClose={props.handleCloseConfirm}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={props.isOpen}>
                        <div className="confirm">
                            <div className="confirm-header">Warning</div>
                            <div className="confirm-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, qui.
                            </div>
                            <div className="confirm-action">
                                <button className="confirm-action-button" onClick={props.handleCloseConfirm}>
                                    Cancel
                                </button>
                                <button className="confirm-action-button">Yes</button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
};

Confirm.propTypes = {
    isOpen: PropTypes.bool,
    handleCloseConfirm: PropTypes.func,
    handleConfirmButton: PropTypes.func,
};

export default Confirm;

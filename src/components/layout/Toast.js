import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ toasts }) =>
    (toasts && toasts.length > 0 && toasts.map(toast1 => {
    return(
    <div>
        {toast1.alertType === 'danger' && toast.error(toast1.msg)}
        {toast1.alertType === 'success' && toast.success(toast1.msg)}
        <ToastContainer limit={1} autoClose={4000} position="bottom-right" />
    </div>
    )
}));

Toast.propTypes = {
    toasts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    toasts: state.toast
})

export default connect(mapStateToProps)(Toast);
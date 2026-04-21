import './ErrorMessage.css';

export const ErrorMessage = ({ message }) => {
    return (
        <div className="error-box">
            <p>⚠️ {message}</p>
        </div>
    );
};
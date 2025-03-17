import "../styles/Button.css";

export const ButtonType = {
    NUMBER: 'number',
    OPERATOR: 'operator'
};

export function Button({ children, buttonType, handleClick }) {
    return (
        <div
            className={`button-container ${buttonType}`}
            onClick={() => handleClick(children)}>
            {children}
        </div>
    );
}

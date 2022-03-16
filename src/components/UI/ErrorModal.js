import React from 'react';
import Card from './Card';
import Button from './Button';
import Styles from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <Card className={Styles.modal}>
            <header className={Styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={Styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={Styles.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>

    )
};

export default ErrorModal
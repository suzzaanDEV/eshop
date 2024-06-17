import React from 'react'
import styles from './Contact.module.css';

const contact = () => {
    return (
        <div className={styles.contactUs}>
            <h1 className={styles.title}>Contact Us</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id="name" className={styles.input} placeholder="Your Name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" className={styles.input} placeholder="Your Email" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea id="message" className={styles.textarea} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    )
}

export default contact
import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = ({ resetCurrentNote, signOut }) => {
 
    
        return (
                <nav
                    className={css(styles.sidebar)}
                >
                    <div
                        className={css(styles.llogo)}
                    >
                        <img
                            src={quill}
                            alt="Noteherder"
                            className={css(styles.LogoImg)}
                        />
                    </div>

                    <a
                        href="/notes"
                        className={css(styles.newNote)}
                        onClick={(ev) => {
                            ev.preventDefault()
                            resetCurrentNote()
                         }} 
                    >
                        <img
                            src={newHover}
                            alt="New note"
                            className={css(styles.newNoteImg)}
                        />
                        <img                
                            src={newIcon}
                            alt="New note"
                            className={css(styles.newNoteImg, styles.NewNoteImgHover)}                                                        
                        />
                    </a>

                    <div className={css(styles.signOut)}>
                        <button 
                        className={css(styles.button)}
                        onClick={signOut}
                        >
                            <i 
                            className={`fas fa-sign-out-alt ${css(styles.buttonIcon)}`}
                            title="sign out"
                            >
                            </i>
                        </button>
                    </div>
                </nav>
        )
    }

const styles = StyleSheet.create({
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: 'o.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: ' "Fauna One" ',
        color: '#666',
        fontSize: '3rem',
    },
    LogoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: "2rem",
        position: "relative",
        width: "4rem",
    },
    newNoteImg: {
        position: 'absolute',
        left: '0',
        width: '100%',
        transition: 'opacity 0.25s ease-in-out',
    },
    NewNoteImgHover: {
        ':hover': {
            opacity: 0,
        }
    }, 
    signOut: {
        position: 'absolute',
        bottom: '1rem',
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008df8',
        cursor: 'pointer',
        outline: 'none',
    },
    buttonIcon: {
        fontSize: '2rem',
    },


})
export default Sidebar
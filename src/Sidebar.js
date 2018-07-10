import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return(
     <div 
     className="sidebar" 
     style={styles.sidebar}
     >
        <div 
            className="logo"
            style={styles.logo}
        >
            <img 
                src={quill} 
                alt="Noteherder" 
                style={styles.LogoImg}
            />
        </div>

        <a href="/notes">
        <img src={newHover} alt="New note" />
        <img src={newIcon} alt="New Note" />
        </a>
        <div className="SignOut">
            <button>
              <i className="fa fa-sign-out"></i>
            </button>
          </div> 
        </div> 
    )
}

const styles = {
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
    }
}
export default Sidebar
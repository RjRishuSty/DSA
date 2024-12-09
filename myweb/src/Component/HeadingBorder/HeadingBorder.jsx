import React from 'react'
import Styles from './HeadingBorder.module.css';

const HeadingBorder = ({context}) => {
  const isFooter = context ==="footer";
  return (
    <>
    <hr className={isFooter?Styles.footerMenuBorder:Styles.headingBorder}/>
    </>
  )
}

export default HeadingBorder
 
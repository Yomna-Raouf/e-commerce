import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className='homePage'>
            <div className='directoryMenu'>
                <div className="directoryMenu__menuItem">
                    <div className='directoryMenu__menuItemContent'>
                        <h1 className='directoryMenu__menuItemContentTitle'>HATS</h1>
                        <span className='directoryMenu__menuItemContentSubtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>

            <div className='directoryMenu'>
                <div className="directoryMenu__menuItem">
                    <div className='directoryMenu__menuItemContent'>
                        <h1 className='directoryMenu__menuItemContentTitle'>JAKETS</h1>
                        <span className='directoryMenu__menuItemContentSubtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>

            <div className='directoryMenu'>
                <div className="directoryMenu__menuItem">
                    <div className='directoryMenu__menuItemContent'>
                        <h1 className='directoryMenu__menuItemContentTitle'>SNAKERS</h1>
                        <span className='directoryMenu__menuItemContentSubtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>

            <div className='directoryMenu'>
                <div className="directoryMenu__menuItem">
                    <div className='directoryMenu__menuItemContent'>
                        <h1 className='directoryMenu__menuItemContentTitle'>WOMEN</h1>
                        <span className='directoryMenu__menuItemContentSubtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>

            <div className='directoryMenu'>
                <div className="directoryMenu__menuItem">
                    <div className='directoryMenu__menuItemContent'>
                        <h1 className='directoryMenu__menuItemContentTitle'>MEN</h1>
                        <span className='directoryMenu__menuItemContentSubtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;

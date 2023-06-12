import React from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './styles.css';

function ListItem () {

    const iconStyle = {
        color: 'white'
    }

    return (
        <div className='listItem'>
            <div className='listItem__icons'>
                <div className='listItem__icons--activity'>
                    <RestaurantIcon style={iconStyle} />
                </div>
                <div className='listItem__icons--favourite'>
                    <BookmarkBorderOutlinedIcon style={iconStyle} />
                </div>
            </div>
            <div className='listItem__title'>
                <h3>Activity Name</h3>
            </div>


        </div>    
        
        )
}

export default ListItem;
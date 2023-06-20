import React from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './styles.css';


function ListItem ({title, city, handleListItemClick, id, imageURL}) {
    
    function handleClick(id) {
        handleListItemClick(id)
    }
    

    const iconStyle = {
        color: 'white'
    }
    return (
        <div className='listItem'  theme xs={4} sm={5} md={7} lg={9} xl={11}>
            <div className='listItem__icons'>
                <div className='listItem__icons--activity'>
                    <RestaurantIcon style={iconStyle} />
                </div>
                <div className='listItem__icons--favourite'>
                    <BookmarkBorderOutlinedIcon style={iconStyle} />
                </div>
            </div>
            <div className='listItem__title'>
                <h3>{title}</h3>
                
            </div>


        </div>    
        
        )
}

export default ListItem;


// style={{backgroundImage: `url("${imageURL}")`}}

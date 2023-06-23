import React from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './styles.css';


function ListItem ({title, city, id, image}) {


    

    const iconStyle = {
        color: 'white'
    }
    return (
        <div className='listItem'  
        style={{
            backgroundImage: `url(${image})`,

            }} 
        theme xs={4} sm={5} md={7} lg={9} xl={11}>
            <div className='listItem__icons'>
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

// style={{height: "1em", width: "1em"}}

// style={{backgroundImage: `url("${imageURL}")`}}

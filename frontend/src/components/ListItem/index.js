import React from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './styles.css';
import { Button } from '@mui/material';


function ListItem ({title, city, id, image}) {

    const iconStyle = {
        color: 'white',
        fontSize: '2rem'
    }
    return (
        <div className='listItem'  
        style={{
            backgroundImage: `url(${image})`,

            }} 
        theme xs={4} sm={5} md={7} lg={9} xl={9}>
            <div className='listItem__icons'>
                <div className='listItem__icons--favourite'>
                    <Button>
                        <BookmarkBorderOutlinedIcon style={iconStyle} />
                    </Button>
                </div>
            </div>
            <div className='listItem__title'>
                <h3>{title}</h3>
                
            </div>


        </div>    
        
        )
}

export default ListItem;



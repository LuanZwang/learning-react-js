import React from 'react';
import './Comment.css';
import { formatRelative } from 'date-fns';
import userImage from '../../images/user.png'
import { ptBR } from 'date-fns/locale'

//stateless component
const Comment = props => {

    /*const style = {
        color: 'red',
        padding: '10px',
        fontSize: '30px'
    }*/

    return <div className="Comment">
        {/*<h2 style={style}>{props.name}</h2>*/}
        <img className="avatar" src={userImage} alt={props.name + " avatar"} />
        <div className="content">
            <h2 className="name">{props.name}</h2>
            <p className="email">{props.email}</p>
            <p className="message">{props.children}</p>
            <p className="date">{formatRelative(props.date, new Date(), { locale: ptBR })}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
}

export default Comment
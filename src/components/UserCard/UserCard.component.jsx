import React, {Fragment} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

// import './UserCard.styles.scss';

const UserCard = ({
  created_at,
  user_id,
  username,
  dateType,
  float,
  backgroundColor,
}) => {
  return (
    <Fragment>
      <div
        className='owner'
        style={{float: float, backgroundColor: backgroundColor}}
      >
        <div className='user-block fc-black-500 meta d-block text-right'>
          <div className='action-time text-black d-block lh-18'>
            {dateType ? dateType : 'asked'} {moment(created_at).fromNow(true)}{' '}
            ago
          </div>
          <div className='user-logo media media-card user-media align-items-center px-0 border-bottom-0 pb-0'>
            <Link className='user-link media-body d-flex flex-wrap align-items-center justify-content-between'  to={`/users/${user_id}`}>
              <div className='logo-wrapper media-img d-block'>
                <img
                  alt='user_logo'
                  src={`https://secure.gravatar.com/avatar/${user_id}?s=164&d=identicon`}
                />
              </div>
            </Link>
          </div>
          <div className='user-profile stats fs-12 d-flex align-items-center lh-18'>
            <Link
              className='user-profile-link fc-blue-600 pb-1'
              to={`/users/${user_id}`}
            >
              {username}
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserCard;
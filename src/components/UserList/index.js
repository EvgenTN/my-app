import React from 'react';

export default (props) => {
  console.log('props', props)
  const {
    users,
    deleteUser,
    showPhrase,
  } = props;
  return (
    <div className='container userList'>
      {
        users && users.map((item, id) => {
          const {
            name,
            age,
            image,
            phone,
            phrase,
            isPhrase,
          } = item;
          return (
            <React.Fragment
              key={id}
            >
              <div
                className='row table table-bordered'
              >
                <div
                  className='row col-md-11'
                  onClick={() => showPhrase(id)}
                >
                  <div className='image col-md-3'>
                    <img src={image} alt='image' width='50%' />
                  </div>
                  <div className='col-md-3'>{name}</div>
                  <div className='col-md-2'>{age}</div>
                  <div className='col-md-3'>{phone}</div>
                </div>
                <div className='col-md-1'>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteUser(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {isPhrase && 
              <div>{phrase}</div>
              }
            </React.Fragment>
          )
        })
      }
      

      <p>this is userList</p>
    </div>
  )
}
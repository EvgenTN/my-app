import React from 'react';

export default (props) => {
  console.log('props', props)
  const {
    users,
  } = props;
  return (
    <div className='container userList'>
      <div className='row'>

      </div>
      {
        users && users.map((item, id) => {
          return (
            <React.Fragment
              key={id}

            >
              <div
                className='row table table-bordered'
              >
                <div className='row col-md-11'>
                  <div className='image col-md-3'>
                    <img src={item.image} alt='image' width='50%' />
                  </div>
                  <div className='col-md-3'>{item.name}</div>
                  <div className='col-md-2'>{item.age}</div>
                  <div className='col-md-3'>{item.phone}</div>
                </div>
                <div className='col-md-1'>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

      <p>this is userList</p>
    </div>
  )
}
import React from 'react';

export default (props) => {
  // console.log('props', props)
  const {
    users,
    deleteUser,
    showPhrase,
    addUser,
    addName,
    addAge,
    addPhone,
    homeState,
  } = props;
  return (
    <div className='container userList'>
      <div className='userList__add'>
        <form className='form-group' onSubmit= {(e) => addUser(e)}>
          <input type='text' placeholder='Enter name' className='form-control' onChange={(e) => addName(e)} value={homeState.name} />
          <input type='text' placeholder='Enter age' className='form-control' onChange={(e) => addAge(e)} value={homeState.age} />
          <input type='text' placeholder='Enter phone' className='form-control' onChange={(e) => addPhone(e)} value={homeState.phone} />
          <button
            type='submit'
            className='btn btn-success'
          >
            Add User
          </button>
        </form>
      </div>
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
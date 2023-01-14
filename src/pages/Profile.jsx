import React from 'react'


const Profile = () => {
  return (
    <div className='post-search'>
      
    <section className='posts-container'>

      <form className='create-post-form'>
        
        <p className='create-post-text'>Create Post:</p>

        <div className='create-post-container'>

          <textarea  className="create-post-input" cols="30" rows="10" placeholder='Type something...'></textarea> 

          <input required style={{ display: "none" }} type="file" id="file" />

            <label htmlFor="file">

              <img className="add-img-to-post" src="https://img.icons8.com/ios-glyphs/512/add-image.png" alt="" />

            </label>

        </div>

        <button className='post'>Post</button>

      </form>

    </section>

    <section className='posts-container'>

      <div className='profile-info-container'>
        <img></img>
        <p>Fluffy</p>
      </div>

    </section>




    </div>
  )
}

export default Profile


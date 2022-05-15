import { useFormik } from 'formik'
import React from 'react'

const Comments = ({post}) => {
  const date = new Date()
    const formik = useFormik({
        initialValues: {
            commentCreator: '',
            dateCommented: date.toLocaleString(),
            commentContent: '',
                                    
        },
        onSubmit: () => {
          void 0
        }
    })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {post && <h1>Replying to {post.creator}</h1>}
          <textarea name="commentCreator" value={formik.values.commentCreator} cols="4" rows="20" onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
          <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Comments
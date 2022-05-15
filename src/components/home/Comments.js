import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'

const Comments = ({post}) => {
  const person = JSON.parse(localStorage.getItem("personInStorage"))
  const date = new Date()

  const validate = (values) => {
    const errors = {}
    if (!values.commentContent){
      errors.commentContent = 'Enter a comment'
    }
    return errors
  }
    const formik = useFormik({
        initialValues: {
            commentCreator: person.username,
            dateCommented: date.toLocaleString(),
            commentContent: '',
            postCommentedOn: post.id,
                                    
        },
        onSubmit: () => {
          axios.post("http://localhost:3020/comments", formik.values)
          console.log('Done')
        }
    })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {post && <h1>Replying to {post.creator}</h1>}
          <textarea name="commentContent" value={formik.values.commentContent} cols="4" rows="20" onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
          {formik.errors.commentContent && formik.touched.commentContent && <p>{formik.errors.commentContent}</p>}
          <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Comments
import { useState, useEffect } from 'react'

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/comments")
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])

  const posts = [
    {
      id: 1,
      title: 'Color Graphic Design Tips & Tricks',
      image: '/color.png',
      desc: 'Learn essential design principles, modern techniques, and professional workflow used by designers.',
      content: [
        'Focus on alignment and spacing',
        'Use proper typography hierarchy',
        'Maintain strong color contrast for readability',
        'Keep design clean and minimal',
        'Ensure consistency in fonts and spacing'
      ]
    },
    {
      id: 2,
      title: 'Design & Layout Workflow Guide',
      image: '/design.png',
      desc: 'Complete guide to designing professional visuals using design & layout with modern branding techniques.',
      content: [
        'Use templates smartly but always customize them',
        'Maintain brand consistency across all designs',
        'Use proper spacing and grid systems',
        'Export in high quality formats',
        'Follow modern layout structure'
      ]
    },
    {
      id: 3,
      title: 'Typography Theory for Designers',
      image: '/typo.png',
      desc: 'Understanding how typography impacts branding and user experience.',
      content: [
        'Choose readable and clean fonts',
        'Maintain proper hierarchy (H1, H2, body)',
        'Adjust line height for readability',
        'Avoid using too many fonts',
        'Typography defines brand personality'
      ]
    }
  ]

  const addComment = async () => {
    if (comment.trim() === '') return

    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment })
    })

    const data = await res.json()
    setComments(data.comments)
    setComment('')
  }

  // 🔐 PASSWORD DELETE (NO UI CHANGE)
  const deleteComment = async (id) => {
    const password = prompt("Enter Admin Password")

    const res = await fetch(`http://localhost:5000/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password })
    })

    const data = await res.json()

    if (data.success) {
      setComments(data.comments)
    } else {
      alert(data.message)
    }
  }

  const imageClass =
    "w-full aspect-[16/8] object-contain bg-white rounded-xl transition hover:scale-105 cursor-pointer"

  if (selectedPost) {
    return (
      <section className="min-h-screen py-24 px-6 md:px-10 bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

        <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-lg border border-sky-200 rounded-2xl p-8 shadow-lg">

          <button
            onClick={() => setSelectedPost(null)}
            className="text-sky-700 font-semibold mb-6 hover:text-sky-900 transition cursor-pointer hover:scale-105"
          >
            ← Back to Blog
          </button>

          <img src={selectedPost.image} className={`${imageClass} mb-6`} />

          <h2 className="text-4xl font-bold text-sky-900 mb-4">
            {selectedPost.title}
          </h2>

          <div className="mb-10 space-y-4">
            {selectedPost.content.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-sky-700 p-4 rounded-xl border-2 border-sky-700"
              >
                <span className="text-white font-bold">
                  {index + 1}.
                </span>
                <p className="text-white leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* COMMENTS UI (SAME AS YOUR ORIGINAL) */}
          <div className="bg-white/50 p-6 rounded-2xl border border-sky-200 mb-10">

            <h3 className="text-xl font-bold mb-3 text-sky-900">
              Comments
            </h3>

            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 rounded-xl mb-3 border-2 border-sky-700"
            />

            <button
              onClick={addComment}
              className="px-5 py-2 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition hover:scale-105 cursor-pointer"
            >
              Add Comment
            </button>

            <div className="mt-4 space-y-2">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="flex justify-between items-center bg-gray-100 border border-gray-300 p-2 rounded-lg"
                >
                  <p className="text-gray-800 font-bold">
                    {c.text}
                  </p>

                  <button
                    onClick={() => deleteComment(c.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    )
  }

  // MAIN UI SAME AS YOUR ORIGINAL
  return (
    <section className="py-24 px-6 md:px-10 bg-gradient-to-br from-sky-100 via-cyan-50 to-sky-100">

      <h2 className="text-4xl font-bold text-center mb-12 text-sky-900">
        Latest Blog Posts
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/40 backdrop-blur-lg border-4 border-sky-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={post.image} className={imageClass} />

            <div className="p-6 space-y-3">

              <h3 className="text-xl font-bold text-sky-900">
                {post.title}
              </h3>

              <p className="text-sky-700 text-sm">
                {post.desc}
              </p>

              <button
                onClick={() => setSelectedPost(post)}
                className="text-sky-600 font-semibold hover:text-sky-900 cursor-pointer hover:scale-105"
              >
                Read More →
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Blog
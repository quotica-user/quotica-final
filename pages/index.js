import React, { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, author, quote, date: new Date().toISOString() };
    setPosts([newPost, ...posts]);
    setTitle('');
    setAuthor('');
    setQuote('');
  };

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Quotica 投稿フォーム</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="書名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="著者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="引用文"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px', height: '100px' }}
        />
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}>
          投稿する
        </button>
      </form>

      <div style={{ marginTop: '30px' }}>
        {posts.map((post, index) => (
          <div key={index} style={{
            backgroundColor: '#f4f4f4',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '6px'
          }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{post.title}</h3>
            <p style={{ fontStyle: 'italic', margin: '0 0 10px 0' }}>著者: {post.author}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{post.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

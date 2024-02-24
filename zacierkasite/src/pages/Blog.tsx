import { pb } from '../lib/PocketBase';
import { useEffect } from 'react';

function Blog() {
    interface Post {
        id: string,
        content: string,
        user: string
    }
    const posts: Post[] = [];

    useEffect(() => {
        async function fetchData() {

          try {
            const data = await pb.collection('posts').getList<Post>(1,5);
            for (let i = 0; i < data.totalItems; i++) {               
                posts.push(data.items[i]);
            }
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);

    return (
        <div>
            <h1>{posts.length}</h1>
            <ul>
                <li ></li>
                {posts.map((post) => (
                    <li>{post.content}</li>
                ))}
            </ul>
        </div>
    )
}

export default Blog;
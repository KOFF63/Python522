import Post from'./Post'

function Posts(props){
    let {posts} = props;
    
    return (
        <div>
            {
                posts.map(post =>(
                    <Post
                        key={post.id}
                        id={post.id} 
                        name={post.name}
                        title={post.title}
                        removePost={props.removePost}
                    />
                ))
            }
        </div>
    )
}

export default Posts;
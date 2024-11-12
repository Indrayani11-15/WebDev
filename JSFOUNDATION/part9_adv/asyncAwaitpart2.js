function fetchPostdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data Fetched")
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment data fetched successfully")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const blogData = await fetchPostdata()
        // const commentData = await fetchCommentData()

        const [postData, commentData] = await Promise.all([
            fetchPostdata(), 
            fetchCommentData(),
        ])
        console.log(blogData);
        console.log(commentData);
        
        console.log("Fetch Complete");
        
        
    } catch (error)
     {
       console.log("Error fetching blog data", error);
        
    }
}

getBlogData()
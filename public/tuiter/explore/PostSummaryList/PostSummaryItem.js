const PostSummaryItem = (post) => {

    return (`
    
        <div class="border p-2 border-secondary">
            <div class="row">
                <div class="col-9">
                    <div class="fs-6 text-secondary">${post.topic}</div>
                    <div class="fs-6">
                        <span class="fw-bold">${post.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <span class="text-secondary m-lg-1">${post.time}</span>
                    </div>
                    <div class="fw-bold">
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${post.tuits}
                    </div>
                </div>
                <div class="col-3">
                    <img class="float-end rounded w-75" src=${post.image} alt=""/>
                </div>
            </div>
        </div>
        
    `);
}

export default PostSummaryItem;
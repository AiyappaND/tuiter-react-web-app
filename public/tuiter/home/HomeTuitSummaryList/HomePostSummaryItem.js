const HomePostSummaryItem = (homePost) => {
    return(`
            <div class="row">
                <div class="col-2">
                    <img alt="" class="float-end rounded-pill" height="60px" src=${homePost.userIcon}>
                </div>
                
                <div class="col-10">
                    <div>
                        <span class="fw-bolder">${homePost.user}</span> 
                        <i class="fas fa-check-circle"></i>
                        <span class="text-secondary"> ${homePost.handle} - ${homePost.time}</span>
                    </div>
                    
                    <div class="mb-1">${homePost.title}</div>
                    
                    <div class="border mb-2 p-1 rounded border-secondary">                
                        <img alt="" class="float-end rounded mb-2" width="100%" src=${homePost.image}>
                        <div class="mb-1 text-muted">${homePost.content?homePost.content: "No content available"}</div>
                    </div>
                    
                    <div class="row flex-fill">
                            <div class="col-3"> <i class="fas fa-heart"></i> ${homePost.likes}</div>               
                            <div class="col-3"> <i class="fas fa-comment-dots"></i> ${homePost.comments}</div>                    
                            <div class="col-3"><i class="fas fa-retweet"></i> ${homePost.retuits}</div>                    
                            <div class="col-3">
                                <i class="fas fa-arrow-circle-down"> </i> 
                            </div>
                        
                    </div>
                    
              </div>
            </div><hr>
   `);
}
export default HomePostSummaryItem;
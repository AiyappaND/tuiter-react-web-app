const WhoToFollowListItem = (who) => {
    return (`
        
        <div class="list-group-item p-lg-2 d-flex flex-row align-items-center">
            <div class="pe-xxl-2 pe-xl-2 pe-lg-1">
                <img class="rounded-circle thumbnail-custom"
                     src=${who.avatarIcon} alt=""/>
            </div>
            <div class="flex-grow-1 px-xxl-3 px-xl-3">
                <div class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
                <div class="text-secondary">@${who.handle}</div>
            </div>
            <div class="align-items-lg-end">
                <a class="btn btn-primary rounded-pill px-3" href="#">Follow</a>
            </div>
        </div>
    `);
}

export default WhoToFollowListItem;

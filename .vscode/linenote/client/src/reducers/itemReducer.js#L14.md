loading: false is because before making a request we called setItemsLoading which makes a request to reducer which sets loading:true.

This will make loading: false after retrieving new item
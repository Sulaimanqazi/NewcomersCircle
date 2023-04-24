idNum = 0;

var defaultThreads = [
    {
        
        id: ++idNum,
        title: "Opening thread- Welcome everyone!",
        author : "Sulaiman",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Sulaiman",
                date: Date.now(),
                content: "Here in this website forum immigrants in Canada can communicate andshare their experiences, ask questions and receive helpful advice from others who have gone through similar experiences. It's a platform where newcomers can connect with each other and find support as they navigate the challenges of settling into a new country."
            }
        ],
    }
    
]

var threads = defaultThreads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
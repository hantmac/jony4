var gitalk = new Gitalk({
    clientID: '4f34fdb512cf5b98062d',
    clientSecret: 'd70289111c22f8bfc8409f55455c73dcbe2d863e',
    repo: 'blog',
    owner: 'jony4',
    admin: ['jony4'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
  })
  
gitalk.render('gitalk-container')
  
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '一直很安静',
            artist: '阿桑',
            lrc: '/music/lrc/一直很安静 - 阿桑.lrc',
            cover: 'https://p1.music.126.net/SpovasHBud2A1qXXADXsBg==/109951163167455610.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191214131958/3e587124731a0c78ab4834e11bd89ca8/ymusic/070f/045e/0459/0e55df0d9a340cdd7d393391d0737f75.mp3'
                  },
        {
            name: '亲爱的旅人啊（Cover：木村弓）',
            artist: '周深',
            lrc: '/music/lrc/亲爱的旅人啊（Cover：木村弓）-周深.lrc',
            cover: 'https://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191214130757/898fea5ac15514028cdf24dd1eeabb46/ymusic/555f/525a/5258/b5f91cd86ce0046a6f70e249d0802a1e.mp3'
                  },
		{
            name: '陈情令：无羁',
            artist: 'Silu Wang',
            lrc: '/music/lrc/陈情令：无羁-Silu Wang.lrc',
            cover: 'http://p2.music.126.net/8eL7nls1F8o48_umy0uqBQ==/109951164361652548.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191102144314/e85a4a99852144dced7bc7eace047ecc/ymusic/015d/550f/5152/67f6f0756ebe8bd362f5f85c507acf68.mp3'
                 }, 
		{
            name: '一曲相思 ：半阳',
            artist: '半阳',
            lrc: '/music/lrc/一曲相思 -半阳.lrc',
            cover: 'http://p2.music.126.net/yHRY23bKbLJjjbSnE-T8gA==/109951163575213436.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191214091026/f910e12e339dda62a7bce3277bc34d57/ymusic/035f/0659/0653/457d7520ab133721525719042895f037.mp3'
                 },
        {
            name: '出山 ：花粥,王胜娚',
            artist: '/music/lrc/花粥,王胜娚',
            lrc: '出山-花粥,王胜娚.lrc',
            cover: 'http://p2.music.126.net/yHRY23bKbLJjjbSnE-T8gA==/109951163575213436.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191214133838/e132940444a8f754dcd8ea169713968c/ymusic/59c5/8f95/298d/11d842f39fb503bb9b29c37ad4080a14.mp3'
                 },				 
		{
            name: '下山 ：要不要买菜',
            artist: '要不要买菜',
            lrc: '/music/lrc/下山-要不要买菜.lrc',
            cover: 'http://p2.music.126.net/yHRY23bKbLJjjbSnE-T8gA==/109951163575213436.jpg?param=300x300',
            url: 'http://m10.music.126.net/20191214134015/0037d9b85c710a0cb0cbeae70041a642/ymusic/0058/050b/050c/722ab2fd3f2af0a151ad2f2840959bc8.mp3'
                 },		 
        ]
});	
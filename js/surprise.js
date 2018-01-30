//模拟数据库，获取信息
    var messages = ["瑞狗迎春","汪到福到",
                    "哼通狗年","狗运骑天",
                    "旺旺狗年","幸福吉祥",
                    "瑞狗迎春","汪到福到",
                    "幸福吉祥"
                ];
    var src = ["images/b.jpg", "images/c.jpg", 
               "images/d.jpg", "images/e.jpg", 
               "images/f.jpg", "images/g.jpg", 
               "images/h.jpg", "images/i.jpg",
               "images/j.jpg"
            ];

    //生成随机
    var p = document.getElementsByTagName("p")[0];
    var img = document.getElementsByTagName("img")[0];
    p.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    img.src = src[Math.floor(Math.random() * src.length)];

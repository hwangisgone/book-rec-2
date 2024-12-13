1. crawl group of user
scrapy crawl group_spider -O data.json 

=> có được danh sách user bao gồm thông tin liên quan đến user đó, và url của user

2. crawl rating and info about user
dẫn path của file json vừa crawl và chạy 
scrapy crawl user_spider -O data.json

=> tuy nhiên cái này sẽ có một số trường hợp ko có isbn, isbn13 => khi crawl bước tiếp theo của book mới có
có thể phải clean và join vào

3. crawl info about book
scrapy crawl book_spider -O data.json
=> crawl book lúc này book nào không có isbn, isbn13 thì mới có thể có



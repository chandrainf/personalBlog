---
template: post
thumbnail: 'https://ucarecdn.com/c47369c9-f74e-4c51-9e44-57822cbc4253/'
title: Deploy and Run a React web on digitalOcean
tags:
  - WEB
next: Simple react
draft: true
date: 2019-07-14T12:05:50.866Z
description: fast and furious to build and deploy a web  to digitalOcean.
---
Tôi không phải là devOps. Tuy vậy những công việc ngoài giờ của tôi đòi hỏi tôi phải làm việc với  cả Back-End, App, Web và  giờ là devOps.

Khi viết 1 ứng dụng web cho khách hàng bạn luôn phải đồng thời  phải build bản thử  nghiệm. Có nhiều cách để build và deploy  1 ứng dụng web lên nhiều VPS khác nhau.

Sau đây là ví  dụ về việc deploy 1 web lên DigitalOcean.

1. Cài đặt Nginx:

> apt update
>
> \
>
>
> apt install nginx

2. ull project web của bạn về:

* ạo public ssh key: **ssh-keygen -o -f ~/.ssh/id_rsa**
* Copy và add ssh key cho tk git: **cat ~/.ssh/id_rsa.pub**
* **Git clone 'git:your-project'**

3. Tạo new site trong "sites-available":

> cd /etc/nginx/sites-available
>
> \
>
>
> vim your-site.com

`server {`

`  listen 80;`

`  server_name your-site.com;`

`  server_name your-ip;`

`  root /root/your-project/build-forder`

`  index index.html;`

`  `

`  access_log /var/log/nginx/your-site.com.access.log;`

`  error_log /var/log/nginx/your-site.com.error.log;`

`  location / {`

`    try_files $uri /index.html =404;`

`  }`

`}`\
4. Kich hoạt hoạt động cho trang web:

> cd /etc/nginx/sites-enabled
>
> \
>
>
> ln -s ../sites-available/your-site.com .

5. Fix permission cho site:

> chown -R $USER:www-data /root/your-project
>
> \
>
>
> chmod 755 -R /root/your-project
>
> \
>
>
> chmod +x /root
>
> \
>
>
> chmod +x /root/your-project

6. Test nginx:

> nginx -t

7. Restart nginx

> /etc/init.d/nginx restart
>
>

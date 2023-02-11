# Film Info Project

Trang web xem thông tin và trailer Phim. Trang web mang mục đích học tập.

## Công nghệ sử dụng

- Frontend: ReactJS
- Backend: NodeJS

## API Nodejs

### Install NodeJS

[Link](https://nodejs.org/en/)  
Cài đặt bản 18.14.0 LTS

### Run API

```cmd
cd server
```

**Install package (chỉ chạy lệnh ở lần đầu tiên)**

```cmd
npm i
```

Tạo file .env trong thư mục api_nodejs

> DB_USERNAME=<DB Username trên máy local, mặc định "sa">  
> DB_PASSWORD=<DB Password trên máy local>  
> DB_NAME=<Tên DB, mặc định WebFilm>  
> JWT_REFRESH_KEY=<Chuỗi tùy ý>  
> JWT_ACCESS_KEY=<Chuỗi tùy ý>  
> REDIS_URL=<Link Redis>  
> PORT=<Port sử dụng>  
> HOST=<Host sử dụng>  
> LOCAL_CLIENT_APP=<Đường dẫn local client>  
> REMOTE_CLIENT_APP=<Đường dẫn remote client>  
> LOCAL_SERVER_API=<Đường dẫn local server>  
> REMOTE_SERVER_API=<Đường dẫn remote server>  

**Chạy API**

```npm
npm run dev
```

## Client

### Run client

```cmd
cd client
```

**Install package (chỉ chạy lệnh ở lần đầu tiên)**

```cmd
npm i
```

**Chạy Client**

```cmd
npm start
```

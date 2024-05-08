# Bidv shell app

## Setup bidv-auth

### Cài đặt lần đầu

để cài đặt lần đầu, tìm và sửa các thư viên sau trong file package.json và xóa file package-lock.json

"@bidv-auth/cdk": "file:./packages/bidv-auth-cdk-0.0.1.tgz",
"@bidv-auth/layout": "file:./packages/bidv-auth-layout-0.0.1.tgz",
"@bidv-auth/router": "file:./packages/bidv-auth-router-0.0.1.tgz",

chạy `npm i`

sau khi chạy npm i thành công thì sửa thư viện thành:

"@bidv-auth/cdk": "0.0.1",
"@bidv-auth/layout": "0.0.1",
"@bidv-auth/router": "0.0.1",

### Cập nhập thư viện

Trong trường hợp đã cài đã đặt trước đó và thư viện cần cập nhật

Trong node_modules xóa thư mục ``@bidv-auth``

Xoác các file bắt đầu bằng `bidv-auth`

sao chép thư viện mới vào thư mục `packages`

chạy lệnh ``npm cache clear --force``

tìm và sửa các thư viên sau trong file package.json và xóa file `package-lock.json`

"@bidv-auth/cdk": "file:./packages/bidv-auth-cdk-0.0.1.tgz",
"@bidv-auth/layout": "file:./packages/bidv-auth-layout-0.0.1.tgz",
"@bidv-auth/router": "file:./packages/bidv-auth-router-0.0.1.tgz",

chạy `npm i`

sau khi chạy npm i thành công thì sửa thư viện thành:

"@bidv-auth/cdk": "0.0.1",
"@bidv-auth/layout": "0.0.1",
"@bidv-auth/router": "0.0.1",


rồi chạy `npm i` tiếp

## Dev

chạy lệnh `npx nx serve host` để tạo môi trường dev

## Production - host

- xóa dữ liệu trong thư mục build/host, dist
- chạy lệnh `npm run app:build`
- chạy lệnh `npm run npm run app:publish`
- dữ liệu sẽ nằm trong thư mục build/host
- sao chép dữ liệu trong build/host để mang đi triển khai

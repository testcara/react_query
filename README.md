# react_query
1. npx create-react-app my-app --template typescript --verbose
2. npm uninstall react react-dom
3. npm install --no-audit --save --verbose @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 @types/jest@^27.0.1 @types/node@^16.7.13 @types/react@^18.0.0 @types/react-dom@^18.0.0 typescript@^4.4.2 web-vitals@^2.1.0
4. fix the reportvitals error and add tsconfig.json
before init
5. npm install @tanstack/react-query
6. npm install react-redux
npm install @types/react-redux --save-dev
1. react query知识点
react query是一个用于管理和缓存服务器数据的库。它可以简化react应用中数据获取、缓存、同步和更新的过程。
- queryclientprovider是整个应用的上下文提供者，确保react query能够管理数据缓存和请求状态。
- queryclient是react query的核心对象，负责管理查询缓存，请求队列等。
- userquery是react query用于获取数据的hook，你可以用它来发起请求并管理请求状态。
- useMutation用于处理与服务器的创建、更新、删除等操作，它适用于发送数据请求，如post/delete/put等。
- refetch手动触发数据重新请求
- queryclient可以手动清理缓存，queryclient.clear()
- useQueries 可以同时发起多个请求
- 支持分页查询，通过usequery配合page和pagesize进行分页加载。
8. npm install @patternfly/react-core @patternfly/react-icons
├── @patternfly/react-core@6.1.0
├── @patternfly/react-icons@6.1.0
├── @reduxjs/toolkit@2.5.0
├── @tanstack/react-query@5.64.0
├── @types/axios@0.14.4
├── @types/react-redux@7.1.34
├── @types/react-router-dom@5.3.3
├── axios@0.27.2
├── react-dom@18.0.0
├── react-redux@9.2.0
├── react-router-dom@7.1.1
└── react@18.0.0


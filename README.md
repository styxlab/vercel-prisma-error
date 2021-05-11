# Vercel Prisma issue:

2021-05-11T11:39:30.865Z Warning: Max serverless function size of 50 MB compressed or 250 MB uncompressed hit
2021-05-11T11:39:30.866Z Serverless Function's page: api/v1/graphql.js
2021-05-11T11:39:30.871Z Large Dependencies Uncompressed size Compressed size
2021-05-11T11:39:30.871Z node_modules/@prisma/engines 113 MB 39.6 MB
2021-05-11T11:39:30.871Z node_modules/.prisma/client 46.2 MB 16.1 MB
2021-05-11T11:39:30.871Z node_modules/prisma/build 5.3 MB 1.09 MB
2021-05-11T11:39:30.871Z node_modules/@prisma/client 3.93 MB 823 kB
2021-05-11T11:39:30.871Z node_modules/busboy/deps 618 kB 196 kB
2021-05-11T11:39:30.872Z node_modules/micro/node_modules 360 kB 190 kB
2021-05-11T11:39:30.872Z node_modules/encoding/node_modules 328 kB 179 kB
2021-05-11T11:39:30.872Z node_modules/lodash/lodash.js 544 kB 96.4 kB
2021-05-11T11:39:30.873Z  
2021-05-11T11:39:30.873Z All dependencies 174 MB 59.1 MB
2021-05-11T11:39:30.873Z Max serverless function size was exceeded for 1 function
2021-05-11T11:39:31.034Z Created all serverless functions in: 44.414s
2021-05-11T11:39:45.335Z Failed to process build result for "api/v1/graphql". Data: {"type":"Lambda","zipBuffer":{"type":"Buffer","data":[80,75,3,4,20,0,0,8,8,0,239,92,171,82,104,52,206,48,15,6,0,0,57,24,0,0,31,0,0,0,46,110,101,120,116,47,115,101,114,118,101,114,47,119,101,98,112,97,99,107,45,114,117,110,116,105,109,101,46,106,115,173,88,.
2021-05-11T11:39:45.344Z Error: The Serverless Function "api/v1/graphql" is 57.34mb which exceeds the maximum size limit of 50mb. Learn More: https://vercel.link/serverless-function-size
2021-05-11T11:39:46.677Z

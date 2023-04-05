deno run --watch --allow-net --allow-read --allow-env src/api.ts

npx pocketbase-typegen --db ./database/pb_data/data.db --out ./temp/types.ts

./database/pb.exe serve
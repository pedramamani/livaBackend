deno run --watch --allow-net --allow-read --allow-env src/api.ts

npx pocketbase-typegen --db ./pocketbase/pb_data/data.db --out ./temp/types.ts

./pocketbase/main.exe serve
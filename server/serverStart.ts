import * as fs from "fs";
import * as path from "path";
import { exec } from "child_process";
import type { ThingArray } from "../src/shared/types/things.ts";

const dbDirPath = "server/db";
const dbFileName = "db.json";
const fullDbPath = path.join(dbDirPath, dbFileName);

interface DatabaseSchema {
  things: ThingArray;
}

// Проверка наличия директории
if (!fs.existsSync(dbDirPath)) {
  console.log(`Директория ${dbDirPath} не найдена. Создание...`);
  fs.mkdirSync(dbDirPath);
}

// Проверка наличия файла базы данных
if (!fs.existsSync(fullDbPath)) {
  console.log(`${fullDbPath} не найден. Создание JSON-файла...`);

  const initialData: DatabaseSchema = {
    things: [
      {
        id: "1",
        name: "Storage",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Keys",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  };

  fs.writeFileSync(fullDbPath, JSON.stringify(initialData));
}

// Запуск json-server
exec(`npx json-server --port 3001 ${fullDbPath}`, (err, stdout) => {
  if (err) throw err;
  console.log(stdout);
});
